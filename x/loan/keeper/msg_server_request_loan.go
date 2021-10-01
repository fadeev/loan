package keeper

import (
	"context"

	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) RequestLoan(goCtx context.Context, msg *types.MsgRequestLoan) (*types.MsgRequestLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	var loan = types.Loan{
		Amount:     msg.Amount,
		Fee:        msg.Fee,
		Collateral: msg.Collateral,
		Deadline:   msg.Deadline,
		State:      "requested",
		Borrower:   msg.Creator,
	}

	// TODO: collateral has to be more than the amount (+fee?)

	moduleAcc := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	borrower := sdk.AccAddress(msg.Creator)

	collateral, err := sdk.ParseCoinsNormalized(loan.Collateral)
	if err != nil {
		panic(err)
	}

	sdkError := k.bankKeeper.SendCoins(ctx, borrower, moduleAcc, collateral)
	if sdkError != nil {
		return nil, sdkError
	}

	k.AppendLoan(
		ctx,
		loan,
	)

	return &types.MsgRequestLoanResponse{}, nil
}
