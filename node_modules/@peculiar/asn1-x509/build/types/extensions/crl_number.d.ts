/**
 * ```
 * id-ce-cRLNumber OBJECT IDENTIFIER ::= { id-ce 20 }
 * ```
 */
export declare const id_ce_cRLNumber: string;
/**
 * ```
 * CRLNumber ::= INTEGER (0..MAX)
 * ```
 */
export declare class CRLNumber {
    value: number;
    constructor(value?: number);
}
