import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgApproveLoan } from "./types/loan/tx";
import { MsgRepayLoan } from "./types/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/tx";
import { MsgRequestLoan } from "./types/loan/tx";
import { MsgCancelLoan } from "./types/loan/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgApproveLoan: (data: MsgApproveLoan) => EncodeObject;
    msgRepayLoan: (data: MsgRepayLoan) => EncodeObject;
    msgLiquidateLoan: (data: MsgLiquidateLoan) => EncodeObject;
    msgRequestLoan: (data: MsgRequestLoan) => EncodeObject;
    msgCancelLoan: (data: MsgCancelLoan) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
