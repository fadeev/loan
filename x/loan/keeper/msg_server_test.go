package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/loan/testutil/keeper"
	"github.com/cosmonaut/loan/x/loan/keeper"
	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LoanKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
