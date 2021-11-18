/** @format */

const wordSearch = (letters, word) => {
    let transposedArray = transpose(letters);
	const horizontalJoin = letters.map((ls) => ls.join(""));
	const verticalJoin = transposedArray.map((ls) => ls.join(""));

    for (let h = 0; h < horizontalJoin.length; h++) {
        if (horizontalJoin[h].includes(word)) {
            return true;
        // } else if (!horizontalJoin[h].includes(word)){
        //     return false;
        }
    }

    for (let v = 0; v < verticalJoin.length; v++) {
        if (verticalJoin[v].includes(word)) {
            return true;
        // } else if (!verticalJoin[v].includes(word)){
        //     return false;
        }
    }
};

const transpose = function (matrix) {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		newMatrix.push([]);
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix.length === 1) {
				newMatrix[i].push([matrix[i][j]]);
				console.log(matrix[i][j]);
			} else {
				newMatrix[j].push(matrix[i][j]);
			}
		}
	}
	return newMatrix;
};

module.exports = wordSearch;
