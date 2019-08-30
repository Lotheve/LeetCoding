/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function getNext(v) {
      let next = '';
      if (!v) {
        next = "1";
      } else {
        let map = {};
        for (let index = v.length-1; index >= 0; index--) {
          if (map[v[index]]) {
            map[v[index]]++;
          } else {
            if (map[v[index+1]]) {
              next = map[v[index+1]] + v[index+1] + next;
              delete map[v[index+1]];
            }
            map[v[index]] = 1;
          }
        }
        if (map[v[0]]) {
          next = map[v[0]] + v[0] + next;
        }
      }
      return next;
    }
      
    let v = '';
    for (let index = 0; index < n; index++) {
      v = getNext(v);
    }
    return v;
};

let result = countAndSay(6);
console.log(result);  //312211