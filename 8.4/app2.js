const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
const countLetters = (arrParam) => {
  const resObj = {};
  let counter = 0;
  let higherLetter = null;

const arr = arrParam.join('').split(' ').join('').toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (letter !== ' ' && letter !== ',') {
      if (!resObj[letter]) {
        resObj[letter] = 1;
      } else {
        resObj[letter]++;
      }
      if (resObj[letter] > counter) {
        counter = resObj[letter];
        higherLetter = letter;
      }
    }
  }
  
  console.log(higherLetter);
  return resObj;
};
console.log(countLetters(array));