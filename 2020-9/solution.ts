import { handleInputs } from './inputHelpers'

export const solution = async ({ fileName, input, preambleSize }: { fileName?: string; input?: string[]; preambleSize: number }) => {
  const data: string[] = await handleInputs({ fileName, input })

  const dataAsNumbers: number[] = data.map((d) => Number(d))

  for (let i = preambleSize; i < dataAsNumbers.length; i++) {
    const currentNumber = dataAsNumbers[i]
    const previousNumbers = dataAsNumbers.slice(i - preambleSize, i)

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

  return undefined
}
