/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "cosmonaut.loan.loan";

export interface MsgRequestLoan {
  creator: string;
  amount: string;
  fee: string;
  collateral: string;
  deadline: string;
}

export interface MsgRequestLoanResponse {}

export interface MsgApproveLoan {
  creator: string;
  id: number;
}

export interface MsgApproveLoanResponse {}

export interface MsgRepayLoan {
  creator: string;
  id: number;
}

export interface MsgRepayLoanResponse {}

export interface MsgLiquidateLoan {
  creator: string;
  id: number;
}

export interface MsgLiquidateLoanResponse {}

export interface MsgCancelLoan {
  creator: string;
  id: number;
}

export interface MsgCancelLoanResponse {}

const baseMsgRequestLoan: object = {
  creator: "",
  amount: "",
  fee: "",
  collateral: "",
  deadline: "",
};

export const MsgRequestLoan = {
  encode(message: MsgRequestLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }
    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.collateral = reader.string();
          break;
        case 5:
          message.deadline = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestLoan {
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = String(object.collateral);
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = String(object.deadline);
    } else {
      message.deadline = "";
    }
    return message;
  },

  toJSON(message: MsgRequestLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestLoan>): MsgRequestLoan {
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = "";
    }
    return message;
  },
};

const baseMsgRequestLoanResponse: object = {};

export const MsgRequestLoanResponse = {
  encode(_: MsgRequestLoanResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestLoanResponse {
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    return message;
  },

  toJSON(_: MsgRequestLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRequestLoanResponse>): MsgRequestLoanResponse {
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    return message;
  },
};

const baseMsgApproveLoan: object = { creator: "", id: 0 };

export const MsgApproveLoan = {
  encode(message: MsgApproveLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveLoan } as MsgApproveLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveLoan {
    const message = { ...baseMsgApproveLoan } as MsgApproveLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgApproveLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApproveLoan>): MsgApproveLoan {
    const message = { ...baseMsgApproveLoan } as MsgApproveLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgApproveLoanResponse: object = {};

export const MsgApproveLoanResponse = {
  encode(_: MsgApproveLoanResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveLoanResponse } as MsgApproveLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgApproveLoanResponse {
    const message = { ...baseMsgApproveLoanResponse } as MsgApproveLoanResponse;
    return message;
  },

  toJSON(_: MsgApproveLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApproveLoanResponse>): MsgApproveLoanResponse {
    const message = { ...baseMsgApproveLoanResponse } as MsgApproveLoanResponse;
    return message;
  },
};

const baseMsgRepayLoan: object = { creator: "", id: 0 };

export const MsgRepayLoan = {
  encode(message: MsgRepayLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepayLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayLoan } as MsgRepayLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayLoan {
    const message = { ...baseMsgRepayLoan } as MsgRepayLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgRepayLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepayLoan>): MsgRepayLoan {
    const message = { ...baseMsgRepayLoan } as MsgRepayLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgRepayLoanResponse: object = {};

export const MsgRepayLoanResponse = {
  encode(_: MsgRepayLoanResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepayLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayLoanResponse } as MsgRepayLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayLoanResponse {
    const message = { ...baseMsgRepayLoanResponse } as MsgRepayLoanResponse;
    return message;
  },

  toJSON(_: MsgRepayLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRepayLoanResponse>): MsgRepayLoanResponse {
    const message = { ...baseMsgRepayLoanResponse } as MsgRepayLoanResponse;
    return message;
  },
};

const baseMsgLiquidateLoan: object = { creator: "", id: 0 };

export const MsgLiquidateLoan = {
  encode(message: MsgLiquidateLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidateLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateLoan } as MsgLiquidateLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateLoan {
    const message = { ...baseMsgLiquidateLoan } as MsgLiquidateLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgLiquidateLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidateLoan>): MsgLiquidateLoan {
    const message = { ...baseMsgLiquidateLoan } as MsgLiquidateLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgLiquidateLoanResponse: object = {};

export const MsgLiquidateLoanResponse = {
  encode(
    _: MsgLiquidateLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLiquidateLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateLoanResponse,
    } as MsgLiquidateLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateLoanResponse {
    const message = {
      ...baseMsgLiquidateLoanResponse,
    } as MsgLiquidateLoanResponse;
    return message;
  },

  toJSON(_: MsgLiquidateLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateLoanResponse>
  ): MsgLiquidateLoanResponse {
    const message = {
      ...baseMsgLiquidateLoanResponse,
    } as MsgLiquidateLoanResponse;
    return message;
  },
};

const baseMsgCancelLoan: object = { creator: "", id: 0 };

export const MsgCancelLoan = {
  encode(message: MsgCancelLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelLoan } as MsgCancelLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelLoan {
    const message = { ...baseMsgCancelLoan } as MsgCancelLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCancelLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelLoan>): MsgCancelLoan {
    const message = { ...baseMsgCancelLoan } as MsgCancelLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCancelLoanResponse: object = {};

export const MsgCancelLoanResponse = {
  encode(_: MsgCancelLoanResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelLoanResponse } as MsgCancelLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelLoanResponse {
    const message = { ...baseMsgCancelLoanResponse } as MsgCancelLoanResponse;
    return message;
  },

  toJSON(_: MsgCancelLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelLoanResponse>): MsgCancelLoanResponse {
    const message = { ...baseMsgCancelLoanResponse } as MsgCancelLoanResponse;
    return message;
  },
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

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse> {
    const data = MsgRequestLoan.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Msg",
      "RequestLoan",
      data
    );
    return promise.then((data) =>
      MsgRequestLoanResponse.decode(new Reader(data))
    );
  }

  ApproveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse> {
    const data = MsgApproveLoan.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Msg",
      "ApproveLoan",
      data
    );
    return promise.then((data) =>
      MsgApproveLoanResponse.decode(new Reader(data))
    );
  }

  RepayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse> {
    const data = MsgRepayLoan.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Msg",
      "RepayLoan",
      data
    );
    return promise.then((data) =>
      MsgRepayLoanResponse.decode(new Reader(data))
    );
  }

  LiquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse> {
    const data = MsgLiquidateLoan.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Msg",
      "LiquidateLoan",
      data
    );
    return promise.then((data) =>
      MsgLiquidateLoanResponse.decode(new Reader(data))
    );
  }

  CancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse> {
    const data = MsgCancelLoan.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Msg",
      "CancelLoan",
      data
    );
    return promise.then((data) =>
      MsgCancelLoanResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
