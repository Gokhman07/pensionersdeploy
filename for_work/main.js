function isAN(value) {
    return (value instanceof Number||typeof value === 'number') && !isNaN(value) && value!='';
}

console.info(isAN(1));
console.info(isAN(new Number(1)));
console.info(isAN(null));
console.info(isAN(+"1"));
console.info(isAN(true));