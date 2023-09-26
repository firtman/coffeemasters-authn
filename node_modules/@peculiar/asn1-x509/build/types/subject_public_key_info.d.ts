import { AlgorithmIdentifier } from "./algorithm_identifier";
/**
 * ```
 * SubjectPublicKeyInfo  ::=  SEQUENCE  {
 *   algorithm            AlgorithmIdentifier,
 *   subjectPublicKey     BIT STRING  }
 * ```
 */
export declare class SubjectPublicKeyInfo {
    algorithm: AlgorithmIdentifier;
    subjectPublicKey: ArrayBuffer;
    constructor(params?: Partial<SubjectPublicKeyInfo>);
}
