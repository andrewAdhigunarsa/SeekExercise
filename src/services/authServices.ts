import {
  CredentialsInterface,
  UserTokenInterface,
} from "../interfaces/auth.interface";

export async function loginUser(
  credentials: CredentialsInterface
): Promise<UserTokenInterface> {
  // This is to mock
  // return fetch(API_URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  // .then(data => data.json())

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("login success");
      resolve({
        token: "wewerwe112312r",
      });
    }, 2000);
  });
}
