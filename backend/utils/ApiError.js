export const createApiError = (statusCode, message, error) => {
    const err = new Error(message);

    err.statusCode = statusCode;
    err.data = null;
    err.success = false;
    err.error = error;
    err.timestamp = new Date().toISOString();
    err.stackTrace = err.stack;

    const stackLines = err.stack.split('\n');
    const callerLine = stackLines[2];
    err.location = callerLine.trim();

    // Return an error object with all relevant details for client-side consumption
    return {
        message: err.message,
        statusCode: err.statusCode,
        success: err.success,
        error: err.error,
        location: err.location,
        timestamp: err.timestamp,
        stackTrace: err.stackTrace,
    };
};
