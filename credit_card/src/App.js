import React, { useState } from 'react';

import Form from './Components/Form/Form';
function App() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [success, setSuccess] = useState(false);

  return (
    <>
      <div className="form-container">
        <Form setCardName={setCardName}
          setCardNumber={setCardNumber}
          setMonth={setMonth} setYear={setYear}
          setCvc={setCvc}
          setSuccess={setSuccess}
        />
      </div>
    </>
  );
}
export default App;

