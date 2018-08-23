import {PATTERN as PATTERN_IPV4} from "./ipv4";
import {PATTERN as PATTERN_IPV6} from "./ipv6";

// https://tools.ietf.org/html/rfc5321
// https://tools.ietf.org/html/rfc5322
const PATTERN_CHARSET_DOT = "[\\w!#$%&'*+\\-\\/=?^`{|}~]";
const PATTERN_CHARSET_QUOTED = "[\\w!#$%&'*+\\-\\/=?^`{|}~. ()<>\\[\\]:;@,]";
const PATTERN_CHARSET_TLD = "[a-zA-Z]";
const PATTERN_CHARSET_SLD = "[a-zA-Z\\d\\-]";

const PATTERN_COMPONENT_DOT = `${PATTERN_CHARSET_DOT}+`;
const PATTERN_COMPONENT_QUOTED = `(${PATTERN_CHARSET_QUOTED}|\\\\[\\\\"])+`;
const PATTERN_COMPONENT_TLD = `${PATTERN_CHARSET_TLD}+`;
const PATTERN_COMPONENT_SLD = `${PATTERN_CHARSET_SLD}+`;

const PATTERN_LOCAL_DOT = `${PATTERN_COMPONENT_DOT}(\\.${PATTERN_COMPONENT_DOT})*`;
const PATTERN_LOCAL_QUOTED = `"${PATTERN_COMPONENT_QUOTED}"`;
const PATTERN_LOCAL = `(${PATTERN_LOCAL_DOT}|${PATTERN_LOCAL_QUOTED})`;

const PATTERN_DOMAIN_GENERAL = `(${PATTERN_COMPONENT_SLD}\\.)+${PATTERN_COMPONENT_TLD}`;
const PATTERN_DOMAIN_IP = `\\[(${PATTERN_IPV4}|IPv6:${PATTERN_IPV6})\\]`;
const PATTERN_DOMAIN = `(${PATTERN_DOMAIN_GENERAL}|${PATTERN_DOMAIN_IP})`;

const PATTERN = `${PATTERN_LOCAL}@${PATTERN_DOMAIN}`;

const REGEXP = new RegExp(`^${PATTERN}$`);

export {PATTERN, REGEXP};