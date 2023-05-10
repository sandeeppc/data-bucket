module.exports = {

    /**
     * JSON standard response to be sent.
     *
     * @param res - Response object
     * @param status - Status of request
     * @param message - Message regarding execution of request
     * @param data - Custom data
     * @returns {*}
     */

    json: (res, status, data) => {
        let response = {};

        if (typeof data !== 'undefined') {
            response = data;
        }

        LogService.info("RESPONSE :", response);
        return res.status(status).json(response);
    },
};
