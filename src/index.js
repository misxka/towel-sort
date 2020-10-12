// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length) {
        const rows = matrix.length;
        let newArray = [];
        let counter = 0;
        for (let i = 0; i < rows; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    newArray[counter] = matrix[i][j];
                    counter++;
                }
            } else {
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    newArray[counter] = matrix[i][j];
                    counter++;
                }
            }
        }
        return newArray;
    } else {
      return [];
    }
}
