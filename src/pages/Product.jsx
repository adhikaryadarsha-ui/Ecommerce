import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();

  const product = all_product.find((e) => e.id === Number(productID));

  if (!product) {
    return <h2>Product not found</h2>; // or a loader/spinner
  }

  return (
    <div>
      <Breadcrum product={product} />
      <div className="product">
        <ProductDisplay product={product} />
        <DescriptionBox />
      </div>
    </div>
  );
}


export default Product;
