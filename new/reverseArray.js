
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = [];
function towelSort (matrix){
for (let i = 0; i < matrix.length; i++) {
  if (i % 2 === 1) {
    result.push(...matrix[i].reverse());
  } else {
    result.push(...matrix[i]);
  }
}
return result
}
console.log(towelSort(matrix));