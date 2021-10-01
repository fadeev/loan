package keeper

import (
	"context"
	"fmt"
	"strconv"

	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) LiquidateLoan(goCtx context.Context, msg *types.MsgLiquidateLoan) (*types.MsgLiquidateLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loan, found := k.GetLoan(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	moduleAcc := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	lender, _ := sdk.AccAddressFromBech32(loan.Lender)
	amount, _ := sdk.ParseCoinsNormalized(loan.Amount)

	deadline, err := strconv.ParseInt(loan.Deadline, 10, 64)
	if err != nil {
		panic(err)
	}

	if ctx.BlockHeight() > deadline {
		k.bankKeeper.SendCoins(ctx, moduleAcc, lender, amount)
	}

	return &types.MsgLiquidateLoanResponse{}, nil
}
