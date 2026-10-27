
const { expect, test } = require("../../fixture/base.js");

test("verify the GET API for the books", async ({ apicontext }) => {
    const response = await apicontext.get("/BookStore/v1/Books");

    expect(response.status()).toBe(200);
    const data = await response.json()
    console.log('data',data)
    expect(data).toHaveProperty('books');

    expect (data.books[0].title).toEqual('Git Pocket Guide')

    const count =await  data.books.length;
    console.log("Total books:", count);

    let booknamesarraybyAPI = []
    for (let i=0;i<count;i++){
        booknamesarraybyAPI.push(data.books[i].title)
    }

    console.log("Book names from API:", booknamesarraybyAPI);
});

test("verify the GET API for the books by ", async ({ getbooklistbyapi }) => {
  await getbooklistbyapi.getbooksbyapi()
});