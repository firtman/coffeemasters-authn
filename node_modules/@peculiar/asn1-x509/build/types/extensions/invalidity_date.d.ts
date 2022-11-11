/**
 * ```
 * id-ce-invalidityDate OBJECT IDENTIFIER ::= { id-ce 24 }
 * ```
 */
export declare const id_ce_invalidityDate: string;
/**
 * ```
 * InvalidityDate ::=  GeneralizedTime
 * ```
 */
export declare class InvalidityDate {
    value: Date;
    constructor(value?: Date);
}
