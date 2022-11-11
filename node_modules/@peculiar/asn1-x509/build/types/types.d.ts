/**
 * ```
 * Version  ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
 * ```
 */
export declare enum Version {
    v1 = 0,
    v2 = 1,
    v3 = 2
}
/**
 * ```
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export declare type CertificateSerialNumber = ArrayBuffer;
/**
 * ```
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export declare type UniqueIdentifier = ArrayBuffer;
