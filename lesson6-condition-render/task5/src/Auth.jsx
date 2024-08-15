import React, { useState } from 'react';
import Login from './Login';
import Spinner from './Spinner';
import Logout from './Logout';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSpinner = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
		setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner size={50} />
      ) : isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLoginSpinner} />
      )}
    </div>
  );
};

export default Auth;
