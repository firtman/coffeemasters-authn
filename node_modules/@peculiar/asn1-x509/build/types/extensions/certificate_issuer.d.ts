import { GeneralNames } from "../general_names";
import { GeneralName } from '../general_name';
/**
 * ```
 * id-ce-certificateIssuer   OBJECT IDENTIFIER ::= { id-ce 29 }
 * ```
 */
export declare const id_ce_certificateIssuer: string;
/**
 * ```
 * CertificateIssuer ::=     GeneralNames
 * ```
 */
export declare class CertificateIssuer extends GeneralNames {
    constructor(items?: GeneralName[]);
}
