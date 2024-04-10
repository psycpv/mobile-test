export function equalizeArrayLengths(arr1: number[], arr2: number[], fractionalMode = false): [number[], number[]] {
  while (arr1.length !== arr2.length) {
    if (arr1.length < arr2.length) {
      if (fractionalMode) {
        arr1.push(0)
      } else {
        arr1 = [0, ...arr1]
      }
    } else if (arr2.length < arr1.length) {
      if (fractionalMode) {
        arr2.push(0)
      } else {
        arr2 = [0, ...arr2]
      }
    }
  }

  return [arr1, arr2]
}
