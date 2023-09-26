"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const debug_1 = __importDefault(require("debug"));
const defaultLogger = (0, debug_1.default)('SimpleWebAuthn');
/**
 * Generate an instance of a `debug` logger that extends off of the "simplewebauthn" namespace for
 * consistent naming.
 *
 * See https://www.npmjs.com/package/debug for information on how to control logging output when
 * using @simplewebauthn/server
 *
 * Example:
 *
 * ```
 * const log = getLogger('mds');
 * log('hello'); // simplewebauthn:mds hello +0ms
 * ```
 */
function getLogger(name) {
    return defaultLogger.extend(name);
}
exports.getLogger = getLogger;
//# sourceMappingURL=logging.js.map