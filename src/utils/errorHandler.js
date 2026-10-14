/**
 * Custom error class for application-specific errors.
 */
export class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
        // Maintain the correct prototype chain.
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
/**
 * Handles errors and displays an appropriate message.
 * @param error - The error that occurred.
 * @param context - Describes where the error occurred.
 */
export function handleError(error, context) {
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
