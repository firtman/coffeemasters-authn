import { AsnArray } from "@peculiar/asn1-schema";
import { AccessDescription } from "./authority_information_access";
/**
 * ```
 * id-pe-subjectInfoAccess OBJECT IDENTIFIER ::= { id-pe 11 }
 * ```
 */
export declare const id_pe_subjectInfoAccess: string;
/**
 * ```
 * SubjectInfoAccessSyntax  ::=
 *         SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export declare class SubjectInfoAccessSyntax extends AsnArray<AccessDescription> {
    constructor(items?: AccessDescription[]);
}
