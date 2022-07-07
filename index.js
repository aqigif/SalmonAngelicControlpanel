const theArr1 = [1, 2, 0, 4, 3, 0, 5, 0];
const theArr2 = [1, 0, 8, 3, 2, 4, 3, 5, 0, 0, 0];
const theArr3 = [1, 0, 0, 8, 0, 3, 65, 2, 4, 3, 5, 0, 0, 0]

function sortArr(arr) {
  let nonZeroArr = [];
  let zeroArr = [];
  arr.map((item) => {
    if (item > 0) {
      nonZeroArr.push(item)
    } else {
      zeroArr.push(item)
    }
  })
  return JSON.stringify([...nonZeroArr, ...zeroArr]);
}

console.log(sortArr(theArr1))
console.log(sortArr(theArr2))
console.log(sortArr(theArr3))

module.exports = sortArr;