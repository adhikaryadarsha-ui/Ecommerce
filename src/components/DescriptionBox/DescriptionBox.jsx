import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='container'>
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam libero odio tenetur ipsum fugit, quam veritatis nemo exercitationem saepe. Eligendi aliquid dolorum deleniti beatae dolor vitae quas quasi fuga neque?</p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quia nisi fugit quibusdam doloribus cum dicta provident non. Illum neque quaerat quo nostrum est deleniti aliquam quod. Ratione, necessitatibus quod?
            </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox
