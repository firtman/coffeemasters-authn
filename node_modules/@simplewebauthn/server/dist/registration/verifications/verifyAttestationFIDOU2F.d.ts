import type { AttestationFormatVerifierOpts } from '../verifyRegistrationResponse';
/**
 * Verify an attestation response with fmt 'fido-u2f'
 */
export declare function verifyAttestationFIDOU2F(options: AttestationFormatVerifierOpts): Promise<boolean>;
