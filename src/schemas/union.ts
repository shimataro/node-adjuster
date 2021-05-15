import {BaseSchema} from "../schemaClasses/BaseSchema";
import {UnionSchema} from "../schemaClasses/UnionSchema";

type Union<T extends BaseSchema[]> = Tuple<T>[number];
type Tuple<T extends BaseSchema[]> = {[U in keyof T]: Inferred<T[U]>};
type Inferred<T> = T extends BaseSchema<infer U> ? U : never;

/**
 * create schema
 * @param schemas schemas to unify
 * @returns schema
 */
export function union<T extends BaseSchema[]>(...schemas: T): UnionSchema<Union<T>>
{
	return new UnionSchema({
		schemas: schemas as BaseSchema<Union<T>>[],
	});
}
