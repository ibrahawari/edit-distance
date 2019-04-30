/**
 * Calculate the Levenshtein Distance using the Wagner-Fischer algorithm
 * For more info: // https://en.wikipedia.org/wiki/Wagner–Fischer_algorithm
 * @param {*} s 
 * @param {*} t 
 */
export function editDistanceMatrix(s, t) {
  const m = s.length;
  const n = t.length;
  const o = m + 1;
  const p = n + 1;
  // For all i and j, d[i,j] will hold the Levenshtein distance between
  // the first i characters of s and the first j characters of t.
  // Note that d has (m+1) x (n+1) values.
  const d = createMatrix(o, p);

  // the distance of any first string to an empty second string
  // (transforming the string of the first i characters of s into
  // the empty string requires i deletions)
  for (let i = 0; i < o; i++) {
    d[i][0] = i;
  }

  // the distance of any second string to an empty first string
  for (let j = 0; j < p; j++) {
    d[0][j] = j;
  }

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      const l = j + 1;
      const k = i + 1;
      if (s.charAt(i) === t.charAt(j)) {
        d[k][l] = d[k - 1][l - 1]; // noop
      } else {
        d[k][l] = Math.min(
          d[k - 1][l] + 1, // deletion
          d[k][l - 1] + 1, // insertion
          d[k - 1][l - 1] + 1 // substitution
        );
      }
    }
  }
  return d;
}

function createMatrix(o, p) {
  const result = new Array(o);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(p);
  }
  return result;
}
