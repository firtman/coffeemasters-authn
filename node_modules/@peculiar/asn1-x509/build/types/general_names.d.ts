import { GeneralName } from "./general_name";
import { AsnArray } from "@peculiar/asn1-schema";
/**
 * ```
 * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export declare class GeneralNames extends AsnArray<GeneralName> {
    constructor(items?: GeneralName[]);
}
