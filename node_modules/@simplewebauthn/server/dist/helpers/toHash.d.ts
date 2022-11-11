/// <reference types="node" />
/**
 * Returns hash digest of the given data using the given algorithm.
 * @param data Data to hash
 * @return The hash
 */
export declare function toHash(data: Buffer | string, algo?: string): Buffer;
