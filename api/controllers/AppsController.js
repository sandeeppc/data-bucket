module.exports = {

  /**
   * Check if server is running.
   * API Endpoint :   /
   * API Method   :   GET
   *
   * @param   {Object}        req          Request Object From API Request.
   * @param   {Object}        res          Response Object For API Request.
   * @returns {Promise<*>}    JSONResponse With success code 200 and  information or relevant error code with message.
   */
  ping: async (req, res) => {
    res.ok();
  },

  /**
   * Add data in mongo
   * API Endpoint :   /data
   * API Method   :   POST
   *
   * @param   {Object}        req          Request Object From API Request.
   * @param   {Object}        res          Response Object For API Request.
   * @returns {Promise<*>}    JSONResponse With success code 200 and  information or relevant error code with message.
   */

  addData: async (req, res) => {
    try {
      LogService.info("====================== ADD DATA ==============================");
      LogService.info("REQ BODY :", req.body);

      if (_.isEmpty(req.body)) {
        return ResponseService.json(res, ConstantService.responseCode.BAD_REQUEST, {
          message: ConstantService.responseMessage.BAD_REQUEST,
        });
      }

      const request = {
        eventName: req.body.event_name ? req.body.event_name : 'default',
        eventProperty: req.body,
      };

      await Event.create({
        headers: req.headers,
        ip: req.ip,
        eventName: request.eventName,
        eventProperty: request.eventProperty,
      });

      return ResponseService.json(res, ConstantService.responseCode.SUCCESS, {
        message: ConstantService.responseMessage.SUCCESS_MSG,
      });

    } catch (exception) {
      sails.log.error(exception);
      return ResponseService.json(res, ConstantService.responseCode.INTERNAL_SERVER_ERROR, {
        message: ConstantService.responseMessage.ERR_OOPS_SOMETHING_WENT_WRONG
      });
    }
  },

};
