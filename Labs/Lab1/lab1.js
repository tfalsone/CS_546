const questionOne = function questionOne(arr) {
    let ans = 0;
    arr.forEach((value) => {
        ans = ans + (value * value);
    })
    return ans;
}

const questionTwo = function questionTwo(num) { 
    // Fibinocci
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return questionTwo(num-1) + questionTwo(num-2);
    }
}

const questionThree = function questionThree(text) {
    let countVow = 0;
    let arr = text.split("");
    arr.forEach((letter) => {
        if (letter == "a" || letter == "A") {
            countVow ++;
        } else if (letter == "e" || letter == "E") {
            countVow ++;
        } else if (letter == "i" || letter == "I") {
            countVow ++;
        } else if (letter == "o" || letter == "O") {
            countVow ++;
        } else if (letter == "u" || letter == "U") {
            countVow ++;
        }
    })
    return countVow;
}

const questionFour = function questionFour(num) {
    if (num < 0) {
        return NaN;
    } else if (num == 0) {
        return 1;
    } else {
        return num * questionFour(num-1);
    }
}

module.exports = {
    firstName: "Thomas", 
    lastName: "Falsone", 
    studentId: "10398883",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};