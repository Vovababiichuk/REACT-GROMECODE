import React from 'react';
import Comment from './Comment';
import './user.scss';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/1486366?v=4',
};

const App = () => <Comment author={userInfo} date={new Date()} text="Good job!" />;

export default App;
