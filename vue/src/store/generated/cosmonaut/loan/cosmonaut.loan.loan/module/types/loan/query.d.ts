import { Reader, Writer } from "protobufjs/minimal";
import { Loan } from "../loan/loan";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmonaut.loan.loan";
export interface QueryGetLoanRequest {
    id: number;
}
export interface QueryGetLoanResponse {
    Loan: Loan | undefined;
}
export interface QueryAllLoanRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllLoanResponse {
    Loan: Loan[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetLoanRequest: {
    encode(message: QueryGetLoanRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLoanRequest;
    fromJSON(object: any): QueryGetLoanRequest;
    toJSON(message: QueryGetLoanRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetLoanRequest>): QueryGetLoanRequest;
};
export declare const QueryGetLoanResponse: {
    encode(message: QueryGetLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLoanResponse;
    fromJSON(object: any): QueryGetLoanResponse;
    toJSON(message: QueryGetLoanResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetLoanResponse>): QueryGetLoanResponse;
};
export declare const QueryAllLoanRequest: {
    encode(message: QueryAllLoanRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLoanRequest;
    fromJSON(object: any): QueryAllLoanRequest;
    toJSON(message: QueryAllLoanRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllLoanRequest>): QueryAllLoanRequest;
};
export declare const QueryAllLoanResponse: {
    encode(message: QueryAllLoanResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLoanResponse;
    fromJSON(object: any): QueryAllLoanResponse;
    toJSON(message: QueryAllLoanResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllLoanResponse>): QueryAllLoanResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a loan by id. */
    Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    /** Queries a list of loan items. */
    LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
