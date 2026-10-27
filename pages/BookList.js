class BookList {
  constructor(page) {
    this.page = page;
    // this.bookname = page.locator(".action-buttons")
    this.bookname = page.locator('[id^="see-book-"] a');
    this.bookRows = page.locator("tbody tr");
    this.search = page.locator("#searchBox")
    
  }

  async getBookList() {
    await this.bookname.first().waitFor({ state: "visible" });

    const bookCount = await this.bookname.count();
   

    let booknamearray = [];

    for (let i = 0; i < bookCount; i++) {
      const booknames = await this.bookname.nth(i).textContent();
      booknamearray.push(booknames);
    }

    console.log("Book Names List", booknamearray);

    return booknamearray;
  }

  async Searchbook(book){
    await this.search.fill(book)
   const result = this.getBookList();

   return result
 
  }
}

module.exports = { BookList };
