import { AsnArray } from "@peculiar/asn1-schema";
/**
 * ```
 * id-ce-certificatePolicies OBJECT IDENTIFIER ::=  { id-ce 32 }
 * ```
 */
export declare const id_ce_certificatePolicies: string;
/**
 * ```
 * anyPolicy OBJECT IDENTIFIER ::= { id-ce-certificatePolicies 0 }
 * ```
 */
export declare const id_ce_certificatePolicies_anyPolicy: string;
/**
 * ```
 * DisplayText ::= CHOICE {
 *      ia5String        IA5String      (SIZE (1..200)),
 *      visibleString    VisibleString  (SIZE (1..200)),
 *      bmpString        BMPString      (SIZE (1..200)),
 *      utf8String       UTF8String     (SIZE (1..200)) }
 * ```
 */
export declare class DisplayText {
    ia5String?: string;
    visibleString?: string;
    bmpString?: string;
    utf8String?: string;
    constructor(params?: Partial<DisplayText>);
    toString(): string;
}
/**
 * ```
 * NoticeReference ::= SEQUENCE {
 *      organization     DisplayText,
 *      noticeNumbers    SEQUENCE OF INTEGER }
 * ```
 */
export declare class NoticeReference {
    organization: DisplayText;
    noticeNumbers: number[];
    constructor(params?: Partial<NoticeReference>);
}
/**
 * ```
 * UserNotice ::= SEQUENCE {
 *      noticeRef        NoticeReference OPTIONAL,
 *      explicitText     DisplayText OPTIONAL }
 * ```
 */
export declare class UserNotice {
    noticeRef?: NoticeReference;
    explicitText?: DisplayText;
    constructor(params?: Partial<UserNotice>);
}
/**
 * ```
 * CPSuri ::= IA5String
 * ```
 */
export declare type CPSuri = string;
/**
 * ```
 * Qualifier ::= CHOICE {
 *      cPSuri           CPSuri,
 *      userNotice       UserNotice }
 * ```
 */
export declare class Qualifier {
    cPSuri?: CPSuri;
    userNotice?: UserNotice;
    constructor(params?: Partial<Qualifier>);
}
/**
 * ```
 * PolicyQualifierId ::= OBJECT IDENTIFIER ( id-qt-cps | id-qt-unotice )
 * ```
 */
export declare type PolicyQualifierId = string;
/**
 * ```
 * PolicyQualifierInfo ::= SEQUENCE {
 *      policyQualifierId  PolicyQualifierId,
 *      qualifier          ANY DEFINED BY policyQualifierId }
 * ```
 */
export declare class PolicyQualifierInfo {
    policyQualifierId: PolicyQualifierId;
    qualifier: ArrayBuffer;
    constructor(params?: Partial<PolicyQualifierInfo>);
}
/**
 * ```
 * CertPolicyId ::= OBJECT IDENTIFIER
 * ```
 */
export declare type CertPolicyId = string;
/**
 * ```
 * PolicyInformation ::= SEQUENCE {
 *      policyIdentifier   CertPolicyId,
 *      policyQualifiers   SEQUENCE SIZE (1..MAX) OF
 *                              PolicyQualifierInfo OPTIONAL }
 * ```
 */
export declare class PolicyInformation {
    policyIdentifier: CertPolicyId;
    policyQualifiers?: PolicyQualifierInfo[];
    constructor(params?: Partial<PolicyInformation>);
}
/**
 * ```
 * CertificatePolicies ::= SEQUENCE SIZE (1..MAX) OF PolicyInformation
 * ```
 */
export declare class CertificatePolicies extends AsnArray<PolicyInformation> {
    constructor(items?: PolicyInformation[]);
}
