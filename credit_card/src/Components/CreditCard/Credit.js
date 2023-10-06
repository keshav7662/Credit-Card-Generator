import React from 'react'
import frontImage from '../../assets/compImages/frontCard.png'
import backImage from '../../assets/compImages/backCard.jpg'
import logo1 from '../../assets/compImages/Ellipse 1.svg'
import logo2 from '../../assets/compImages/Ellipse 2.svg'
import './credit.css';

export default function CreditCard(props) {
  return (
    <>
      <div className="cards">
        <div className='card front-card'>
          <img src={frontImage} alt="front" />
          <div className="card-details">
            <div className="logo">
              <span className='ellipse1'><img src={logo1} alt="" /></span>
              <span className='ellipse2'><img src={logo2} alt="" /></span>
            </div>
            <div className='card-number'>
              <span>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</span>
            </div>
            <div className="info">
              <span className="cardholder-name">{props.cardName ? props.cardName : 'Jane Appleseed'}</span>
              <span className="exp-date">{props.month ? props.month.length > 2 ? props.month.substring(0, 2) : props.month : '00'}/{props.year ? props.year.length > 2 ? props.year.substring(2, 4) : props.year : '00'}</span>
            </div>
          </div>
        </div>
        <div className="card back-card">
          <img src={backImage} alt="back" />
          <div className='cvv-number'><span>{props.cvc ? props.cvc.length > 3 ? props.cvc.substring(0, 3) : props.cvc : '000'}</span></div>
        </div>
      </div>

    </>
  )
}

