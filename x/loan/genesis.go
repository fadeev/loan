package loan

import (
	"github.com/cosmonaut/loan/x/loan/keeper"
	"github.com/cosmonaut/loan/x/loan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the loan
	for _, elem := range genState.LoanList {
		k.SetLoan(ctx, elem)
	}

	// Set loan count
	k.SetLoanCount(ctx, genState.LoanCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.LoanList = k.GetAllLoan(ctx)
	genesis.LoanCount = k.GetLoanCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
