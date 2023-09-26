/**
 * ```
 * id-ce-inhibitAnyPolicy OBJECT IDENTIFIER ::=  { id-ce 54 }
 * ```
 */
export declare const id_ce_inhibitAnyPolicy: string;
/**
 * ```
 * InhibitAnyPolicy ::= SkipCerts
 * ```
 */
export declare class InhibitAnyPolicy {
    value: ArrayBuffer;
    constructor(value?: ArrayBuffer);
}
