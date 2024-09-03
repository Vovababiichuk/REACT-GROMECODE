// import React, { useState, useEffect } from 'react';

// const ConnectionStatus = () => {
//   const [isOnline, setIsOnline] = useState(true);

//   useEffect(() => {
//     const handleConnectionChange = () => {
//       setIsOnline(window.navigator.onLine);
//     };

//     window.addEventListener('online', handleConnectionChange);
//     window.addEventListener('offline', handleConnectionChange);

//     return () => {
//       window.removeEventListener('online', handleConnectionChange);
//       window.removeEventListener('offline', handleConnectionChange);
//     };
//   }, []);


//   return (
//     <div class={isOnline ? 'status status_online' : 'status status_offline'}>
//       {isOnline ? 'online' : 'offline'}
//     </div>
//   );
// };

// export default ConnectionStatus;

import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleStatusOnline = () => {
      setIsOnline(true);
    };

    const handleStatusOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleStatusOnline);
    window.addEventListener("offline", handleStatusOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const addStatusClass = isOnline ? "" : "status_offline";

  return (
    <div className={`status ${addStatusClass}`}>
      {isOnline ? "online" : "offline"}
    </div>
  );
};

export default ConnectionStatus;