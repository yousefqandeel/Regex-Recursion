//{RECURSION}
// **(Q1)
function division(number, dividedBy) {
    if (number >= dividedBy && number > 0 && dividedBy > 0) {
        return 1 + division(number - dividedBy, dividedBy);
    }
    else {
        return 0;
    }
};

// **(Q2)

function pow(x, y) {
    if (y > 1) {
        return x * pow(x, y - 1);
    }
    else if (y == 0) {
        return 1;
    }
    else {
        return x;
    }
};

// **(Q3)

function fibonacci(n) {
    if (n < 2) {
        return n;

    } else {

        return fibonacci(n - 1) + fibonacci(n - 2);
    }


};
