function factorialize(num){
    let result = 1;
    for (let index = 2; index <= num; index++) {
        result *= index;
    }
    return result;
};

export {factorialize};