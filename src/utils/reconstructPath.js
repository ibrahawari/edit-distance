import createMatrix from "./createMatrix";

export function reconstructPath(matrix) {
  let o = matrix.length;
  let p = matrix[0].length;
  const recordings = createMatrix(o, p);

  let i = o - 1;
  let j = p - 1;
  return reconstructPathAlgorithm(i, j, matrix, recordings);
}

/**
 * https://stackoverflow.com/questions/10638597/minimum-edit-distance-reconstruction
 * @param {*} i
 * @param {*} j
 * @param {*} matrix
 * @param {*} recordings
 */
function reconstructPathAlgorithm(i, j, matrix, recordings) {
  let iPrev = i - 1;
  let jPrev = j - 1;
  if (iPrev < 0 || jPrev < 0) {
    if (iPrev < 0 && jPrev < 0) {
      return recordings;
    }
    if (jPrev < 0) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(iPrev, j, matrix, recordings); // move up
    }
    if (iPrev < 0) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(i, jPrev, matrix, recordings); // move left
    }
  } else {
    let prevValue = matrix[iPrev][jPrev];
    if (prevValue === matrix[i][j]) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(iPrev, jPrev, matrix, recordings); // move di
    }
    let leftValue = matrix[i][jPrev];
    let upValue = matrix[iPrev][j];

    let min = Math.min(upValue, leftValue, prevValue);
    if (min === upValue) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(iPrev, j, matrix, recordings); // move up
    }
    if (min === leftValue) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(i, jPrev, matrix, recordings); // move left
    }
    if (min === prevValue) {
      recordings[i][j] = 1;
      return reconstructPathAlgorithm(iPrev, jPrev, matrix, recordings); // move di
    }
  }
}
