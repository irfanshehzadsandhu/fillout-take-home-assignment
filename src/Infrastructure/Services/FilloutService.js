const axios = require('axios');
const PaginationData = require("../Utils/PaginationData");
const HttpResp = require("../Utils/HttpResp");
const HttpStatusCode = require("../Utils/HttpStatusCode");
const BASE_URL = "https://api.fillout.com/v1/api";
const config = require("../Config");
const filterResponse = require("../Utils/filterResponse");

class FilloutService {
  constructor() {

  }
  async filteredResponses(formId, filters, paginationOptions) {
    try {

      const headers = {
        Authorization: `Bearer ${config.fillout.secret_key}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const apiResponse = await axios.get(`${BASE_URL}/forms/${formId}/submissions`, { headers: headers });
      const paginationData = new PaginationData(paginationOptions, apiResponse.data.responses.length);

      for (let response of apiResponse.data.responses) {
        const questions = filterResponse(response, filters);
        if (questions.length > 0) {
          response.questions = questions;
          paginationData.addItem(response);
        }
      }
      return HttpResp.create(HttpStatusCode.OK, paginationData.getPaginatedData())
    } catch (e) {
      console.log(e);
      return HttpResp.create(HttpStatusCode.ERROR, e.message);
    }

  }
}
module.exports = FilloutService;