/**
 * ```
 * id-ce-policyConstraints OBJECT IDENTIFIER ::=  { id-ce 36 }
 * ```
 */
export declare const id_ce_policyConstraints: string;
/**
 * ```
 * SkipCerts ::= INTEGER (0..MAX)
 * ```
 */
export declare type SkipCerts = ArrayBuffer;
/**
 * ```
 * PolicyConstraints ::= SEQUENCE {
 *   requireExplicitPolicy           [0] SkipCerts OPTIONAL,
 *   inhibitPolicyMapping            [1] SkipCerts OPTIONAL }
 * ```
 */
export declare class PolicyConstraints {
    requireExplicitPolicy?: SkipCerts;
    inhibitPolicyMapping?: SkipCerts;
    constructor(params?: Partial<PolicyConstraints>);
}
