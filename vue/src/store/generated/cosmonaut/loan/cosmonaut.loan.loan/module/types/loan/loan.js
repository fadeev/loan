/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cosmonaut.loan.loan";
const baseLoan = {
    id: 0,
    amount: "",
    fee: "",
    collateral: "",
    deadline: "",
    state: "",
    borrower: "",
    lender: "",
};
export const Loan = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
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
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        if (message.borrower !== "") {
            writer.uint32(58).string(message.borrower);
        }
        if (message.lender !== "") {
            writer.uint32(66).string(message.lender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoan };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
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
                case 6:
                    message.state = reader.string();
                    break;
                case 7:
                    message.borrower = reader.string();
                    break;
                case 8:
                    message.lender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoan };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = String(object.collateral);
        }
        else {
            message.collateral = "";
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = String(object.deadline);
        }
        else {
            message.deadline = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = "";
        }
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = String(object.borrower);
        }
        else {
            message.borrower = "";
        }
        if (object.lender !== undefined && object.lender !== null) {
            message.lender = String(object.lender);
        }
        else {
            message.lender = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.fee !== undefined && (obj.fee = message.fee);
        message.collateral !== undefined && (obj.collateral = message.collateral);
        message.deadline !== undefined && (obj.deadline = message.deadline);
        message.state !== undefined && (obj.state = message.state);
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.lender !== undefined && (obj.lender = message.lender);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoan };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = object.collateral;
        }
        else {
            message.collateral = "";
        }
        if (object.deadline !== undefined && object.deadline !== null) {
            message.deadline = object.deadline;
        }
        else {
            message.deadline = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = "";
        }
        if (object.borrower !== undefined && object.borrower !== null) {
            message.borrower = object.borrower;
        }
        else {
            message.borrower = "";
        }
        if (object.lender !== undefined && object.lender !== null) {
            message.lender = object.lender;
        }
        else {
            message.lender = "";
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
