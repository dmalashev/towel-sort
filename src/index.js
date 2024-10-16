
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let elem of matrix[i]) {
        result.push(elem);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}
