import { handleInputs } from './inputHelpers'

const totalForGroup = (solutionB = false) => (input: string): number => {
  const allChars = input.replace(/\s/g, '').split('')
  const charCounts = allChars.reduce((counts, newChar) => {
    if (counts[newChar]) {
      counts[newChar] = counts[newChar] + 1
    } else {
      counts[newChar] = 1
    }
    return counts
  }, {})

  if (!solutionB) {
    return Object.keys(charCounts).length
  }

  const groupSize = (input.match(/\n/g)?.length || 0) + 1
  const filteredAllYes = Object.entries(charCounts).filter(([_key, value]) => value === groupSize) //?
  return filteredAllYes.length
}

export const solutionA = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const groups: string[] = await handleInputs({ fileName, input })
  const groupCounts = groups.map(totalForGroup())
  const total = groupCounts.reduce((prev, cur) => prev + cur, 0)
  return total
}

export const solutionB = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const groups: string[] = await handleInputs({ fileName, input })
  const groupCounts = groups.map(totalForGroup(true))
  const total = groupCounts.reduce((prev, cur) => prev + cur, 0)
  return total
}
