import type { AttestationFormatVerifierOpts } from '../verifyRegistrationResponse';
/**
 * Verify an attestation response with fmt 'android-key'
 */
export declare function verifyAttestationAndroidKey(options: AttestationFormatVerifierOpts): Promise<boolean>;
