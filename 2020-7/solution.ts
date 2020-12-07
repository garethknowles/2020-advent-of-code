import { handleInputs } from './inputHelpers'

interface OutputMap {
  name: string
  count: number
}

interface BagMapping {
  name: string
  outputs: OutputMap[]
}

const parseBags = (input: string): BagMapping => {
  const [name, outputBagsString] = input.split(' bags contain ')
  const outputBags = outputBagsString === 'no other bags.' ? [] : outputBagsString.split(', ')
  const outputs: OutputMap[] = outputBags.map((outputBagString) => {
    const cleaned = outputBagString.replace('.', '').replace('bags', '').replace('bag', '').trim()
    const count = Number(cleaned.substring(0, 1))
    const name = cleaned.substring(2)
    return {
      name,
      count,
    }
  })
  return {
    name,
    outputs,
  }
}

function calulateBagTotals(mappings: BagMapping[], bagName: string): number {
  const bag = mappings.find(({ name }) => bagName === name)
  const outputs = bag.outputs
  if (outputs.length === 0) {
    return 1
  }

  return (
    outputs
      .map(({ name, count }) => {
        return count * calulateBagTotals(mappings, name)
      })
      .reduce((p, c) => p + c) + 1
  )
}

const startBagName = 'shiny gold'

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data: string[] = await handleInputs({ fileName, input })
  const mappings = data.map(parseBags)
  return calulateBagTotals(mappings, startBagName) - 1
}
