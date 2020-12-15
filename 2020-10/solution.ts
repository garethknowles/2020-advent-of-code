import { handleInputs } from './inputHelpers'

export const findLongestChain = (diffs: number[], maxDifference = 3) => {
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] > maxDifference) {
      return diffs.slice(0, i)
    }
  }

  return diffs
}

export const getDifferences = (chain: number[]) =>
  chain.reduce((output, current, index, array) => {
    if (index > 0) {
      const prevValue = array[index - 1]
      const diff = current - prevValue
      output.push(diff)
    }
    return output
  }, [])

export const totalDifferences = (differences: number[]) =>
  differences.reduce((result, current) => (current === 1 ? { ...result, 1: result[1] + 1 } : { ...result, 3: result[3] + 1 }), { 1: 0, 3: 0 })

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data = await handleInputs({ fileName, input })
  data.push('0')
  const sortedInput = data.map((i) => Number(i)).sort((a, b) => a - b) //?
  const diffs = getDifferences(sortedInput) //?
  const filteredDiffs = findLongestChain(diffs) //?
  filteredDiffs.push(3)
  const differences = totalDifferences(filteredDiffs) //?
  return differences[1] * differences[3]
}
