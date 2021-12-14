/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Loan } from "../loan/loan";
export const protobufPackage = "cosmonaut.loan.loan";
const baseGenesisState = { loanCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.loanList) {
            Loan.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.loanCount !== 0) {
            writer.uint32(16).uint64(message.loanCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.loanList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loanList.push(Loan.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.loanCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.loanList = [];
        if (object.loanList !== undefined && object.loanList !== null) {
            for (const e of object.loanList) {
                message.loanList.push(Loan.fromJSON(e));
            }
        }
        if (object.loanCount !== undefined && object.loanCount !== null) {
            message.loanCount = Number(object.loanCount);
        }
        else {
            message.loanCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.loanList) {
            obj.loanList = message.loanList.map((e) => e ? Loan.toJSON(e) : undefined);
        }
        else {
            obj.loanList = [];
        }
        message.loanCount !== undefined && (obj.loanCount = message.loanCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.loanList = [];
        if (object.loanList !== undefined && object.loanList !== null) {
            for (const e of object.loanList) {
                message.loanList.push(Loan.fromPartial(e));
            }
        }
        if (object.loanCount !== undefined && object.loanCount !== null) {
            message.loanCount = object.loanCount;
        }
        else {
            message.loanCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
