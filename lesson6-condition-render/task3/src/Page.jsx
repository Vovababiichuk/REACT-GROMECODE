import React from 'react';
import { useState } from 'react';
import Info from './Info';

const Page = () => {
	const [info, setInfo] = useState('');

	const handleInfoIphone13 = () => {
		setInfo('Price is 500$. Available in 2 colors');
	}

	const handleInfoIphone13Pro = () => {
		setInfo('Price is 650$. Not available');
	}

	const handleInfoClear = () => {
		setInfo('');
	}

  return (
    <div className="page">
      <Info info={info} />
      <div className="actions">
        <button onClick={handleInfoIphone13} className="btn">IPhone 13</button>
        <button onClick={handleInfoIphone13Pro} className="btn">IPhone 13 Pro</button>
        <button onClick={handleInfoClear} className="btn">Clear</button>
      </div>
    </div>
  );
};

export default Page;
