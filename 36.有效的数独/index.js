//一次遍历 借助3个map

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = [{},{},{},{},{},{},{},{},{}];
    let columMap = [{},{},{},{},{},{},{},{},{}];
    let boxMap = [{},{},{},{},{},{},{},{},{}];
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      let rowBoard = board[rowIndex];
      for (let columIndex = 0; columIndex < rowBoard.length; columIndex++) {
        const value = rowBoard[columIndex];
        if (value !== '.') {
          if (rowMap[rowIndex][value] !== undefined || columMap[columIndex][value] !== undefined || boxMap[(Math.floor(rowIndex/3))*3+Math.floor(columIndex/3)][value] !== undefined) {
            return false;
          } else {
            rowMap[rowIndex][value] = "1";
            columMap[columIndex][value] = "1";
            boxMap[Math.floor(rowIndex/3)*3+Math.floor(columIndex/3)][value] = "1";
          }
        }
      }      
    }
    return true;
};

let a = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
let result = isValidSudoku(a);
console.log(result);  //true