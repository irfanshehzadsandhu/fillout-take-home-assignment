const PaginationOptions = require("../../../../../Infrastructure/Utils/PaginationOptions");
const HttpResp = require("../../../../../Infrastructure/Utils/HttpResp");

class FormController {
  constructor(filloutService) {
    this.filloutService = filloutService;
  }

  filteredResponses = async (req, res) => {
    const { formId } = req.params;
    const { filters, page, perPage } = req.query;
    const paginationOptions = new PaginationOptions(page, perPage)
    const response = await this.filloutService.filteredResponses(formId, filters, paginationOptions);
    HttpResp.convertToExpress(res, response);
  }
}
module.exports = FormController