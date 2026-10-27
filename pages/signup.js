const { expect } = require("@playwright/test");
class SignUpByAPI {
  constructor(apicontext) {
    this.apicontext = apicontext;
  }

  async createuserbyAPI(username, passward) {
    const response = await this.apicontext.post("/Account/v1/User", {
      data: {
        userName: username,
        password: passward,
      },
    });
    const data = await response.json();
    console.log(data);
    await expect(response.status()).toEqual(201);
    return data;
  }
}

module.exports = { SignUpByAPI };
