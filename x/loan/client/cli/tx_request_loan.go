package cli

import (
	"strconv"

	"github.com/cosmonaut/loan/x/loan/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdRequestLoan() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "request-loan [amount] [fee] [collateral] [deadline]",
		Short: "Broadcast message request-loan",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount, err := sdk.ParseCoinsNormalized(args[0])
			if err != nil {
				return err
			}
			argFee, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argCollateral, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}
			argDeadline, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRequestLoan(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argFee,
				argCollateral,
				argDeadline,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
