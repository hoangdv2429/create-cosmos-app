import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: bigint;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
  channel: string;
  timeout_height: bigint;
  timeout_timestamp: bigint;
  data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
  channel: string;
}
function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeoutHeight: BigInt("0"),
    timeoutTimestamp: BigInt("0"),
    data: new Uint8Array()
  };
}
export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeoutHeight = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.timeoutTimestamp = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIBCSend>): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt("0");
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0");
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: ""
  };
}
export const MsgIBCCloseChannel = {
  encode(message: MsgIBCCloseChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  }
};