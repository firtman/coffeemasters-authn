import { AsnArray } from "@peculiar/asn1-schema";
/**
 * ```
 * id-ce-extKeyUsage OBJECT IDENTIFIER ::= { id-ce 37 }
 * ```
 */
export declare const id_ce_extKeyUsage: string;
export declare type KeyPurposeId = string;
/**
 * ```
 * ExtKeyUsageSyntax ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId
 * ```
 */
export declare class ExtendedKeyUsage extends AsnArray<string> {
    constructor(items?: string[]);
}
/**
 * ```
 * anyExtendedKeyUsage OBJECT IDENTIFIER ::= { id-ce-extKeyUsage 0 }
 * ```
 */
export declare const anyExtendedKeyUsage: string;
/**
 * ```
 * id-kp-serverAuth             OBJECT IDENTIFIER ::= { id-kp 1 }
 * -- TLS WWW server authentication
 * -- Key usage bits that may be consistent: digitalSignature,
 * -- keyEncipherment or keyAgreement
 * ```
 */
export declare const id_kp_serverAuth: string;
/**
 * ```
 * id-kp-clientAuth             OBJECT IDENTIFIER ::= { id-kp 2 }
 * -- TLS WWW client authentication
 * -- Key usage bits that may be consistent: digitalSignature
 * -- and/or keyAgreement
 * ```
 */
export declare const id_kp_clientAuth: string;
/**
 * ```
 * id-kp-codeSigning             OBJECT IDENTIFIER ::= { id-kp 3 }
 * -- Signing of downloadable executable code
 * -- Key usage bits that may be consistent: digitalSignature
 * ```
 */
export declare const id_kp_codeSigning: string;
/**
 * ```
 * id-kp-emailProtection         OBJECT IDENTIFIER ::= { id-kp 4 }
 * -- Email protection
 * -- Key usage bits that may be consistent: digitalSignature,
 * -- nonRepudiation, and/or (keyEncipherment or keyAgreement)
 * ```
 */
export declare const id_kp_emailProtection: string;
/**
 * ```
 * id-kp-timeStamping            OBJECT IDENTIFIER ::= { id-kp 8 }
 * -- Binding the hash of an object to a time
 * -- Key usage bits that may be consistent: digitalSignature
 * -- and/or nonRepudiation
 * ```
 */
export declare const id_kp_timeStamping: string;
/**
 * ```
 * id-kp-OCSPSigning            OBJECT IDENTIFIER ::= { id-kp 9 }
 * -- Signing OCSP responses
 * -- Key usage bits that may be consistent: digitalSignature
 * -- and/or nonRepudiation
 * ```
 */
export declare const id_kp_OCSPSigning: string;
