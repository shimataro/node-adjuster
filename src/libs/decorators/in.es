import {CAUSE} from "../constants";
import AdjusterBase from "../AdjusterBase";
import AdjusterError from "../AdjusterError";

const NAME = "in";

export default AdjusterBase.decoratorBuilder(NAME, _adjust)
	.init(_init)
	.chain(_chain)
	.build();

/**
 * init
 * @param {AdjusterBase.PARAMS} params parameters
 */
function _init(params)
{
	params.flag = false;
}

/**
 * accept only specified values
 * @param {AdjusterBase.PARAMS} params parameters
 * @param {...*} values values to be accepted
 */
function _chain(params, ...values)
{
	params.flag = true;
	params.values = values;
}

/**
 * adjust
 * @param {AdjusterBase.PARAMS} params parameters
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
	if(params.values.includes(values.adjusted))
	{
		return true;
	}

	const cause = CAUSE.IN;
	throw new AdjusterError(cause, values.original);
}
