import {HEXDIG} from "./rfc";
import {PATTERN_IPV4} from "./ipv4";

const H16 = `${HEXDIG}{1,4}`; // 16 bits of address represented in hexadecimal
const LS32 = `(${H16}:${H16}|${PATTERN_IPV4})`; // least-significant 32 bits of address

// IPv6address =                            6( h16 ":" ) ls32
//             /                       "::" 5( h16 ":" ) ls32
//             / [               h16 ] "::" 4( h16 ":" ) ls32
//             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
//             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
//             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
//             / [ *4( h16 ":" ) h16 ] "::"              ls32
//             / [ *5( h16 ":" ) h16 ] "::"              h16
//             / [ *6( h16 ":" ) h16 ] "::"
const IPV6ADDRESS_1 = `(${H16}:){6}${LS32}`;
const IPV6ADDRESS_2 = `::(${H16}:){5}${LS32}`;
const IPV6ADDRESS_3 = `(${H16})?::(${H16}:){4}${LS32}`;
const IPV6ADDRESS_4 = `((${H16}:){0,1}${H16})?::(${H16}:){3}${LS32}`;
const IPV6ADDRESS_5 = `((${H16}:){0,2}${H16})?::(${H16}:){2}${LS32}`;
const IPV6ADDRESS_6 = `((${H16}:){0,3}${H16})?::${H16}:${LS32}`;
const IPV6ADDRESS_7 = `((${H16}:){0,4}${H16})?::${LS32}`;
const IPV6ADDRESS_8 = `((${H16}:){0,5}${H16})?::${H16}`;
const IPV6ADDRESS_9 = `((${H16}:){0,6}${H16})?::`;
const IPV6ADDRESS = `(${IPV6ADDRESS_1}|${IPV6ADDRESS_2}|${IPV6ADDRESS_3}|${IPV6ADDRESS_4}|${IPV6ADDRESS_5}|${IPV6ADDRESS_6}|${IPV6ADDRESS_7}|${IPV6ADDRESS_8}|${IPV6ADDRESS_9})`;

const PATTERN_IPV6 = IPV6ADDRESS;
const REGEXP_IPV6 = new RegExp(`^${PATTERN_IPV6}$`, "i");

export {PATTERN_IPV6, REGEXP_IPV6};
