package keeper

import (
	"github.com/cosmonaut/loan/x/loan/types"
)

var _ types.QueryServer = Keeper{}
