import {Key, Values} from "../../libs/types";
import {CAUSE, ValueSchemaError} from "../../libs/ValueSchemaError";
import {BaseSchema} from "../../schemaClasses/BaseSchema";

export interface Options<T>
{
	schemas?: BaseSchema<T>[];
}

/**
 * apply schema
 * @param values input/output values
 * @param options options
 * @param keyStack key stack for error handling
 * @returns applied value
 */
export function applyTo<T>(values: Values, options: Options<T>, keyStack: Key[]): values is Values<T>
{
	const normalizedOptions: Required<Options<T>> = {
		schemas: [],
		...options,
	};

	const err = new ValueSchemaError(CAUSE.UNION, values.input, keyStack);
	for(const schema of normalizedOptions.schemas)
	{
		try
		{
			values.output = schema.applyTo(values.output);
			return true;
		}
		catch(thrownError)
		{
			// istanbul ignore next
			if(!ValueSchemaError.is(thrownError))
			{
				throw thrownError;
			}

			err.unionErrors.push(thrownError);
		}
	}

	throw err;
}
