export declare const UNSUPPORTED_ALGORITHM = "Unsupported algorithm name specified! Supported algorithms: \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\" and \"none\".";
export declare const ILLEGAL_ARGUMENT = "Illegal argument specified!";
export declare const CRYPTO_NOT_FOUND = "Could not find 'crypto'.";
export declare const PAKO_NOT_FOUND = "Could not find 'pako'.";
export declare function generateErrorMessage(value: any, callee: any, argumentName?: string, defaultType?: string): string;
export declare function num2hex(memo: string, i: number): string;
export declare function cleanZeros(b: any): any;
export declare function hex2AB(hex: string): ArrayBuffer | Uint8Array;
export declare function AB2hex(buff: ArrayBuffer | Uint8Array): string;
