const sleep = (time) => new Promise((res) => setTimeout(res, time));

export const getUser = (username, password) =>
     sleep(1000).then(() => {
          if ("udemy" === username && 1 === password) {
               return {
                    id: 1,
                    username,
                    email: "info@udemy.com",
               };
          }
          return null;
     });
