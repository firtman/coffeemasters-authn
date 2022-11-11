import { CRLDistributionPoints, DistributionPoint } from "./crl_distribution_points";
/**
 * ```
 * id-ce-freshestCRL OBJECT IDENTIFIER ::=  { id-ce 46 }
 * ```
 */
export declare const id_ce_freshestCRL: string;
/**
 * ```
 * FreshestCRL ::= CRLDistributionPoints
 * ```
 */
export declare class FreshestCRL extends CRLDistributionPoints {
    constructor(items?: DistributionPoint[]);
}
