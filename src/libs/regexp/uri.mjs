import {PATTERN as PATTERN_IPV4} from "./ipv4";
import {PATTERN as PATTERN_IPV6} from "./ipv6";

// follows RFC3986 http://sinya8282.sakura.ne.jp/?p=1064
const PATTERN_CHARSET1 = `-.0-9_a-z~!$&-,=;`;
const PATTERN_CHARSET2 = `${PATTERN_CHARSET1}:`;
const PATTERN_CHARSET3 = `${PATTERN_CHARSET2}@`;
const PATTERN_CHARSET4 = `${PATTERN_CHARSET3}?\\/`;
const PATTERN_CLASS_SYMBOL = `[!$&-.0-;=_a-z~]`;
const PATTERN_CLASS_HEX = `[0-9a-f]`;
const PATTERN_COMPONENT_PERCENT = `%${PATTERN_CLASS_HEX}${PATTERN_CLASS_HEX}`;
const PATTERN_COMPONENT1 = `${PATTERN_COMPONENT_PERCENT}|[${PATTERN_CHARSET1}]`;
const PATTERN_COMPONENT2 = `${PATTERN_COMPONENT_PERCENT}|[${PATTERN_CHARSET2}]`;
const PATTERN_COMPONENT3 = `${PATTERN_COMPONENT_PERCENT}|[${PATTERN_CHARSET3}]`;
const PATTERN_COMPONENT4 = `${PATTERN_COMPONENT_PERCENT}|[${PATTERN_CHARSET4}]`;
const PATTERN = `[a-z][-+.0-9a-z]*:(\\/\\/((${PATTERN_COMPONENT2})*@)?(\\[(${PATTERN_IPV6}|v${PATTERN_CLASS_HEX}+\\.[${PATTERN_CLASS_SYMBOL}]+)]|${PATTERN_IPV4}|(${PATTERN_COMPONENT1})*)(:\\d*)?(\\/(${PATTERN_COMPONENT3})*)*|\\/((${PATTERN_COMPONENT3})+(\\/(${PATTERN_COMPONENT3})*)*)?|(${PATTERN_COMPONENT3})+(\\/(${PATTERN_COMPONENT3})*)*)?(\\?(${PATTERN_COMPONENT4})*)?(#(${PATTERN_COMPONENT4})*)?`;

const REGEXP = new RegExp(`^${PATTERN}$`, "i");

export {PATTERN, REGEXP};
