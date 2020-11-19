function findLongestWord(string = "") {
  // Write code under this line
  let arr = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
