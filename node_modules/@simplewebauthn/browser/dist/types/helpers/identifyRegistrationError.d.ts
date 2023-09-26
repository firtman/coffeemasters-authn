import { WebAuthnError } from './webAuthnError';
export declare function identifyRegistrationError({ error, options, }: {
    error: Error;
    options: CredentialCreationOptions;
}): WebAuthnError | Error;
