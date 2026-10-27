const { test, expect } = require("../../fixture/base");
let gentoken ; 

test("Verify the User creation ", async ({ apicontext }) => {
  const response = await apicontext.post("/Account/v1/User", {
    data: {
      userName: "piumi4",
      password: "Piumi@123",
    },
  });
  const data = await response.json();
  console.log(data);

  expect(response.status()).toEqual(201);
});



test("verify the Post Request for the book",async({apicontext})=>{
     const responsenewUser = await apicontext.post("/Account/v1/User", {
    data: {
      userName: "piumi1",
      password: "Piumi@1234",
    },
  });
  const datanewuser = await responsenewUser.json();
  console.log(datanewuser);
  const userIdnewuser = datanewuser.userID


    const responseT = await apicontext.post(
        "/Account/v1/GenerateToken",
        { data: {
      userName: "piumi1",
      password: "Piumi@1234",
    },
            
        }
    )
    const dataT = await responseT.json();
    console.log(dataT)

    gentoken = dataT.token
     console.log(gentoken)



    const response = await apicontext.post(
        '/BookStore/v1/Books',
        {
            timeout:30000,
                  headers: {
        Authorization: `Bearer ${gentoken}`,
      },
            data:{
  "userId": `${userIdnewuser}`,
  "collectionOfIsbns": [
    {
      "isbn": "9781593277574"
    }
  ]
}

        }
    )
   
    const data = await response.json();
    console.log(data)
     expect (response.status()).toEqual(201)
})

