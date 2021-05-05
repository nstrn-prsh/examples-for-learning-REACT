const sleep = (time) => new Promise((res) => setTimeout(res, time));

export const getUser = (userName, password) =>
     sleep(1000).then(() => {
          if ("udemy" === userName && 1 === password) {
               return {
                    id: 1,
                    userName,
                    email: "info@udemy.com",
               };
          }
          return null;
     });
