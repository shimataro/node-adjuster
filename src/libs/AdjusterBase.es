import AdjusterError from "./AdjusterError";

 /**
  * Decorator Builder
  */
class DecoratorBuilder
{
	/**
	 * constructor
	 * @param {string} name
	 * @param {AdjusterBase.Adjust} adjust
	 */
	constructor(name, adjust)
	{
		this._name = name;
		this._adjust = adjust;
		this._init = null;
		this._chain = null;
	}

	/**
	 * add init function
	 * @param {AdjusterBase.Init} init
	 * @return {DecoratorBuilder}
	 */
	init(init)
	{
		this._init = init;
		return this;
	}

	/**
	 * add chain function
	 * @param {AdjusterBase.Chain} chain
	 * @return {DecoratorBuilder}
	 */
	chain(chain)
	{
		this._chain = chain;
		return this;
	}

	/**
	 * build decorator
	 * @return {AdjusterBase.ClassDecorator}
	 */
	build()
	{
		return (TargetClass) =>
		{
			const name = this._name;
			const init = this._init;
			const chain = this._chain;
			const adjust = this._adjust;

			// register init function
			if(init !== null)
			{
				if(TargetClass.prototype._initList === undefined)
				{
					TargetClass.prototype._initList = [];
				}
				TargetClass.prototype._initList.push(init);
			}

			// register chain function
			if(chain !== null)
			{
				TargetClass.prototype[name] = function(...args)
				{
					chain(this._params, ...args);
					return this;
				};
			}

			// register adjust function
			if(TargetClass.prototype._adjustList === undefined)
			{
				TargetClass.prototype._adjustList = [];
			}
			TargetClass.prototype._adjustList.push(adjust);
			return TargetClass;
		};
	}
}

/**
 * Adjuster Base Class
 */
export default class AdjusterBase
{
	/**
	 * returns DecoratorBuilder
	 * @param {string} name
	 * @param {function} adjust
	 * @return {DecoratorBuilder}
	 */
	static decoratorBuilder(name, adjust)
	{
		return new DecoratorBuilder(name, adjust);
	}

	/**
	 * constructor
	 */
	constructor()
	{
		this._params = {};
        for(const init of this._initList)
        {
            init(this._params);
        }
	}

	/**
	 * do adjust
	 * @param {*} value value to be checked
	 * @param {?AdjusterBase.OnError} [onError=null] callback function on error
	 * @return {*}
	 */
	adjust(value, onError = null)
	{
		const values = {
			original: value,
			adjusted: value,
		};

		try
		{
			for(const adjust of this._adjustList)
			{
				if(adjust(this._params, values))
				{
					return values.adjusted;
				}
			}
			return values.adjusted;
		}
		catch(err)
		{
			return AdjusterBase._handleError(onError, err.cause, err.value);
		}
	}

	/**
	 * error handler
	 * @param {?AdjusterBase.OnError} onError callback function on error
	 * @param {string} cause
	 * @param {*} value
	 * @return {*}
	 * @protected
	 */
	static _handleError(onError, cause, value)
	{
		const err = new AdjusterError(cause, value);
		if(onError === null)
		{
			throw err;
		}

		return onError(err);
	}
}

/**
 * @typedef {Object} AdjusterBase.PARAMS
 */
/**
 * @typedef {Object} AdjusterBase.VALUES
 * @property {*} original
 * @property {*} adjusted
 */
/**
 * type of callback function on error
 * @callback AdjusterBase.OnError
 * @param {AdjusterError} err
 * @return {*}
 */

/**
 * init function
 * @callback AdjusterBase.Init
 * @param {AdjusterBase.PARAMS} params parameters
 */
/**
 * chain function
 * @callback AdjusterBase.Chain
 * @param {AdjusterBase.PARAMS} params parameters
 */
/**
 * adjuster
 * @callback AdjusterBase.Adjust
 * @param {AdjusterBase.PARAMS} params parameters
 * @param {AdjusterBase.VALUES} values original / adjusted values
 * @return {boolean} end adjustment
 * @throws {AdjusterError}
 */
/**
 * class decorator
 * @callback AdjusterBase.ClassDecorator
 * @param {class} TargetClass
 * @return {class}
 */
