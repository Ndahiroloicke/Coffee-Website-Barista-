import React from 'react'

const Heading = () => {
  const item = 0;
  return (
    <div className='heading'>
        <div className='customer'>
        <li><i className='bx bx-headphone' ></i></li>
        <div>
        <p>Customer Support</p>
        <p>123-456-7890</p>
        </div>
        </div>
        <h1>BARISTAS</h1>
        <div className='cart'>
            <li><i className='bx bx-user'></i></li>
            <li><i className='bx bx-cart'></i></li>
            <p>Shopping Cart</p> <br />
            <p>({item} items)</p>
        </div>
    </div>
  )
}

export default Heading