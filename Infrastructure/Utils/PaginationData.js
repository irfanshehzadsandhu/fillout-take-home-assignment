class PaginationData {


  constructor(paginationOptions, itemCount) {
    this.paginationOptions = paginationOptions;
    this.itemCount = itemCount;
    this.items = [];
  }


  totalPages() {
    return Math.ceil(this.itemCount / this.paginationOptions.limit());
  }

  addItem(item) {
    this.items.push(item);
  }

  hasNext() {
    return this.paginationOptions.getCurrentPage() < this.totalPages();
  }

  nextPage() {
    return this.paginationOptions.getCurrentPage() + 1;
  }

  hasPrev() {
    return this.paginationOptions.getCurrentPage() > 1;
  }

  prevPage() {
    return this.paginationOptions.getCurrentPage() - 1;
  }


  getPaginatedData() {
    const paginationInfo = {
      totalItems: this.itemCount,
      totalPages: this.totalPages(),
      currentPage: this.paginationOptions.getCurrentPage(),
      perPage: this.paginationOptions.limit(),
      nextPage: 0,
      prevPage: 0
    };

    if (this.hasNext()) {
      paginationInfo.nextPage = this.nextPage();
    }

    if (this.hasPrev()) {
      paginationInfo.prevPage = this.prevPage();
    }

    return {
      status: "success",
      paginationInfo,
      data: this.items,
    };
  }
}

module.exports = PaginationData;
