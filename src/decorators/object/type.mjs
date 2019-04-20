import {CAUSE} from "../../libs/constants";
import {isObject} from "../../libs/types";
import BaseSchema from "../../libs/BaseSchema";
import ValueSchemaError from "../../libs/ValueSchemaError";

export default BaseSchema.decoratorBuilder(_fit)
	.build();

/**
 * valueSchema
 * @param {{}} params parameters
 * @param {Decorator-Values} values original / adjusted values
 * @param {Key[]} keyStack path to key that caused error
 * @returns {boolean} end adjustment
 * @throws {ValueSchemaError}
 */
function _fit(params, values, keyStack)
{
	if(isObject(values.adjusted))
	{
		return false;
	}

	ValueSchemaError.raise(CAUSE.TYPE, values.original, keyStack);
}
