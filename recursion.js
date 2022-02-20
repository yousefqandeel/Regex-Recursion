//{RECURSION}
// **(Q1)
function division(number, dividedBy) {
    if (number == 0)
        return 0;
    if (dividedBy == 0)
        return Number.MAX_VALUE;;
    let negResult = false;
    if (number < 0) {
        number = -number;
        if (dividedBy < 0)
            dividedBy = -dividedBy;
        else
            negResult = true;
    }
    else if (dividedBy < 0) {
        dividedBy = -dividedBy;
        negResult = true;
    }
    let quotient = 0;
    while (number >= dividedBy) {
        number = number - dividedBy;
        quotient++;
    }
    if (negResult)
        quotient = -quotient;
    return quotient;
};

// **(Q2)

function pow(x, n) {
    if (x > 0 && n === 0) {
        return 1;
    }
    x = x;
    while (n > 1) {
        x = x * x;
        n--;
    }
    return x;
};


// **(Q3)

function fibonacci(n) {

    if (n === 1) {
        return [0, 1];
    }
    else {
        let s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }

};