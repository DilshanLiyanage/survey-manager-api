import constants from "../utility/constants.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation", message: err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title: "Un authorized", message: err.message, stackTrace: err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbbien", message: err.message, stackTrace: err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title: "Server error", message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("No error All goods")
            break;
    }
}

export default errorHandler;