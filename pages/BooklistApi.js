const { expect } = require("@playwright/test");

class GetBookListbyAPI{
    constructor(apicontext){
        this.apicontext = apicontext
    }
    async getbooks(){
        const response = await this.apicontext.get("/BookStore/v1/Books");

    expect(response.status()).toBe(200);
    const data = await response.json()
   
    expect(data).toHaveProperty('books');

    expect (data.books[0].title).toEqual('Git Pocket Guide')

    const count =await  data.books.length;
    

    let booknamesarraybyAPI = []
    for (let i=0;i<count;i++){
        booknamesarraybyAPI.push(data.books[i].title)
    }

    console.log("Book names from API:", booknamesarraybyAPI);
    
    return(
        booknamesarraybyAPI
    )
    }
    
}

module.exports={GetBookListbyAPI}