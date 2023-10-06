import React, { useState } from 'react';
import CreditCard from './Components/CreditCard/Credit.js'
import bgImage from './assets/bgImage.png'
import Form from './Components/Form/Form.js'
import ThankYou from './Components/Thankyou/Thankyou.js'
import './App.css';
function App() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [success, setSuccess] = useState(false);

  return (
    <>
      <div className="bg-image">
        <img src={bgImage} alt='background_image' />
      </div>
      <div className="card-form-container">
        <div className="card-container">
          <CreditCard {...{ cardName, cardNumber, month, year, cvc }} />
        </div>
        {
          success ?
            <div className='success'>
              <ThankYou setSuccess={setSuccess} setCardName={setCardName} setCardNumber={setCardNumber} setCvc={setCvc} setMonth={setMonth} setYear={setYear} />
            </div>
            :
            <div className="form-container">
              <Form setCardName={setCardName}
                setCardNumber={setCardNumber}
                setMonth={setMonth} setYear={setYear}
                setCvc={setCvc}
                setSuccess={setSuccess}
              />
            </div>
        }
      </div>
    </>
  );
}
export default App;

