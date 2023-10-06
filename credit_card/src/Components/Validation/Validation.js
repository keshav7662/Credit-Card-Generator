const validation = (cardDetails) => {
    let error = {};
    if (cardDetails.cardName === "") {
        error.cardName = "*Card name is required!";
    }
    if (cardDetails.cardNumber === "") {
        error.cardNumber = "*Card number is required!";
    } else if (cardDetails.cardNumber.length <= 16) {
        error.cardNumber = "*Card lenght should be of 16 digit"
    }
    if (cardDetails.month === "") {
        error.month = "*month is required!";
    } else if (Number(cardDetails.month.slice(0, 2)) > 12) {
        error.month = "*month should be less than or equal to 12!"
    }
    if (cardDetails.year === "") {
        error.year = "*year is required!";
    }
    if (cardDetails.cvc === "") {
        error.cvc = "*cvc should not be empty!";
    }

    return error
}

export default validation