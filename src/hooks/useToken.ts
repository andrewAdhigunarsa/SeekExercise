import { useState } from "react";
import { UserTokenInterface } from "../interfaces/auth.interface";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken: UserTokenInterface = tokenString
      ? JSON.parse(tokenString)
      : null;
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: UserTokenInterface) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const revokeToken = () => {
    localStorage.removeItem("token");
    setToken(undefined);
  };

  return {
    setToken: saveToken,
    token,
    revokeToken,
  };
}
