import { Key, Values } from "./types.ts";
export enum CAUSE {
    TYPE = "type",
    UNDEFINED = "undefined",
    NULL = "null",
    EMPTY_STRING = "empty-string",
    ONLY = "only",
    CONVERTER = "converter",
    MIN_VALUE = "min-value",
    MAX_VALUE = "max-value",
    MIN_LENGTH = "min-length",
    MAX_LENGTH = "max-length",
    PATTERN = "pattern",
    CHECKSUM = "checksum",
    UNION = "union"
}
/**
 * Value-Schema Error
 */
export class ValueSchemaError extends Error {
    public readonly cause: CAUSE;
    public readonly value: unknown;
    public readonly keyStack: Key[];
    public readonly unionErrors: ValueSchemaError[];
    /**
     * throw an error
     * @param cause cause of error
     * @param values input/output values
     * @param keyStack path to key that caused error
     * @throws {ValueSchemaError}
     */
    static raise(cause: CAUSE, values: Values, keyStack: Key[]): never {
        throw new ValueSchemaError(cause, values.input, keyStack);
    }
    /**
     * check whether error is instance of ValueSchemaError or not
     * @param err error to check
     * @returns Yes/No
     */
    static is(err: unknown): err is ValueSchemaError {
        return err instanceof ValueSchemaError;
    }
    /**
     * constructor
     * @param cause cause of error
     * @param value input value
     * @param keyStack path to key that caused error
     */
    constructor(cause: CAUSE, value: unknown, keyStack: Key[]) {
        super(`${cause}; ${value}; ${keyStack}`);
        this.name = "ValueSchemaError";
        this.cause = cause;
        this.value = value;
        this.keyStack = [...keyStack];
        this.unionErrors = [];
    }
}
