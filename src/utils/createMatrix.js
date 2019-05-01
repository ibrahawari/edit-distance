export default function createMatrix(o, p) {
  const result = new Array(o);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(p);
  }
  return result;
}
