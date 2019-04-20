import {CAUSE} from "../libs/constants";
import BaseSchema from "../libs/BaseSchema";
import ValueSchemaError from "../libs/ValueSchemaError";

export default BaseSchema.decoratorBuilder(_fit)
	.init(_init)
	.features({
		convert: _featureConvert,
		map: _featureConvert, // deprecated
	})
	.build();

/**
 * @package
 * @callback Fail
 */

/**
 * @package
 * @callback Converter
 * @param {*} value value to convert
 * @param {Fail} fail callback on fail
 * @returns {*} converted value
 */

/**
 * @package
 * @typedef {Params} Params-Convert
 * @property {boolean} flag
 * @property {Converter | null} converter
 */

/**
 * init
 * @param {Params-Convert} params parameters
 * @returns {void}
 */
function _init(params)
{
	params.flag = false;
	params.converter = null;
}

/**
 * conversion values
 * @param {Params-Convert} params parameters
 * @param {Converter} converter conversion function
 * @returns {void}
 */
function _featureConvert(params, converter)
{
	params.flag = true;
	params.converter = converter;
}

/**
 * fit
 * @param {Params-Convert} params parameters
 * @param {Decorator-Values} values original / adjusted values
 * @param {Key[]} keyStack path to key that caused error
 * @returns {boolean} end adjustment
 * @throws {ValueSchemaError}
 */
function _fit(params, values, keyStack)
{
	if(!params.flag)
	{
		return false;
	}

	values.adjusted = params.converter(values.adjusted, () =>
	{
		ValueSchemaError.raise(CAUSE.CONVERT, values, keyStack);
	});
	return false;
}
