import React from 'react'
import './Breadcrum.css'
import breadcrum_arrow from "../Assets/breadcrum_arrow.png";

function Breadcrum({ product }) {
  if (!product) return null;

  return (
    <div className="container">
      <div className="breadcrum" aria-label="breadcrumb">
        HOME <img src={breadcrum_arrow} alt="arrow" />
        {product.category}
        <img src={breadcrum_arrow} alt="arrow" />
        {product.name}
      </div>
    </div>
  );
}


export default Breadcrum
