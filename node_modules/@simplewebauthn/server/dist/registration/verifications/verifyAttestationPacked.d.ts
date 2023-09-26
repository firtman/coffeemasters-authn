import type { AttestationFormatVerifierOpts } from '../verifyRegistrationResponse';
/**
 * Verify an attestation response with fmt 'packed'
 */
export declare function verifyAttestationPacked(options: AttestationFormatVerifierOpts): Promise<boolean>;
