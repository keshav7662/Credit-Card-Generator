import React, { useEffect, useState } from "react";
import "./form.css";
import validation from "../Validation/Validation";

const Form = ({
  setCardName,
  setCardNumber,
  setMonth,
  setYear,
  setCvc,
  setSuccess,
}) => {
  const data = { cardName: "", cardNumber: "", month: "", year: "", cvc: "" };
  const [cardDetails, setCardDetails] = useState(data);
  const [errors, setErrors] = useState({});
  const [isInitiallySubmitted, setIsInitiallySubmitted] = useState(false);

  let name, value;

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "cardName") {
      const formattedValue = value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      value = formattedValue;
    } else {
      const cleanedValue = value.replace(/\D/g, "");
      const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ");
      value = formattedValue.slice(0, 19);
    }
    setCardDetails({ ...cardDetails, [name]: value });
  };

  function confirmHandler() {
    if (Object.keys(errors).length === 0) {
      setCardName(cardDetails.cardName);
      setCardNumber(cardDetails.cardNumber);
      setMonth(cardDetails.month);
      setYear(cardDetails.year);
      setCvc(cardDetails.cvc);
      setIsInitiallySubmitted(true);
    } else {
      console.log(errors);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const validationErrors = validation(cardDetails);
    setErrors(validationErrors);

    if (!isInitiallySubmitted) {
      setIsInitiallySubmitted(true);
    }
  }

  useEffect(() => {
    if (isInitiallySubmitted) {
      if (Object.keys(errors).length === 0) {
        setSuccess(true);
        confirmHandler()
      }
    }
  }, [isInitiallySubmitted, errors, setSuccess]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="cardholder_name">Cardholder Name</label>
          <input
            type="text"
            name="cardName"
            id="cardholder_name"
            placeholder="e.g. Jane Appleseed"
            className="placeholder-text"
            onChange={inputHandler}
          />
          {errors.cardName && <p className="error-message">{errors.cardName}</p>}
        </div>

        <div>
          <label htmlFor="card_number">Card Number</label>
          <input
            type="text"
            maxLength={19}
            name="cardNumber"
            id="card_number"
            placeholder="e.g. 1234 5678 9012 3456"
            className="placeholder-text"
            onChange={inputHandler}
            value={cardDetails.cardNumber}
          />
          {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
        </div>

        <div className="expiry-cvc">
          <div className="expiry-date">
            <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
            <div className="month-year">
              <div>
                <input
                  type="number"
                  name="month"
                  id="expiry_date"
                  placeholder="MM"
                  className="placeholder-text"
                  onChange={inputHandler}
                  value={cardDetails.month.slice(0, 2)}

                />
                {errors.month && <p className="error-message">{errors.month}</p>}
              </div>
              <div>
                <input
                  type="number"
                  name="year"
                  id="expiry_date"
                  placeholder="YY"
                  className="placeholder-text"
                  onChange={inputHandler}
                  value={cardDetails.year.slice(0, 4)}
                />
                {errors.year && <p className="error-message">{errors.year}</p>}
              </div>
            </div>
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              maxLength={3}
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              className="placeholder-text"
              onChange={inputHandler}
              value={cardDetails.cvc.slice(0, 3)}
            />
            {errors.cvc && <p className="error-message">{errors.cvc}</p>}
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Confirm
        </button>
      </form>
    </>
  );
};

export default Form;
