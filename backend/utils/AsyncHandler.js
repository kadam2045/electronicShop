export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        console.error('Error:', error);

        const statusCode = error.statusCode || 500;

        const response = {
            success: false,
            message: error.message || 'Internal Server Error'
        };


        res.status(statusCode).json(response);
    }
};

