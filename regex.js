//{REGEX}

// **(Q1)
function capitalA(s) {
    let t = true;
    let f = false;
    let result = s;
    let regex = /^[ A-Za-z].*A$/;
    if (regex.test(result) == true) {
        return t;
    }
    else {
        return f;
    }

};


// **(Q2)
function ioEmail(email) {
    let t = true;
    let f = false;
    let valid = /\example@example\.io/;
    let string = email;
    if (email == "example@example.io") {
        return t;
    }
    else {
        return f;
    }
};

//(Q3)

function imagesSearcher(text) {
    let string = text;
    let valid = /\w\w\w.(jpg|jpeg|png)/g;
    let result = string.match(valid)
    return result;
}