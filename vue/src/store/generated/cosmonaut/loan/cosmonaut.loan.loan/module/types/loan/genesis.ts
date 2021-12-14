/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Loan } from "../loan/loan";

export const protobufPackage = "cosmonaut.loan.loan";

/** GenesisState defines the loan module's genesis state. */
export interface GenesisState {
  loanList: Loan[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  loanCount: number;
}

const baseGenesisState: object = { loanCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.loanList) {
      Loan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.loanCount !== 0) {
      writer.uint32(16).uint64(message.loanCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.loanList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loanList.push(Loan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.loanCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.loanList = [];
    if (object.loanList !== undefined && object.loanList !== null) {
      for (const e of object.loanList) {
        message.loanList.push(Loan.fromJSON(e));
      }
    }
    if (object.loanCount !== undefined && object.loanCount !== null) {
      message.loanCount = Number(object.loanCount);
    } else {
      message.loanCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.loanList) {
      obj.loanList = message.loanList.map((e) =>
        e ? Loan.toJSON(e) : undefined
      );
    } else {
      obj.loanList = [];
    }
    message.loanCount !== undefined && (obj.loanCount = message.loanCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.loanList = [];
    if (object.loanList !== undefined && object.loanList !== null) {
      for (const e of object.loanList) {
        message.loanList.push(Loan.fromPartial(e));
      }
    }
    if (object.loanCount !== undefined && object.loanCount !== null) {
      message.loanCount = object.loanCount;
    } else {
      message.loanCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
