const{expect,test} = require("../../fixture/base")

test("verify the Post Request for the book",async({apicontext})=>{
    const response = await apicontext.post(
        '/BookStore/v1/Books',
        {
            data:{
  "userId": "1234",
  "collectionOfIsbns": [
    {
      "isbn": "9781593277574"
    }
  ]
}

        }
    )
    // expect (response.status()).toEqual(201)
    const data = await response.json();
    console.log(data)
})