class HttpResp {
  constructor(statusCode, body) {
    this.statusCode = statusCode;
    this.body = body;
  }


  static create(respCode, body) {
    return new HttpResp(respCode, body);
  }


  static convertToExpress(resp, httpResp) {
    return resp.status(httpResp.statusCode).json(httpResp.body);
  }

}

module.exports = HttpResp;