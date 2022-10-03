import {
  CredentialsInterface,
  UserTokenInterface,
} from "../interfaces/auth.interface";
import { userExist } from "../utils/mockUtil";
import { tokens } from "../configs/mockValues";

export async function loginUser(
  credentials: CredentialsInterface
): Promise<UserTokenInterface> {
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
    }, 1000);
  });
}
