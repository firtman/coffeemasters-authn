import { PublicKeyCredentialCreationOptionsJSON, RegistrationResponseJSON } from '@simplewebauthn/typescript-types';
export declare function startRegistration(creationOptionsJSON: PublicKeyCredentialCreationOptionsJSON): Promise<RegistrationResponseJSON>;
