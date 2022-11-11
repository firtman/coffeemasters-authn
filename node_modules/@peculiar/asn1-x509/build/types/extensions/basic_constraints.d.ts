/**
 * ```
 * id-ce-basicConstraints OBJECT IDENTIFIER ::=  { id-ce 19 }
 * ```
 */
export declare const id_ce_basicConstraints: string;
/**
 * ```
 * BasicConstraints ::= SEQUENCE {
 *     cA                      BOOLEAN DEFAULT FALSE,
 *     pathLenConstraint       INTEGER (0..MAX) OPTIONAL }
 * ```
 */
export declare class BasicConstraints {
    cA: boolean;
    pathLenConstraint?: number;
    constructor(params?: Partial<BasicConstraints>);
}
