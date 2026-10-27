const{expect}=require("@playwright/test")
class Login {
  constructor(page) {
    this.page = page;
    this.loginbutton = page.getByRole("button", { name: "Login" });
    this.username = page.getByPlaceholder("UserName");
    this.passward = page.getByPlaceholder("Password");
    this.error = page.locator("#output")
  }

  async loginbyUi(username, passward) {
    await this.loginbutton.click();
    await expect(this.page).toHaveURL("https://demoqa.com/login");

    await this.username.fill(username);
    await this.passward.fill(passward);

    await this.loginbutton.click();

   
  }
}

module.exports = { Login };