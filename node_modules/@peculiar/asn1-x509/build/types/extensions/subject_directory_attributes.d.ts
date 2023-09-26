import { AsnArray } from "@peculiar/asn1-schema";
import { Attribute } from "../attribute";
/**
 * ```
 * id-ce-subjectDirectoryAttributes OBJECT IDENTIFIER ::=  { id-ce 9 }
 * ```
 */
export declare const id_ce_subjectDirectoryAttributes: string;
/**
 * ```
 * SubjectDirectoryAttributes ::= SEQUENCE SIZE (1..MAX) OF Attribute
 * ```
 */
export declare class SubjectDirectoryAttributes extends AsnArray<Attribute> {
    constructor(items?: Attribute[]);
}
