/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = "";
    let string = str.trim();
    if (!string) return 0;
    let firstC = string[0];
    if ((firstC.charCodeAt() >= 48 && firstC.charCodeAt() <= 57) || firstC == "+" || firstC == "-") {
        if (firstC == "+") {
            string = string.slice(1);
        } else if (firstC == "-") {
            result += "-";
            string = string.slice(1);
        }
        for (const c of string) {

            if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57) {
                result += c;
            } else break;
        }
    } else return 0;

    if (result == "-") return 0;
    let num = Number(result);
    if (num > Math.pow(2,31) - 1) return Math.pow(2,31) - 1;
    if (num < -Math.pow(2,31)) return -Math.pow(2,31);
    return num;
};

console.log(myAtoi("  +1231.23"));