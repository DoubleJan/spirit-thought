// 管理后台
import React from 'react';
import { useHistory } from 'react-router-dom';
import Constants from '@/constants'

function Create() {
  const history = useHistory();
  console.log('constant', Constants);
  const username = localStorage.getItem(Constants.storage.username);
  const password = localStorage.getItem(Constants.storage.password);

  if (!(username && password)) {
    history.push('/login');
  }

  return <h1>Admin</h1>
}

export default Create;
