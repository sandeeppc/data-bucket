module.exports = {

    /**
     * Log and send error email
     *
     * @param exception - Error/exception object received
     */

    error: (exception) => {
        sails.log.error(exception);
        //Add email notification when required
    },

    /**
     * Log and send info email
     *
     * @param message - information message received
     * @param payload - information payload received
     */
    info: (message, payload) => {
        sails.log.info(message, payload);
        //Add email notification when required
    },

    /**
     * Log and send debug email
     *
     * @param message - debug message received
     * @param payload - debug payload received
     */
    debug: (message, payload) => {
        sails.log.debug(message, payload);
        //Add email notification when required
    }

};

