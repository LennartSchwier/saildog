import { useState } from 'react';

export default function useLoginData() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  return [loginData, setLoginData];
}
