package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) RepayLoan(goCtx context.Context, msg *types.MsgRepayLoan) (*types.MsgRepayLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loan, found := k.GetLoan(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	lender := sdk.AccAddress(loan.Lender)
	borrower := sdk.AccAddress(loan.Borrower)
	amount, _ := sdk.ParseCoinsNormalized(loan.Amount)
	fee, _ := sdk.ParseCoinsNormalized(loan.Fee)
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collateral)
	moduleAcc := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	k.bankKeeper.SendCoins(ctx, borrower, lender, amount)
	k.bankKeeper.SendCoins(ctx, borrower, lender, fee)
	k.bankKeeper.SendCoins(ctx, moduleAcc, borrower, collateral)

	loan.State = "repayed"

	k.SetLoan(ctx, loan)

	return &types.MsgRepayLoanResponse{}, nil
}
