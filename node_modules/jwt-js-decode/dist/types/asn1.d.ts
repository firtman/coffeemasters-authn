export declare class Stream {
    enc: any;
    pos: any;
    constructor(enc: any, pos?: number);
    get(pos: any): any;
    hexDigits: string;
    hexByte(b: any): string;
    hexDump(start: any, end: any, raw: any): string;
    isASCII(start: any, end: any): boolean;
    parseStringISO(start: any, end: any): string;
    parseStringUTF(start: any, end: any): string;
    parseStringBMP(start: any, end: any): string;
    parseTime(start: any, end: any, shortYear: any): string;
    parseInteger(start: any, end: any): string | 0 | -1;
    parseBitString(start: any, end: any, maxLength: any): string;
    parseOctetString(start: any, end: any, maxLength: any): any;
    parseOID(start: any, end: any, maxLength: any): any;
}
export declare class ASN1 {
    stream: any;
    header: any;
    length: any;
    tag: any;
    sub: any;
    constructor(stream: any, header: any, length: any, tag: any, sub: any);
    typeName(): string | undefined;
    content(maxLength?: any): any;
    toString(): string;
    posStart(): any;
    posContent(): any;
    posEnd(): any;
    toHexString(root?: any): any;
    getHex(): any;
    getAB(clean?: boolean): any;
    static decodeLength(stream: any): any;
    static decode(stream: any): ASN1;
}
