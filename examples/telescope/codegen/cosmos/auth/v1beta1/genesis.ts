import { Params, ParamsSDKType } from "./auth";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params | undefined;
  /** accounts are the accounts present at genesis. */
  accounts: Any[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType | undefined;
  accounts: AnySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    accounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};