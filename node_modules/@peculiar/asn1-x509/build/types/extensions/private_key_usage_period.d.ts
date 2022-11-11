/**
 * ```
 * id-ce-privateKeyUsagePeriod OBJECT IDENTIFIER ::=  { id-ce 16 }
 * ```
 */
export declare const id_ce_privateKeyUsagePeriod: string;
/**
 * ```
 * PrivateKeyUsagePeriod ::= SEQUENCE {
 *     notBefore       [0]     GeneralizedTime OPTIONAL,
 *     notAfter        [1]     GeneralizedTime OPTIONAL }
 * ```
 */
export declare class PrivateKeyUsagePeriod {
    notBefore?: Date;
    notAfter?: Date;
    constructor(params?: Partial<PrivateKeyUsagePeriod>);
}
