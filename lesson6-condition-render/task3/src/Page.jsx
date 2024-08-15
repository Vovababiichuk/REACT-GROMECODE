import React from 'react';
import { useState } from 'react';
import Info from './Info';

const texts = {
  iPhone13: 'Price is 500$. Available in 2 colors',
  iPhone13Pro: 'Price is 650$. Not available',
};

const Page = () => {
	const [info, setInfo] = useState('');

  return (
    <div className="page">
      <Info info={info} />
      <div className="actions">
        <button onClick={() => setInfo(texts.iPhone13)} className="btn">IPhone 13</button>
        <button onClick={() => setInfo(texts.iPhone13Pro)} className="btn">IPhone 13 Pro</button>
        <button onClick={() => setInfo('')} className="btn">Clear</button>
      </div>
    </div>
  );
};

export default Page;
