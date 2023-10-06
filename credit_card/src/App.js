import React, { useState } from 'react';
import CreditCard from './Components/CreditCard/Credit.js'
import Form from './Components/Form/Form.js'
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

      <div className="card-form-container">
        <div className="card-container">
          <CreditCard {...{ cardName, cardNumber, month, year, cvc }} />
        </div>
        <div className="form-container">
          <Form setCardName={setCardName}
            setCardNumber={setCardNumber}
            setMonth={setMonth} setYear={setYear}
            setCvc={setCvc}
            setSuccess={setSuccess}
          />
        </div>
      </div>
    </>
  );
}
export default App;

