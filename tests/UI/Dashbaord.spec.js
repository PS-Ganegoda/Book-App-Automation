const {test,expect} = require ("../../fixture/base")

test("Verify the Book display List",async({page,booklist,getbooklistbyapi})=>{
     await page.goto("https://demoqa.com/books")
     const uiresult =  await booklist.getBookList()
     const apiresult = await getbooklistbyapi.getbooks()
    console.log("Ui results book list array",uiresult);
    console.log("Api results book list array",apiresult)

     await expect (uiresult.booknamearray).toEqual(apiresult.booknamesarraybyAPI)

})

test("Verify the Serach functionality",async({page,booklist})=>{
          await page.goto("https://demoqa.com/books")
        const uiresult =  await booklist.getBookList()
        const book = uiresult[0]

         const serchresult =  await booklist.Searchbook(book)
          // await expect( serchresult ).toEqual(book)

          console.log("The Book name ",book)
          console.log("Serch Result ", serchresult)

})


test("Verify the login functionality for the relevent user ",async({page,signup,login})=>{
   
      const username = "Thisara5";
      const passward ="Thisara@123";
    
     await signup.createuserbyAPI(username,passward)
    await page.goto("https://demoqa.com/books")
     await login.loginbyUi(username, passward)

      await expect(page).toHaveURL("https://demoqa.com/profile");
    


   
})

test("invalid login functionalitie check",async({page,login})=>{
        const username = "Thisara5";
      const passward ="Thisara@12";
    
   
    await page.goto("https://demoqa.com/books")
     await login.loginbyUi(username, passward)

    
      await expect(login.error).toHaveText("Invalid username or password!")
    


})

test("View the relevent user books ",async({page,userprofile})=>{
 await userprofile.getcollectionlist()
 console.log(
  await page.evaluate(() => localStorage.getItem('token'))
);
})
test("View the relevant user books", async ({ page, userprofile }) => {
  await page.goto("https://demoqa.com/profile");

  await expect(page.locator("#userName-value")).toHaveText("piumi");

  // console.log(
  //   "Token cookie exists:",
  //   (await page.context().cookies()).some(
  //     cookie => cookie.name === "token"
  //   )
  // );

  const count = await userprofile.getcollectionlist();
  console.log("Collection count:", count);
});
