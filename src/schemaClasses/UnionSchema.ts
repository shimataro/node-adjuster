import * as type from "../appliers/union/type";
import {BaseSchema} from "../schemaClasses/BaseSchema";

export class UnionSchema<T> extends BaseSchema<T>
{
	constructor(options: type.Options<T>)
	{
		super(options, [type.applyTo]);
	}
}
