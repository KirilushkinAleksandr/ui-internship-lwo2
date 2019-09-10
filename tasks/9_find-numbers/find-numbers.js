function getNumbers(str){
    const regex = '/\d+/g';
    return str.match(regex);
}

export {getNumbers};