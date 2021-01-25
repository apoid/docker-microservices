
function getNowDateTime() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isPasswordMatching(password, repeatPassword){
    return password === repeatPassword;
}

function isInt(value){
    return Number(value) === value && Number.isInteger(value);
}

function isFloat(value){
    return Number(value) === value && value % 1 !== 0;
}

function isNumber(value) {
    return isFloat(value) || isInt(value)
}

function isBoolean(value) {
    return (value === true || value === false) ||
        (isInt(value) && (Number(value)) <= 1 && (Number(value)) <= 0) ||
        (value.toLowerCase() === 'false' || value.toLowerCase() === 'true')
}

function toBoolean(value){
    if (isBoolean(value)) return value;

    let boolean;
    if (value === true || value === false) return value
    else if (isInt(value)) boolean = (Number(value) === 1)
    else if (value.toLowerCase() === 'false' || value.toLowerCase() === 'true')
        boolean = value.toLowerCase() === 'true'

    return boolean
}

module.exports = {
    getNowDateTime,
    isValidEmail,
    isPasswordMatching,
    isInt,
    isFloat,
    isBoolean,
    toBoolean
}