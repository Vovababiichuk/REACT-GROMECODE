import React, { useState, useEffect } from 'react';

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

  const styleStatus = isOnline ? '' : 'status status_offline'

  return (
    <div class={`'status ${styleStatus}`}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;

