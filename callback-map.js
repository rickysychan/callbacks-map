var words = ["ground", "control", "to", "major", "tom"];

const l = map(words, function(word) {
  return word.length;
});

const u =  map(words, function(word) {
  return word.toUpperCase();
});

const r = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(array, fn) {
  let newArray = []
  // for (i = 0; i< array.length; i++){
    array.forEach(function(e){
    newArray.push(fn(e));
  })
  return newArray;
}

console.log(l)
console.log(u)
console.log(r)
