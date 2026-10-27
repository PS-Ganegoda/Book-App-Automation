const {test,expect} = require("@playwright/test")
const fs = require('fs')
const path = require('path')

const authFile= path.join(
    __dirname,
    '../playwright/.auth/user.json'
)

test("verify the local storage of the the sessions",async({page})=>{
    fs.mkdirSync(path.dirname(authFile),{recursive:true})
     const loginbutton = page.getByRole("button", { name: "Login" });
    const username = page.getByPlaceholder("UserName");
    const passward = page.getByPlaceholder("Password");
    const error = page.locator("#output")

     await page.goto('https://demoqa.com/login');

    await  page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://demoqa.com/login");

    await page.getByPlaceholder("UserName").fill("piumi");
    await page.getByPlaceholder("Password").fill('Piumi@123');

   await  page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://demoqa.com/profile")

})