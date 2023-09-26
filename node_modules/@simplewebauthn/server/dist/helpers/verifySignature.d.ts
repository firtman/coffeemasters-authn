/// <reference types="node" />
declare type VerifySignatureOptsLeafCert = {
    signature: Buffer;
    signatureBase: Buffer;
    leafCert: Buffer;
    hashAlgorithm?: string;
};
declare type VerifySignatureOptsCredentialPublicKey = {
    signature: Buffer;
    signatureBase: Buffer;
    credentialPublicKey: Buffer;
    hashAlgorithm?: string;
};
/**
 * Verify an authenticator's signature
 *
 * @param signature attStmt.sig
 * @param signatureBase Output from Buffer.concat()
 * @param publicKey Authenticator's public key as a PEM certificate
 * @param algo Which algorithm to use to verify the signature (default: `'sha256'`)
 */
export declare function verifySignature(opts: VerifySignatureOptsLeafCert | VerifySignatureOptsCredentialPublicKey): Promise<boolean>;
export {};
