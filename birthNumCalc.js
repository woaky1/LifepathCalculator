var monthString;
var monthFirstDigit;
var monthSecondDigit;
var monthInteger;
var dayString;
var dayInteger;
var dayFirstDigit;
var daySecondDigit;
var yearString;
var yearInteger;
var yearFirstDigit;
var yearSecondDigit;
var yearThirdDigit;
var yearFourthDigit;

monthString = process.argv[2];
monthInteger = +process.argv[2];
if (monthInteger <= 12) {
    if (monthInteger < 10) {
        monthFirstDigit = monthInteger;
        monthSecondDigit = 0;
    } else {
        monthFirstDigit = 1;
        monthSecondDigit = +monthString.substr(1,1);
    }
} else {
    console.log("Invalid date");
}

dayString = process.argv[3];
dayInteger = +process.argv[3];

if (dayInteger <= 31) {
    switch (true) {
        case (dayInteger < 10):
            dayFirstDigit = dayInteger;
            daySecondDigit = 0;
            break;
        case (10 <= dayInteger && dayInteger < 20):
            dayFirstDigit = 1;
            daySecondDigit = +dayString.substr(1,1);
            break;
        case (20 <= dayInteger && dayInteger < 30):
            dayFirstDigit = 2;
            daySecondDigit = +dayString.substr(1,1);
            break;
        case (30 <= dayInteger):
            dayFirstDigit = 3;
            daySecondDigit = +dayString.substr(1,1);
            break;
        default:
            console.log("Invalid date");
            break;
    }
}

yearString = process.argv[4];
yearFirstDigit = +yearString.substr(0,1);
yearSecondDigit = +yearString.substr(1,1);
yearThirdDigit = +yearString.substr(2,1);
yearFourthDigit = +yearString.substr(3,1);

var firstSum = monthFirstDigit + monthSecondDigit + dayFirstDigit + daySecondDigit + yearFirstDigit + yearSecondDigit + yearThirdDigit + yearFourthDigit;

if (firstSum < 10) {
    console.log("Your life path is " + firstSum + ".")
} else {
    firstSumString = firstSum.toString();
    var firstSumFirstInteger = +firstSumString.substr(0,1);
    var firstSumSecondInteger = +firstSumString.substr(1,1);
    var secondSum = firstSumFirstInteger + firstSumSecondInteger;
    console.log("Your life path is " + firstSum + "/" + secondSum);
}