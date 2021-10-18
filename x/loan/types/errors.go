package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/loan module sentinel errors
var (
	ErrWrongLoanState = sdkerrors.Register(ModuleName, 1, "wrong loan state")
	ErrDeadline       = sdkerrors.Register(ModuleName, 2, "deadline")
	ErrSendCoinsFail  = sdkerrors.Register(ModuleName, 3, "fail to send coins")
)
