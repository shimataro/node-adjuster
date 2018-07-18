import {CAUSE} from "../../constants";
import AdjusterBase from "../../AdjusterBase";
import AdjusterError from "../../AdjusterError";

const REGEXP_NUMBER = /^\s*[+-]?(\d+(\.\d*)?|\.\d+)\s*$/;
const REGEXP_INTEGER = /^\s*[+-]?\d+\s*$/;

export default AdjusterBase.decoratorBuilder(_adjust)
	.init(_init)
	.features({
		acceptSpecialFormats: _acceptSpecialFormats,
		integer: _integer,
	})
	.build();

/**
 * init
 * @param {Object} params parameters
 * @return {void}
 */
function _init(params)
{
	params.flagAcceptSpecialFormats = false;
	params.flagInteger = false;
	params.flagIntegerAdjust = false;
}

/**
 * accept special formats; i.e., "1e+10", "0x100", "0b100"
 * @param {Object} params parameters
 * @return {void}
 */
function _acceptSpecialFormats(params)
{
	params.flagAcceptSpecialFormats = true;
}

/**
 * limit to integer
 * @param {Object} params parameters
 * @param {boolean} [adjust=false] adjust value or not
 * @return {void}
 */
function _integer(params, adjust = false)
{
	params.flagInteger = true;
	params.flagIntegerAdjust = adjust;
}

/**
 * adjust
 * @param {Object} params parameters
 * @param {AdjusterBase.VALUES} values original / adjusted values
 * @return {boolean} end adjustment
 * @throws {AdjusterError}
 */
function _adjust(params, values)
{
	if(typeof values.adjusted === "string")
	{
		if(!_checkNumberFormat(params, values.adjusted))
		{
			_throwError(values);
		}
	}

	const adjusted = _toNumber(params, values.adjusted);
	if(adjusted === false)
	{
		_throwError(values);
	}

	values.adjusted = adjusted;
	return false;
}

/**
 * throw TYPE error
 * @param {AdjusterBase.VALUES} values original / adjusted values
 * @return {void}
 * @throws {AdjusterError}
 */
function _throwError(values)
{
	const cause = CAUSE.TYPE;
	throw new AdjusterError(cause, values.original);
}

/**
 * check the format of value
 * @param {Object} params parameters
 * @param {string} value value to check
 * @return {boolean} OK/NG
 */
function _checkNumberFormat(params, value)
{
	const re = _getRegExpForNumber(params);
	if(re === null)
	{
		return true;
	}
	return re.test(value);
}

/**
 * get RegExp pattern for number
 * @param {Object} params parameters
 * @return {RegExp|null} regular expression pattern
 */
function _getRegExpForNumber(params)
{
	if(params.flagAcceptSpecialFormats)
	{
		return null;
	}
	if(params.flagInteger && !params.flagIntegerAdjust)
	{
		// integer
		return REGEXP_INTEGER;
	}

	// number
	return REGEXP_NUMBER;
}

/**
 * convert to number
 * @param {Object} params parameters
 * @param {*} value value to convert
 * @return {number|boolean} adjusted value or false(if failed)
 */
function _toNumber(params, value)
{
	const adjustedValue = Number(value);
	if(isNaN(adjustedValue))
	{
		// failed to cast
		return false;
	}

	if(!params.flagInteger)
	{
		return adjustedValue;
	}

	// already integer
	if(Number.isSafeInteger(adjustedValue))
	{
		return adjustedValue;
	}

	// parse as integer
	if(params.flagIntegerAdjust)
	{
		return parseInt(adjustedValue, 10);
	}

	// not an integer
	return false;
}
