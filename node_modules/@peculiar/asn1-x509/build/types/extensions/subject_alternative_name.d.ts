import { GeneralNames } from "../general_names";
import { GeneralName } from '../general_name';
/**
 * ```
 * id-ce-subjectAltName OBJECT IDENTIFIER ::=  { id-ce 17 }
 * ```
 */
export declare const id_ce_subjectAltName: string;
/**
 * ```
 * SubjectAltName ::= GeneralNames
 * ```
 */
export declare class SubjectAlternativeName extends GeneralNames {
    constructor(items?: GeneralName[]);
}
