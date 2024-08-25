import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, stocked } = product;
  const nameProdStock = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;

  return (
    <tr>
      <td>{nameProdStock}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
