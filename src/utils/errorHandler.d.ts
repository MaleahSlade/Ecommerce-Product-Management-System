/**
 * Custom error class for application-specific errors.
 */
export declare class AppError extends Error {
    constructor(message: string);
}
/**
 * Handles errors and displays an appropriate message.
 * @param error - The error that occurred.
 * @param context - Describes where the error occurred.
 */
export declare function handleError(error: unknown, context: string): void;
//# sourceMappingURL=errorHandler.d.ts.map