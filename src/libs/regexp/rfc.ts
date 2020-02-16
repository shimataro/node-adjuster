export const ALPHA = `[a-z]`;
export const DIGIT = `[0-9]`;
export const HEXDIG = `[0-9a-f]`;

const DEC_OCTET_1 = DIGIT; // 0-9
const DEC_OCTET_2 = `[1-9]${DIGIT}`; // 10-99
const DEC_OCTET_3 = `1${DIGIT}{2}`; // 100-199
const DEC_OCTET_4 = `2[0-4]${DIGIT}`; // 200-249
const DEC_OCTET_5 = `25[0-5]`; // 250-255
export const DEC_OCTET = `(${DEC_OCTET_1}|${DEC_OCTET_2}|${DEC_OCTET_3}|${DEC_OCTET_4}|${DEC_OCTET_5})`;
