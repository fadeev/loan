/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Loan } from "../loan/loan";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cosmonaut.loan.loan";

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

const baseQueryGetLoanRequest: object = { id: 0 };

export const QueryGetLoanRequest = {
  encode(
    message: QueryGetLoanRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLoanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLoanRequest } as QueryGetLoanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLoanRequest {
    const message = { ...baseQueryGetLoanRequest } as QueryGetLoanRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetLoanRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLoanRequest>): QueryGetLoanRequest {
    const message = { ...baseQueryGetLoanRequest } as QueryGetLoanRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetLoanResponse: object = {};

export const QueryGetLoanResponse = {
  encode(
    message: QueryGetLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Loan !== undefined) {
      Loan.encode(message.Loan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLoanResponse } as QueryGetLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Loan = Loan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLoanResponse {
    const message = { ...baseQueryGetLoanResponse } as QueryGetLoanResponse;
    if (object.Loan !== undefined && object.Loan !== null) {
      message.Loan = Loan.fromJSON(object.Loan);
    } else {
      message.Loan = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLoanResponse): unknown {
    const obj: any = {};
    message.Loan !== undefined &&
      (obj.Loan = message.Loan ? Loan.toJSON(message.Loan) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLoanResponse>): QueryGetLoanResponse {
    const message = { ...baseQueryGetLoanResponse } as QueryGetLoanResponse;
    if (object.Loan !== undefined && object.Loan !== null) {
      message.Loan = Loan.fromPartial(object.Loan);
    } else {
      message.Loan = undefined;
    }
    return message;
  },
};

const baseQueryAllLoanRequest: object = {};

export const QueryAllLoanRequest = {
  encode(
    message: QueryAllLoanRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLoanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLoanRequest } as QueryAllLoanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLoanRequest {
    const message = { ...baseQueryAllLoanRequest } as QueryAllLoanRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLoanRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLoanRequest>): QueryAllLoanRequest {
    const message = { ...baseQueryAllLoanRequest } as QueryAllLoanRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLoanResponse: object = {};

export const QueryAllLoanResponse = {
  encode(
    message: QueryAllLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Loan) {
      Loan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLoanResponse } as QueryAllLoanResponse;
    message.Loan = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Loan.push(Loan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLoanResponse {
    const message = { ...baseQueryAllLoanResponse } as QueryAllLoanResponse;
    message.Loan = [];
    if (object.Loan !== undefined && object.Loan !== null) {
      for (const e of object.Loan) {
        message.Loan.push(Loan.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLoanResponse): unknown {
    const obj: any = {};
    if (message.Loan) {
      obj.Loan = message.Loan.map((e) => (e ? Loan.toJSON(e) : undefined));
    } else {
      obj.Loan = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLoanResponse>): QueryAllLoanResponse {
    const message = { ...baseQueryAllLoanResponse } as QueryAllLoanResponse;
    message.Loan = [];
    if (object.Loan !== undefined && object.Loan !== null) {
      for (const e of object.Loan) {
        message.Loan.push(Loan.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a loan by id. */
  Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
  /** Queries a list of loan items. */
  LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse> {
    const data = QueryGetLoanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmonaut.loan.loan.Query", "Loan", data);
    return promise.then((data) =>
      QueryGetLoanResponse.decode(new Reader(data))
    );
  }

  LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse> {
    const data = QueryAllLoanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.loan.loan.Query",
      "LoanAll",
      data
    );
    return promise.then((data) =>
      QueryAllLoanResponse.decode(new Reader(data))
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
