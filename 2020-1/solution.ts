import { exit } from 'process'

const sumValue = 2020

const toNumbers = (input: string[]) => input.map((i) => Number(i))

const createPairs = (a: number[], b: number[]) => {
  return a.map((aElement) => b.map((beElement) => [aElement, beElement])).reduce((acc, val) => acc.concat(val), [])
}

const findResult = (pairs: number[][]) => pairs.find(([i, j]) => i + j === sumValue)

export const solution = async (input: string[]) => {
  const values = toNumbers(input)
  const pairs = createPairs(values, values.slice(1))
  const resultPair = findResult(pairs)

  if (resultPair?.length !== 2) {
    return undefined
  }

  const result = resultPair[0] * resultPair[1]
  return String(result)
}
