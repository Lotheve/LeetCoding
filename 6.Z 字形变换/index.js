/* 将字符串转换成二维矩阵，空缺处用*代替，然后再遍历出结果，去掉* */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    numRows = Math.min(s.length, numRows);
    let matrix = [];
    for (let row = 0; row < numRows; row++) {
        matrix[row] = [];
        for (let colume = 0; colume < Math.ceil(s.length/numRows); colume++) {
            matrix[row][colume] = "*";
        }
    }
    let tag = 1;    //1 从上至下 0 从下至上
    let [x,y] = [0,0];
    for (let i = 0; i < s.length; i++) {
        let value = s[i];
        matrix[x][y] = value;
        if (tag == 1) {
            if (x == numRows - 1) {
                x--;
                y++;
                tag = 0;
            } else {
                x++;
            }
        } else {
            if (x == 0) {
                x++;
                tag = 1;
            } else {
                x--;
                y++;
            }
        }
    }
    var result = matrix.map(rowItems => rowItems.filter(x => x!=="*").reduce((pre,cur) => pre+cur)).reduce((pre,cur) => pre+cur);
    return result;
};

var result = convert("ABCDEFG", 3);
console.log(result);    //AEBDFCG