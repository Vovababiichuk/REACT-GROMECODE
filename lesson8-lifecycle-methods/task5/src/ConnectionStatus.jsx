import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={isOnline ? 'status' : 'status status_offline'}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
