import * as type from "../appliers/union/type.ts";
import { BaseSchema } from "../schemaClasses/BaseSchema.ts";
export class UnionSchema<T> extends BaseSchema<T> {
    constructor(options: type.Options<T>) {
        super(options, [type.applyTo]);
    }
}
