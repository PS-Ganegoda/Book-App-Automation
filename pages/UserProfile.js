class Profile {
  constructor(page) {
    this.page = page;
    this.bookRows = page.locator(
      "#books-wrapper .rt-tbody .rt-tr-group"
    );
  }

  async getcollectionlist() {
    await this.page.waitForLoadState("domcontentloaded");

    const count = await this.bookRows.count();
    console.log("Book rows:", count);

    return count;
  }
}

module.exports = { Profile };