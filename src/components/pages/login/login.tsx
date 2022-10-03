import React, { useState } from 'react';
import { UserToken } from '../../../hooks/useToken';
import { loginUser } from '../../../services/auth';

interface Props {
  setToken: (token: UserToken) => void;
}

export default function Login({ setToken }: Props) {
  const [username, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
