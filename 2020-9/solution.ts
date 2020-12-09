import { handleInputs } from './inputHelpers'

const setThatSums = (data: number[], sumResult: number): number[] => {
  console.log(sumResult)
  for (let setSize = 2; setSize < data.length; setSize++) {
    for (let i = 0; i < data.length - setSize; i++) {
      const set = data.slice(i, i + setSize)
      const setTotal = set.reduce((prev, cur) => prev + cur, 0)
      if (setTotal === sumResult) {
        console.log(set)
        return set
      }
    }
  }
  return []
}

const findInvalidNumber = (data: number[], preambleSize: number) => {
  for (let i = preambleSize; i < data.length; i++) {
    const currentNumber = data[i]
    const previousNumbers = data.slice(i - preambleSize, i)

    let foundSum = false
    previousNumbers.forEach((a, ai) =>
      previousNumbers.forEach((b, bi) => {
        if (ai !== bi) {
          const sum = a + b
          if (sum === currentNumber) {
            foundSum = true
          }
        }
      }),
    )

    if (!foundSum) {
      return currentNumber
    }
  }
}

const findEncryptionWeakness = (data: number[], invalidNumber: number) => {
  ;[3, 21, 11].sort() //?
  ;[3, 21, 11].sort((a, b) => (a < b ? -1 : 1)) //?

  const set = setThatSums(data, invalidNumber).sort((a, b) => (a < b ? -1 : 1)) //?
  return set[0] + set.reverse()[0]
}

export const solution = async ({ fileName, input, preambleSize, solutionB = false }: { fileName?: string; input?: string[]; preambleSize?: number; solutionB?: boolean }) => {
  const data: string[] = await handleInputs({ fileName, input })

  const dataAsNumbers: number[] = data.map((d) => Number(d))
  const invalidNumber = findInvalidNumber(dataAsNumbers, preambleSize)
  if (!solutionB) {
    return invalidNumber
  }

  return findEncryptionWeakness(dataAsNumbers, invalidNumber)
}
