/*
* ConstantService js to store all constant values for this app
 */
module.exports = {
  responseCode: {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500
  },
  responseMessage: {
    ERR_OOPS_SOMETHING_WENT_WRONG: "Oops! Something wrong",
    SUCCESS_MSG: "Success!",
    BAD_REQUEST: "Please provide data in request body!",
  }
};
