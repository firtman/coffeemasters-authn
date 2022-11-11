import { AB2hex, cleanZeros, hex2AB, num2hex } from "./util";
export declare const webCrypto: false | Crypto;
export declare const webCryptoSubtle: false | SubtleCrypto;
/**
 * Class for creating a JwtSplit object with three parts of JWT Token as strings
 *
 * @class  JwtSplit
 */
export declare class JwtSplit {
    /**
     * Header (first) part of JWT Token
     *
     * @name  header
     * @type {string}
     */
    header: string;
    /**
     * Payload (second) part of JWT Token
     *
     * @name  payload
     * @type {string}
     */
    payload: string;
    /**
     * Signature (third) part of JWT Token
     *
     * @name  signature
     * @type {string}
     */
    signature: string;
    constructor(str: string, callee?: string);
    toString(): string;
}
/** JwtPart interface basically object type definition used as a placeholder */
interface JwtPart {
    [key: string]: any;
}
/**
 * Class for creating a JwtDecode object with three parts of JWT Token, header and payload decoded and parsed, signature in initial form
 *
 * @class  JwtDecode
 */
export declare class JwtDecode {
    /**
     * Header (first) part of JWT Token
     *
     * @name  header
     * @type {JwtPart}
     */
    header: JwtPart;
    /**
     * Payload (second) part of JWT Token
     *
     * @name  payload
     * @type {JwtPart}
     */
    payload: JwtPart;
    /**
     * Signature (third) part of JWT Token
     *
     * @name  signature
     * @type {string}
     */
    signature: string;
    constructor(str: string, callee?: string);
    toString(): string;
}
/**
 * Try running function and replace it's response as Promise.resolve/reject
 *
 * @param {function} fn - fn to call in for response
 *
 * @returns {Promise<any>} resulting Promise
 */
export declare function tryPromise(fn: any): Promise<any>;
/**
 * Converts string to JSON object
 *
 * @param {string} str - data string to convert
 *
 * @returns {object} resulting object
 */
export declare function s2J(str: string): any;
/**
 * Converts JSON object to string
 *
 * @param {object} obj - JSON object to convert
 *
 * @returns {string} resulting string
 */
export declare function J2s(obj: any): string;
/**
 * Converts string to base64 string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} decoded data string
 */
export declare function b2s(str: string): string;
/**
 * Converts base64 string to base64url string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} base64url string
 */
export declare function b2bu(str: string): string;
/**
 *
 * Converts base64url string to base64 string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} base64 string
 */
export declare function bu2b(str: string): string;
/**
 * Converts base64url string to string
 *
 * @param {string} str - base64url string to convert
 *
 * @returns {string} decoded data string
 */
export declare function bu2s(str: string): string;
/**
 * Check if header has zip property (and it is equal to 'GZIP', ignorecase)
 *
 * @param {string} header - object to check
 *
 * @returns {boolean} does it have gzip in zip property
 */
export declare function isGzip(header: JwtPart): boolean;
/**
 * Decode jwtToken header and payload
 *
 * @param {string} str - data string to decode
 *
 * @returns {JwtDecode} object with decoded header and body, and signature untouched
 */
export declare function jwtDecode(str: string, callee?: string): JwtDecode;
/**
 * Split jwtToken into object {header, payload, signature}
 *
 * @param {string} str - data string to split
 *
 * @returns {JwtSplit} jwt split object of three strings
 */
export declare function jwtSplit(str: string, callee?: string): JwtSplit;
export declare const splitJwt: typeof jwtSplit;
/**
 * Converts base64 string to string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} base64 string
 */
export declare function s2b(str: string): string;
/**
 * Converts string to base64url string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} base64url string
 */
export declare function s2bu(str: string): string;
/**
 * Gzip and encode data string to base64url string
 *
 * @param {string} str - data string to encode
 *
 * @returns {string} base64url string
 */
export declare function s2zbu(str: string): string;
/**
 * Converts from gzip data string to string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} decoded data string
 */
export declare function unzip(str: string): string;
/**
 * Decode from base64url and unzip data string
 *
 * @param {string} str - data string to decode
 *
 * @returns {string} decoded data string
 */
export declare function zbu2s(str: string): string;
/**
 * Converts string to gzip data string
 *
 * @param {string} str - data string to convert
 *
 * @returns {string} gzip data string
 */
export declare function zip(str: string): string;
/**
 * Converts string to ArrayBuffer
 *
 * @param {string} str - data string to convert
 *
 * @returns {ArrayBuffer} charCode ArrayBuffer
 */
