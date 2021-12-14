import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.loan.loan";
export interface Loan {
    id: number;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
    state: string;
    borrower: string;
    lender: string;
}
export declare const Loan: {
    encode(message: Loan, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Loan;
    fromJSON(object: any): Loan;
    toJSON(message: Loan): unknown;
    fromPartial(object: DeepPartial<Loan>): Loan;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
