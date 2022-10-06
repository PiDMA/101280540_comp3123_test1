const lowerCaseWords = function(arr) {
  return new Promise(function(resolve, reject) {
    let result = arr.filter(function(item) {
      return typeof item === "string";
    }).map(function(item) {
      return item.toLowerCase();
    });
    resolve(result);
  });
}

let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray));