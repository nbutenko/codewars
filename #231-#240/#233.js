const validatePIN  = pin => {
    if(pin.length !== 4 && pin.length !== 6) return false;
    return pin.replace(/\D/g, '') === pin;
}