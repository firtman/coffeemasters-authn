import { WebAuthnError } from './webAuthnError';
export declare function identifyAuthenticationError({ error, options, }: {
    error: Error;
    options: CredentialRequestOptions;
}): WebAuthnError | Error;
