module.exports = function toReadable(number) {
    let numberObject = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }

    let numberString = String(number);

    function getDozens(numberString) {
        if (+numberString <= 19 || numberString[1] === '0') {
            return numberObject[+numberString];
        } else {
            let firstPart = numberObject[numberString[0] + '0'];
            let secondPart = numberObject[numberString[1]]
            return `${firstPart} ${secondPart}`
        }
    }

    function getHundreds() {
        if (numberString[1] === '0' && numberString[2] === '0') {
            return `${numberObject[numberString[0]]} hundred`;
        } else if(numberString[2] === '0'){
            return `${numberObject[numberString[0]]} hundred ${numberObject[numberString.slice(1)]}`
        } else {
            return `${numberObject[numberString[0]]} hundred ${getDozens(numberString.slice(1))}`
        }
    }

    switch (numberString.length) {
        case 1:
            return numberObject[number];
        case 2:
            return getDozens(numberString);
        case 3:
            return getHundreds();
    }
}
