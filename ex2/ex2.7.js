

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        case '%': return value1 % value2;
        default: return undefined;
    }
}

console.log(basicOp('+', 1, 2));
