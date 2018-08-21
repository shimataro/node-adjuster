import {REGEXP as REGEXP_EMAIL} from "./regexp/email";
import {REGEXP as REGEXP_IPV4} from "./regexp/ipv4";
import {REGEXP as REGEXP_IPV6} from "./regexp/ipv6";
import {REGEXP as REGEXP_URI} from "./regexp/uri";

export const CAUSE = {
	TYPE: "type",
	REQUIRED: "required",
	NULL: "null",
	EMPTY: "empty",
	ONLY: "only",

	MIN_VALUE: "min-value",
	MAX_VALUE: "max-value",

	MIN_LENGTH: "min-length",
	MAX_LENGTH: "max-length",
	PATTERN: "pattern",

	CHECKSUM: "checksum",

	ARRAY: "array",
};

export const STRING = {
	PATTERN: {
		EMAIL: REGEXP_EMAIL,
		IPV4: REGEXP_IPV4,
		IPV6: REGEXP_IPV6,
		URI: REGEXP_URI,
	},
};

export const NUMERIC_STRING = {
	CHECKSUM_ALGORITHM: {
		LUHN: "luhn",
		CREDIT_CARD: "luhn",

		MODULUS10_WEIGHT3_1: "modulus10/weight3:1",
		ISBN13: "modulus10/weight3:1",
		EAN: "modulus10/weight3:1",
		JAN: "modulus10/weight3:1",
	},
};
