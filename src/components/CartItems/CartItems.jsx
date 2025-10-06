import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../components/Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product';


function CartItems() {
    const {cartItem, addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className='container'>
      <div className="cartitems">
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
            all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return (
                      <div className="">
                        <div className="cartitem-format cartitem-format-main ">
                          <img
                            src={e.image}
                            className="carticon-product-icon"
                            alt=""
                          />
                          <p>{e.name}</p>
                          <p>${e.new_price}</p>
                          <button className="cartitems-quantity">
                            {cartItem[e.id]}
                          </button>
                          <p>{e.new_price * cartItem[e.id]}</p>
                          <img
                            src={remove_icon}
                            alt=""
                            onClick={() => {
                              removeFromCart(e.id);
                            }}
                          />
                        </div>
                        <hr />
                      </div>
                    );
                }
            })
        }
      </div>
    </div>
  );
}

export default CartItems
