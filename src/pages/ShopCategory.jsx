import React, { useContext } from 'react'
import '../pages/Css/ShopCategory.css'
import { shopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Items/Item'

function ShopCategory(props) {
  const {all_product} =useContext(shopContext);

  return (
    <div>
      <div className="shop-category">
        <img
          src={props.banner}
          alt="baneer image"
          className="shopcategory-banner"
        />
        <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1 - 12</span> Out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} />
          </div>
        </div>

        <div className="shopcategory-product">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  );
}

export default ShopCategory
