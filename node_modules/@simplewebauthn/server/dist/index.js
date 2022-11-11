"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = exports.MetadataService = exports.verifyAuthenticationResponse = exports.generateAuthenticationOptions = exports.verifyRegistrationResponse = exports.generateRegistrationOptions = void 0;
/**
 * @packageDocumentation
 * @module @simplewebauthn/server
 */
const generateRegistrationOptions_1 = require("./registration/generateRegistrationOptions");
Object.defineProperty(exports, "generateRegistrationOptions", { enumerable: true, get: function () { return generateRegistrationOptions_1.generateRegistrationOptions; } });
const verifyRegistrationResponse_1 = require("./registration/verifyRegistrationResponse");
Object.defineProperty(exports, "verifyRegistrationResponse", { enumerable: true, get: function () { return verifyRegistrationResponse_1.verifyRegistrationResponse; } });
const generateAuthenticationOptions_1 = require("./authentication/generateAuthenticationOptions");
Object.defineProperty(exports, "generateAuthenticationOptions", { enumerable: true, get: function () { return generateAuthenticationOptions_1.generateAuthenticationOptions; } });
const verifyAuthenticationResponse_1 = require("./authentication/verifyAuthenticationResponse");
Object.defineProperty(exports, "verifyAuthenticationResponse", { enumerable: true, get: function () { return verifyAuthenticationResponse_1.verifyAuthenticationResponse; } });
const metadataService_1 = require("./services/metadataService");
Object.defineProperty(exports, "MetadataService", { enumerable: true, get: function () { return metadataService_1.MetadataService; } });
const settingsService_1 = require("./services/settingsService");
Object.defineProperty(exports, "SettingsService", { enumerable: true, get: function () { return settingsService_1.SettingsService; } });
//# sourceMappingURL=index.js.map