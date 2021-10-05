# loan
**loan** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

As a borrower you post a request for a loan and specify the loan amount, the fee you're going to pay to the lender, the collateral you're willing to post and the deadline (the date after which the lender can liquidate the loan and get the collateral). Requesting a loan transfers the collateral amount from the borrower to the module account.

As a lender you can approve the loan. Approving the loan transfers the loan amount from the lender to the borrower.

As a borrower you can repay the loan. Repaying the loan transfers amount and fee to the lender and collateral back to the borrower from the module account.

As a lender you can liquidate the loan if the height is past the height of the deadline. Liquidating the loan transfers the collateral from the module account to the lender.

All state transitions change the state property of the loan.

## Project scaffolding

Using Starport v0.18.

```
starport s chain github.com/cosmonaut/loan --no-module

cd loan

starport s module loan --dep bank

starport s list loan amount fee collateral deadline state borrower lender --no-message

starport s message request-loan amount fee collateral deadline

starport s message approve-loan id:uint

starport s message repay-loan id:uint

starport s message liquidate-loan id:uint

starport s message cancel-loan id:uint
```

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/cosmonaut/loan@latest! | sudo bash
```
`cosmonaut/loan` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)
