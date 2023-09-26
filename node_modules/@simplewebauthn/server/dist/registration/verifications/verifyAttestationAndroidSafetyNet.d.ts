import type { AttestationFormatVerifierOpts } from '../verifyRegistrationResponse';
/**
 * Verify an attestation response with fmt 'android-safetynet'
 */
export declare function verifyAttestationAndroidSafetyNet(options: AttestationFormatVerifierOpts): Promise<boolean>;
