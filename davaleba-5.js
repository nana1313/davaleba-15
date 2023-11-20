let numbers = [4, 15, 38, 49, 64, 90, 108, 137];
 
const evenNumbers = numbers.filter(function(element) {
      return element % 2 === 0;
});
console.log(`Even numbers in an array are: ${evenNumbers}`);