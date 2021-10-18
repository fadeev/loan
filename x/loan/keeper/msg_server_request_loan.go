package keeper

import (
	"context"

	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RequestLoan(goCtx context.Context, msg *types.MsgRequestLoan) (*types.MsgRequestLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loan := types.Loan{
		Amount:     msg.Amount,
		Fee:        msg.Fee,
		Collateral: msg.Collateral,
		Deadline:   msg.Deadline,
		State:      "requested",
		Borrower:   msg.Creator,
	}

	// TODO: collateral has to be more than the amount (+fee?)
	borrower, _ := sdk.AccAddressFromBech32(msg.Creator)
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, borrower, types.ModuleName, msg.Collateral)
	if err != nil {
		return nil, err
	}
	loan.Id = k.AppendLoan(ctx, loan)

	return &types.MsgRequestLoanResponse{}, nil
}
