import AdjusterBase from "./AdjusterBase";

import Default from "./decorators/default";
import AllowEmpty from "./decorators/allowEmpty";
import Type from "./decorators/array/type";
import MinLength from "./decorators/array/minLength";
import MaxLength from "./decorators/array/maxLength";
import Each from "./decorators/stringArray/each";

/**
 * adjuster for array of string
 */
@MaxLength
@MinLength
@Each
@Type
@AllowEmpty
@Default
export default class StringArrayAdjuster extends AdjusterBase
{
	/**
	 * set default value; enable to omit
	 * @method
	 * @name StringArrayAdjuster#default
	 * @param {string[]} value default value
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * allow empty string
	 * @method
	 * @name StringArrayAdjuster#allowEmpty
	 * @param {?string[]} [value=null] value on empty
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * allow string and set separator
	 * @method
	 * @name StringArrayAdjuster#separatedBy
	 * @param {string|String|RegExp} separator separator
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * convert to array, if not
	 * @method
	 * @name StringArrayAdjuster#toArray
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * set min-length of array elements
	 * @method
	 * @name StringArrayAdjuster#minLength
	 * @param {int} length min-length; error if shorter
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * set max-length of array elements
	 * @method
	 * @name StringArrayAdjuster#maxLength
	 * @param {int} length max-length
	 * @param {boolean} [adjust=false] truncate if longer; default is ERROR
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * ignore each elements error
	 * @method
	 * @name StringArrayAdjuster#ignoreEachErrors
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * set a default value for each elements
	 * @method
	 * @name StringArrayAdjuster#eachDefault
	 * @param {?string} value default value
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * allow empty string for each elements
	 * @method
	 * @name StringArrayAdjuster#eachAllowEmpty
	 * @param {?string} [value=null] value on empty
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * accept only specified values for each elements
	 * @method
	 * @name StringArrayAdjuster#eachIn
	 * @param {...string} values values to be accepted
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * set min-length for each elements
	 * @method
	 * @name StringArrayAdjuster#eachMinLength
	 * @param {int} length min-length; error if shorter
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * set max-length for each elements
	 * @method
	 * @name StringArrayAdjuster#eachMaxLength
	 * @param {int} length max-length
	 * @param {boolean} [adjust=false] truncate if longer; default is ERROR
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * specify acceptable pattern by regular expression for each elements
	 * @method
	 * @name StringArrayAdjuster#eachPattern
	 * @param {string|String|RegExp} pattern acceptable pattern(regular expression); string or RegExp
	 * @return {StringArrayAdjuster}
	 */

	/**
	 * do adjust
	 * @method
	 * @name StringArrayAdjuster#adjust
	 * @param {*} value value to be checked
	 * @param {?AdjusterBase.OnError} [onError=null] callback function on error
	 * @return {string[]} adjusted value
	 */
}
