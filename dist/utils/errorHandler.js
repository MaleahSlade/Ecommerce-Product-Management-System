"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
/**
 * Custom error class for application-specific errors.
 */
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
        // Maintain the correct prototype chain.
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.AppError = AppError;
/**
 * Handles errors and displays an appropriate message.
 * @param error - The error that occurred.
 * @param context - Describes where the error occurred.
 */
function handleError(error, context) {
    if (error instanceof AppError) {
        console.error(`Application Error: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Error while ${context}: ${error.message}`);
    }
    else {
        console.error(`An unknown error occurred while ${context}.`);
    }
}
//# sourceMappingURL=errorHandler.js.map