const sumValue = 2020

const toNumbers = (input: string[]) => input.map((i) => Number(i))

const findValue = (array: number[], size: number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (size === 2 && array[i] + array[j] === sumValue) {
        return array[i] * array[j]
      } else if (size === 3) {
        for (let k = i + 1; k < array.length; k++) {
          if (array[i] + array[j] + array[k] === sumValue) {
            return array[i] * array[j] * array[k]
          }
        }
      }
    }
  }
  return undefined
}

export const solution = async (input: string[], size: number) => {
  const values = toNumbers(input)
  const result = findValue(values, size)

  if (!result) {
    return undefined
  }
  // const result = resultGroup[0] * resultGroup[1] * resultGroup[2]
  return String(result)
}
