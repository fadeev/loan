package types

import (
	"testing"

	"github.com/cosmonaut/loan/testutil/sample"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgRequestLoan_ValidateBasic(t *testing.T) {
	coins := sdk.NewCoins(
		sdk.NewCoin("foo", sdk.NewInt(100)),
		sdk.NewCoin("bar", sdk.NewInt(200)),
		sdk.NewCoin("foobar", sdk.NewInt(300)),
	)
	tests := []struct {
		name string
		msg  MsgRequestLoan
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgRequestLoan{
				Creator:    "invalid_address",
				Amount:     coins,
				Fee:        coins,
				Collateral: coins,
				Deadline:   0,
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "invalid amount message",
			msg: MsgRequestLoan{
				Creator:    sample.AccAddress(),
				Amount:     nil,
				Fee:        coins,
				Collateral: coins,
				Deadline:   0,
			},
			err: sdkerrors.ErrInvalidRequest,
		}, {
			name: "valid message",
			msg: MsgRequestLoan{
				Creator:    sample.AccAddress(),
				Amount:     coins,
				Fee:        nil,
				Collateral: coins,
				Deadline:   0,
			},
			err: sdkerrors.ErrInvalidRequest,
		}, {
			name: "valid message",
			msg: MsgRequestLoan{
				Creator:    sample.AccAddress(),
				Amount:     coins,
				Fee:        coins,
				Collateral: nil,
				Deadline:   0,
			},
			err: sdkerrors.ErrInvalidRequest,
		}, {
			name: "valid message",
			msg: MsgRequestLoan{
				Creator:    sample.AccAddress(),
				Amount:     coins,
				Fee:        coins,
				Collateral: coins,
				Deadline:   0,
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
