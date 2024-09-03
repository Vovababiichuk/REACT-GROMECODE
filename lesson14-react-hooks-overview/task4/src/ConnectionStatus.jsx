import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleConnectionChange = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, []);

  return (
    <div className={clsx('status', { 'status_offline': !isOnline })}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;

