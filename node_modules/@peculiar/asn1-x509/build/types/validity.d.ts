import { Time } from "./time";
export interface IValidityParams {
    notBefore: Date;
    notAfter: Date;
}
/**
 * ```
 * Validity ::= SEQUENCE {
 *   notBefore      Time,
 *   notAfter       Time  }
 * ```
 */
export declare class Validity {
    notBefore: Time;
    notAfter: Time;
    constructor(params?: IValidityParams);
}
