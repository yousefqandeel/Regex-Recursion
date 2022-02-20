//{REGEX}

// **(Q1)
function capitalA(s) {
    let result = s;
    let regex = /^[ A-Za-z].*A$/;
    if (regex.test(result) == true) {
        console.log("true");
    }
    else {
        console.log("fales");
    }

};


// **(Q2)
function ioEmail(email) {
    let valid = /\example@example\.io/;
    let string = email;
    if (email == "example@example.io") {
        console.log("true");
    }
    else {
        console.log("False")
    }
};

//(Q3)

function imagesSearcher(text) {
    let string = text;
    let valid = /\w\w\w.(jpg|jpeg|png)/g;
    let result = string.match(valid)
    console.log(result);
}