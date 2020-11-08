import * as ifEmptyString from "../appliers/ifEmptyString.ts";
import * as ifNull from "../appliers/ifNull.ts";
import * as ifUndefined from "../appliers/ifUndefined.ts";
import * as type from "../appliers/boolean/type.ts";
import { BaseSchema } from "./BaseSchema.ts";
export type OptionsForBoolean = ifUndefined.Options<boolean> | ifEmptyString.Options<boolean> | ifNull.Options<boolean> | type.Options;
export class BooleanSchema<Tx = never> extends BaseSchema<boolean | Tx> {
    constructor(options: OptionsForBoolean) {
        super(options, [
            ifUndefined.applyTo,
            ifEmptyString.applyTo,
            ifNull.applyTo,
            type.applyTo,
        ]);
    }
}
