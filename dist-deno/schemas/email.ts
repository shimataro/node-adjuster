import { EmailSchema, NullableOptions, OptionsForEmail } from "../schemaClasses/EmailSchema.ts";
export function email(options: OptionsForEmail & NullableOptions): EmailSchema<null>;
export function email(options: OptionsForEmail): EmailSchema;
export function email(): EmailSchema;
/**
 * create schema
 * @param options Options
 * @returns schema
 */
export function email(options: OptionsForEmail = {}): EmailSchema {
    return new EmailSchema(options);
}