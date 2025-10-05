import React from 'react'
import './Popular.css'
import data_product from "../../components/Assets/data";
import Item from '../../components/Items/Item';

function Popular() {

  console.log(data_product);
  return (
    <div className='container'>
      <div className="popular">
        <h2>POPULAR IN WOMEN</h2>
        <hr />
        <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Popular
