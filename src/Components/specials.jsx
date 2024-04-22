import React from 'react'

const Specials = () => {
  return (
    <div className='specials'>
        <div className='dom'>
            <li><i class='bx bxs-plane-alt'></i></li>
          <div><h3>FREE SHIPPING WORLDWIDE</h3>
            <p>On order over $150</p></div>
        </div>
        <div className='dom'>
            <li><i class='bx bxs-wallet-alt'></i></li>
           <div> <h3>CASH ON DELIVERY</h3>
            <p>100% money back guarantee</p></div>
        </div>
        <div className='dom'>
            <li><i class='bx bxs-gift'></i></li>
            <div><h3>SPECIAL GIFT CARD</h3>
            <p>Offer special bonuses with gift</p></div>
        </div>
        <div className='dom'>
            <li><i className='bx bx-headphone' ></i></li>
            <div><h3>24/7 CUSTOMER SERVICE</h3>
            <p>Call us 24/7 at 123-456-789</p></div>
        </div>
    </div>
  )
}

export default Specials