export declare function s2AB(str: string): ArrayBuffer;
/**
 * Converts ArrayBuffer to string
 *
 * @param {ArrayBuffer | Uint8Array} buff - charCode ArrayBuffer to convert
 *
 * @returns {string} data string
 */
export declare function AB2s(buff: ArrayBuffer | Uint8Array): string;
/**
 * Async function inspired by createHmac in crypto (used WebCrypto Api supported by most browsers)
 *
 */
export declare function createHmac(name: string, secret: string): Promise<any>;
/**
 * Algorithm HMAC sign generator
 *
 */
export declare function algHSsign(bits: number): (thing: string, secret: string) => Promise<string>;
/**
 * Algorithm HMAC verify generator
 *
 */
export declare function algHSverify(bits: number): (thing: string, signature: string, secret: string) => Promise<boolean>;
export interface PEM {
    body: ArrayBuffer | Uint8Array;
    type: 'private' | 'public';
}
export declare function s2pem(secret: string): PEM;
export declare class Asn1Tag {
    tagClass: number;
    tagConstructed: boolean;
    tagNumber: number;
    constructor(stream: any);
}
export declare function pem2asn1(buff: ArrayBuffer | Uint8Array): any;
export declare function asn12jwk(asn1: any, type?: string, extra?: any): any;
export declare function pem2jwk(secret: string, type?: "public" | "private", extra?: any): Promise<any>;
export declare function createSign(name: string): Promise<any>;
export declare function algRSsign(bits: number): (thing: string, privateKey: string) => Promise<string>;
export declare function createVerify(name: string): Promise<any>;
export declare function algRSverify(bits: number): (thing: string, signature: string, publicKey: string) => Promise<boolean>;
/**
 * Universal algorithm verifier
 *
 */
export declare function algVerify(algorithm: string, thing: string, signature: string, secret: string): Promise<boolean>;
/**
 * Universal algorithm signer
 *
 */
export declare function algSign(algorithm: string, thing: string, secret: string): Promise<string>;
export declare function jwtVerify(jwtStr: string, secret: string): Promise<boolean>;
export declare const verifyJwt: typeof jwtVerify;
export declare function jwtSign(jwtStr: string, secret: string): Promise<string>;
export declare const signJwt: typeof jwtSign;
export declare function jwtResign(jwtStr: string, secret: string, alg?: string): Promise<string>;
export declare const resignJwt: typeof jwtResign;
/**
 * Used for testing only
 *
 * @hidden
 */
export declare function cryptoType(): Promise<string>;
declare const _default: {
    ILLEGAL_ARGUMENT: string;
    UNSUPPORTED_ALGORITHM: string;
    resignJwt: typeof jwtResign;
    signJwt: typeof jwtSign;
    splitJwt: typeof jwtSplit;
    verifyJwt: typeof jwtVerify;
    AB2hex: typeof AB2hex;
    AB2s: typeof AB2s;
    J2s: typeof J2s;
    algHSsign: typeof algHSsign;
    algHSverify: typeof algHSverify;
    algRSsign: typeof algRSsign;
    algRSverify: typeof algRSverify;
    algSign: typeof algSign;
    algVerify: typeof algVerify;
    asn12jwk: typeof asn12jwk;
    b2bu: typeof b2bu;
    b2s: typeof b2s;
    bu2b: typeof bu2b;
    bu2s: typeof bu2s;
    cleanZeros: typeof cleanZeros;
    createHmac: typeof createHmac;
    createSign: typeof createSign;
    createVerify: typeof createVerify;
    hex2AB: typeof hex2AB;
    isGzip: typeof isGzip;
    jwtDecode: typeof jwtDecode;
    jwtResign: typeof jwtResign;
    jwtSign: typeof jwtSign;
    jwtSplit: typeof jwtSplit;
    jwtVerify: typeof jwtVerify;
    num2hex: typeof num2hex;
    pem2asn1: typeof pem2asn1;
    pem2jwk: typeof pem2jwk;
    s2AB: typeof s2AB;
    s2J: typeof s2J;
    s2b: typeof s2b;
    s2bu: typeof s2bu;
    s2pem: typeof s2pem;
    s2zbu: typeof s2zbu;
    tryPromise: typeof tryPromise;
    unzip: typeof unzip;
    zbu2s: typeof zbu2s;
    zip: typeof zip;
};
export default _default;
