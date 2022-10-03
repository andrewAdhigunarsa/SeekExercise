import {
  CredentialsInterface,
  UserDetailsInterface,
  UserTokenInterface,
} from "../interfaces/auth.interface";
import { userExist } from "../utils/mockUtil";
import { currentUsers, tokens } from "../configs/mockValues";

export async function loginUser(
  credentials: CredentialsInterface
): Promise<UserTokenInterface> {
  // TODO: Uncomment and update when required
  // return fetch(API_URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  // .then(data => data.json())

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userExist(credentials?.username)) {
        console.log("login success");
        const token = tokens.filter(
          (v) => v.username === credentials?.username
        )[0].token;
        resolve({
          token,
        });
      } else {
        alert("login fail, invalid credentials");
        console.log("login fail");
        reject("invalid credentials");
      }
    }, 2000);
  });
}
