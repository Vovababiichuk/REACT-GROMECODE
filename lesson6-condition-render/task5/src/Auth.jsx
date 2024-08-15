//! v1

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

//! v2

// import React, { useState, useCallback, useReducer } from 'react';
// import Login from './Login';
// import Spinner from './Spinner';
// import Logout from './Logout';

// const initialState = {
//   isLoading: false,
//   isLoggedIn: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN_START':
//       return { ...state, isLoading: true };
//     case 'LOGIN_SUCCESS':
//       return { ...state, isLoading: false, isLoggedIn: true };
//     case 'LOGOUT':
//       return { ...state, isLoggedIn: false, isLoading: false };
//     default:
//       return state;
//   }
// };

// const Auth = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLoginSpinner = useCallback(() => {
//     dispatch({ type: 'LOGIN_START' });

//     setTimeout(() => {
//       dispatch({ type: 'LOGIN_SUCCESS' });
//     }, 2000);
//   }, []);

//   const handleLogout = useCallback(() => {
//     dispatch({ type: 'LOGOUT' });
//   }, []);

//   return (
//     <div>
//       {state.isLoading ? (
//         <Spinner size={50} />
//       ) : state.isLoggedIn ? (
//         <Logout onLogout={handleLogout} />
//       ) : (
//         <Login onLogin={handleLoginSpinner} />
//       )}
//     </div>
//   );
// };

// export default Auth;
