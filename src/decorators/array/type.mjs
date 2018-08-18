import {CAUSE} from "../../libs/constants";
import {isString, isArray} from "../../libs/types";
import AdjusterBase from "../../libs/AdjusterBase";
import AdjusterError from "../../libs/AdjusterError";

export default AdjusterBase.decoratorBuilder(_adjust)
	.init(_init)
	.features({
		separatedBy: _featureSeparatedBy,
		toArray: _featureToArray,
	})
	.build();

/**
 * init
 * @param {Object} params parameters
 * @returns {void}
 */
function _init(params)
{
	params.separatedBy = false;
	params.toArray = false;
}

/**
 * accept string and set separator
 * @param {Object} params parameters
 * @param {string|RegExp} separator separator
 * @returns {void}
 */
function _featureSeparatedBy(params, separator)
{
	params.separatedBy = true;
	params.separator = separator;
}

/**
 * convert to array, if not
 * @param {Object} params parameters
 * @returns {void}
 */
function _featureToArray(params)
{
	params.toArray = true;
}

/**
 * adjuster
 * @param {Object} params parameters
 * @param {AdjusterBase.VALUES} values original / adjusted values
 * @param {(string|number)[]} keyStack path to key that caused error
 * @returns {boolean} end adjustment
 * @throws {AdjusterError}
 */
function _adjust(params, values, keyStack)
{
	if(isArray(values.adjusted))
	{
		return false;
	}

	if(isString(values.adjusted) && params.separatedBy)
	{
		values.adjusted = values.adjusted.split(params.separator);
		return false;
	}

	if(params.toArray)
	{
		values.adjusted = [values.adjusted];
		return false;
	}

	AdjusterError.raise(CAUSE.TYPE, values, keyStack);
}