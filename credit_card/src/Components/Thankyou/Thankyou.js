import React from 'react'
import completeIcon from '../../assets/compImages/icon-complete.svg'
import './thankyou.css'
const thankyou = ({ setSuccess, setCardName, setCardNumber, setCvc, setMonth, setYear }) => {
  return (
    <>
      <div className='success'>
        <img src={completeIcon} alt="" />
        <p>Success</p>
        <span>Card details added!</span>
        <button onClick={() => {
          setSuccess(false)
          setCardName('')
          setCardNumber('')
          setCvc('')
          setMonth('')
          setYear('')
        }}>Continue</button>
      </div>

    </>

  )
}

export default thankyou
