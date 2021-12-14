import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.loan.loan";
export interface MsgRequestLoan {
    creator: string;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
}
export interface MsgRequestLoanResponse {
}
export interface MsgApproveLoan {
    creator: string;
    id: number;
}
export interface MsgApproveLoanResponse {
}
export interface MsgRepayLoan {
    creator: string;
    id: number;
}
export interface MsgRepayLoanResponse {
}
export interface MsgLiquidateLoan {
    creator: string;
    id: number;
}
export interface MsgLiquidateLoanResponse {
}
export interface MsgCancelLoan {
    creator: string;
    id: number;
}
export interface MsgCancelLoanResponse {
}
export declare const MsgRequestLoan: {
    encode(message: MsgRequestLoan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestLoan;
    fromJSON(object: any): MsgRequestLoan;
    toJSON(message: MsgRequestLoan): unknown;
    fromPartial(object: DeepPartial<MsgRequestLoan>): MsgRequestLoan;
};
export declare const MsgRequestLoanResponse: {
    encode(_: MsgRequestLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestLoanResponse;
    fromJSON(_: any): MsgRequestLoanResponse;
    toJSON(_: MsgRequestLoanResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestLoanResponse>): MsgRequestLoanResponse;
};
export declare const MsgApproveLoan: {
    encode(message: MsgApproveLoan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveLoan;
    fromJSON(object: any): MsgApproveLoan;
    toJSON(message: MsgApproveLoan): unknown;
    fromPartial(object: DeepPartial<MsgApproveLoan>): MsgApproveLoan;
};
export declare const MsgApproveLoanResponse: {
    encode(_: MsgApproveLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveLoanResponse;
    fromJSON(_: any): MsgApproveLoanResponse;
    toJSON(_: MsgApproveLoanResponse): unknown;
    fromPartial(_: DeepPartial<MsgApproveLoanResponse>): MsgApproveLoanResponse;
};
export declare const MsgRepayLoan: {
    encode(message: MsgRepayLoan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRepayLoan;
    fromJSON(object: any): MsgRepayLoan;
    toJSON(message: MsgRepayLoan): unknown;
    fromPartial(object: DeepPartial<MsgRepayLoan>): MsgRepayLoan;
};
export declare const MsgRepayLoanResponse: {
    encode(_: MsgRepayLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRepayLoanResponse;
    fromJSON(_: any): MsgRepayLoanResponse;
    toJSON(_: MsgRepayLoanResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayLoanResponse>): MsgRepayLoanResponse;
};
export declare const MsgLiquidateLoan: {
    encode(message: MsgLiquidateLoan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLiquidateLoan;
    fromJSON(object: any): MsgLiquidateLoan;
    toJSON(message: MsgLiquidateLoan): unknown;
    fromPartial(object: DeepPartial<MsgLiquidateLoan>): MsgLiquidateLoan;
};
export declare const MsgLiquidateLoanResponse: {
    encode(_: MsgLiquidateLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLiquidateLoanResponse;
    fromJSON(_: any): MsgLiquidateLoanResponse;
    toJSON(_: MsgLiquidateLoanResponse): unknown;
    fromPartial(_: DeepPartial<MsgLiquidateLoanResponse>): MsgLiquidateLoanResponse;
};
export declare const MsgCancelLoan: {
    encode(message: MsgCancelLoan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelLoan;
    fromJSON(object: any): MsgCancelLoan;
    toJSON(message: MsgCancelLoan): unknown;
    fromPartial(object: DeepPartial<MsgCancelLoan>): MsgCancelLoan;
};
export declare const MsgCancelLoanResponse: {
    encode(_: MsgCancelLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelLoanResponse;
    fromJSON(_: any): MsgCancelLoanResponse;
    toJSON(_: MsgCancelLoanResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelLoanResponse>): MsgCancelLoanResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    ApproveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    RepayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    LiquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    ApproveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    RepayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    LiquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    CancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
