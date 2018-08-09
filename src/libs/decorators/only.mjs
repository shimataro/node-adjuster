import {CAUSE} from "../constants";
import AdjusterBase from "../AdjusterBase";
import AdjusterError from "../AdjusterError";

export default AdjusterBase.decoratorBuilder(_adjust)
	.init(_init)
	.features({
		only: _featureOnly,
	})
	.build();

/**
 * init
 * @param {Object} params parameters
 * @return {void}
 */
function _init(params)
{
	params.flag = false;
}

/**
 * accept only specified values
 * @param {Object} params parameters
 * @param {...*} values values to be accepted
 * @return {void}
 */
function _featureOnly(params, ...values)
{
	params.flag = true;
	params.values = new Set(values);
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
	if(!params.flag)
	{
		return false;
	}
	if(params.values.has(values.adjusted))
	{
		return true;
	}

	const cause = CAUSE.ONLY;
	throw new AdjusterError(cause, values.original);
}