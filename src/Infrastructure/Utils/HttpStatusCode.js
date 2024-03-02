class HttpStatusCode {

  static get OK() {
    return 200;
  }

  static get ERROR() {
    return 400;
  }

  static get MethodNotAllowed() {
    return 406;
  }

  static get NOT_FOUND() {
    return 404;
  }

  static get Not_Authorized() {
    return 401;
  }
}

module.exports = HttpStatusCode;