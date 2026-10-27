
const { test: baseTest, expect, request } = require("@playwright/test");
const { BookList } = require("../pages/BookList");
const { GetBookListbyAPI } = require("../pages/BooklistApi")
const {SignUpByAPI} = require("../pages/signup")
const {Login} = require("../pages/login")
const {Profile}= require("../pages/UserProfile")


const test = baseTest.extend({
    apicontext: async ({}, use) => {
        const apicontext = await request.newContext({
            baseURL: "https://demoqa.com",
            timeout: 30000,
            extraHTTPHeaders: {
                "Content-Type": "application/json"
            }
        });

       
  try {
    await use(apicontext);
  } finally {
    await apicontext.dispose();
  }
    },

    booklist: async ({ page }, use) => {
        const booklist = new BookList(page);
        await use(booklist);
    },

    getbooklistbyapi: async ({ apicontext }, use) => {
        const getbooklistbyapi = new GetBookListbyAPI(apicontext);
        await use(getbooklistbyapi);
    },
    signup :async({apicontext},use)=>{
        const signup = new SignUpByAPI(apicontext)
        await use(signup)
    },
    login:async({page},use)=>{
        const login = new Login(page)
        await use(login)
    },
    userprofile:async({page},use)=>{
        const userprofile = new Profile(page)
        await use(userprofile)
    }

});

module.exports = { expect, test };
