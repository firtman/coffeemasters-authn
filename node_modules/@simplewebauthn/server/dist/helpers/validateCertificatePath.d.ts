/**
 * Traverse an array of PEM certificates and ensure they form a proper chain
 * @param certificates Typically the result of `x5c.map(convertASN1toPEM)`
 * @param rootCertificates Possible root certificates to complete the path
 */
export declare function validateCertificatePath(certificates: string[], rootCertificates?: string[]): Promise<boolean>;
