/**
 * @param {number} num
 * @return {string}
 */

// 递归

const map = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M',
    4:'IV',
    9:'IX',
    40:'XL',
    90:'XC',
    400:'CD',
    900:'CM'
}

var intToRoman = function(num) {
    if (num in map) {
        return map[num];
    }
    let temp = num;
    let div = 10;
    while (temp % div === 0) {
        div *= 10;
    }
    let mutiple = Math.floor(div/10);
    let quotient = temp/mutiple;  
    if (quotient < 10) {
        if (quotient < 4) {
            let result = '';
            for (let i = 0; i < quotient; i++) {
                const v = map[mutiple];
                result += v;
            }
            return result;
        } else if (quotient === 4 || quotient === 5 || quotient === 9) {
            return map[quotient*mutiple];
        } else {
            return intToRoman(5*mutiple) + intToRoman((quotient-5)*mutiple);
        } 
    } else {
        return intToRoman(Math.floor(quotient/10)*mutiple*10) + intToRoman(quotient%10*mutiple);
    }
};

console.log(intToRoman(1994));  //MCMXCIV