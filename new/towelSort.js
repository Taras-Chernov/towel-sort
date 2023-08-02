
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = [];
const array = []
function towelSort (matrix){
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      array.push(...matrix[i].reverse());
    } else {
      array.push(...matrix[i]);
    }
  }
  return result.concat(array)
}


console.log(towelSort(matrix))