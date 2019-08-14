//一开始使用递归找出所有符合条件word串然后求所有的index，运行时用例太大就超时了。（注释的代码）
//上一种思路完全忽视了题中给出的所有word长度相同的条件。换一种思路，因为word长度相同，因此可以知道符合条件的子串的长度是固定的。遍历s，返回符合条件的子串索引即可。关键是怎么判断子串是符合条件的。这里借助两个哈希map，map1是固定的，存放words中的所有元素，key为word值，value为对应word值的个数。按照word长度遍历子串，取出每个子子串，存入map2，判断map2中该子子串的值是否大于其在map1中的个数，或者在map1中是否存在，若大于或不存在，说明当前子串是不符合条件的。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// function findSubStr(s, words) {
//   let set = new Set();
//   if (words.length == 1) {
//     return words;
//   }
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     let remainWords = words.slice(0,i).concat(words.slice(i+1));
//     let fitWordStrs = findSubStr(s, remainWords);
//     for (const fitWord of fitWordStrs) {
//       if (s.indexOf(word+fitWord) > -1) {
//         set.add(word+fitWord);
//       }
//     }
//   }
//   return [...set];
// } 
// function findAllIndex(s, subStr) {
//   let result = [];
//   let posi = s.indexOf(subStr);
//   while (posi > -1) {
//     result.push(posi);
//     posi = s.indexOf(subStr, posi+1);
//   }
//   return result;
// }
// var findSubstring = function(s, words) {
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (s.indexOf(word) == -1) {
//       return [];
//     }
//   }
//   let result = [];
//   let fitStrs = findSubStr(s, words);
//   for (const fitStr of fitStrs) {
//     result = result.concat(findAllIndex(s, fitStr));
//   }
//   return result;
// };

var findSubstring = function(s, words) {
  if (s.length == 0 || words.length == 0) return [];
  let wordLength = words[0].length;
  let subLength = words.length*wordLength;
  if (subLength > s.length) return [];
  let result = [];
  let map1 = {};
  for (const word of words) {
    map1[word] ? map1[word]++ : map1[word] = 1;
  }
  for (let i = 0; i < s.length-subLength+1; i++) {
    let map2 = {}
    let fit = true;
    for (let posi = i; posi < i+(subLength-wordLength+1); posi+=wordLength) {
      let curWord = s.slice(posi, posi+wordLength);
      map2[curWord] ? map2[curWord]++ : map2[curWord] = 1;
      if (!(curWord in map1) || map2[curWord] > map1[curWord]) {
        fit = false;
        break;
      }
    }
    if (fit) {
      result.push(i);
    }
  }
  return result;
};

let result = findSubstring("barfoothefoobarman", ["foo","bar"]);
console.log(result);  //[ 0, 9 ]