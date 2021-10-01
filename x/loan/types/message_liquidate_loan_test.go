package types

import (
	"testing"

	"github.com/cosmonaut/loan/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgLiquidateLoan_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgLiquidateLoan
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgLiquidateLoan{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgLiquidateLoan{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
