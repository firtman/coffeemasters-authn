import { OctetString } from "@peculiar/asn1-schema";
import { GeneralName } from "../general_name";
import { CertificateSerialNumber } from "../types";
/**
 * ```
 * id-ce-authorityKeyIdentifier OBJECT IDENTIFIER ::=  { id-ce 35 }
 * ```
 */
export declare const id_ce_authorityKeyIdentifier: string;
/**
 * ```
 * KeyIdentifier ::= OCTET STRING
 * ```
 */
export declare class KeyIdentifier extends OctetString {
}
/**
 * ```
 * AuthorityKeyIdentifier ::= SEQUENCE {
 *   keyIdentifier             [0] KeyIdentifier           OPTIONAL,
 *   authorityCertIssuer       [1] GeneralNames            OPTIONAL,
 *   authorityCertSerialNumber [2] CertificateSerialNumber OPTIONAL  }
 * ```
 */
export declare class AuthorityKeyIdentifier {
    keyIdentifier?: KeyIdentifier;
    authorityCertIssuer?: GeneralName[];
    authorityCertSerialNumber?: CertificateSerialNumber;
    constructor(params?: Partial<AuthorityKeyIdentifier>);
}
