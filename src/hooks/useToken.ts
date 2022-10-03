import { useState } from 'react';

interface UserToken {
  token?: string;
}

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken: UserToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: UserToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
