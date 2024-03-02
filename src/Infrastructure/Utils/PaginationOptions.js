class PaginationOptions {

  constructor(currentPage = 1, perPage = 10) {
    this.currentPage = Number(currentPage);
    this.perPage = Number(perPage);
  }

  limit() {
    return this.perPage;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  offset() {
    return (this.currentPage - 1) * this.limit();
  }
}

module.exports = PaginationOptions;
