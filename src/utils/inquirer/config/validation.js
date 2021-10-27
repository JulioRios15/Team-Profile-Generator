import emailValidator from 'email-validator';

const validateNotEmpty = async (input) => {
    const isEmpty = (input === "")? true : false;
    const message = "Value cant be empty";

    return (isEmpty == false)? true : message;
}

const validateEmail = async (input) => {
    const message = "Please enter a valid email address"
    const valid = emailValidator.validate(input);

    return (valid == true)? true : message; 
}


export default {
    validateNotEmpty,
    validateEmail
}