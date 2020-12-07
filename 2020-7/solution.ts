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
  const outputBags = outputBagsString.split(', ')
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

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

function findBagsWithOutput(mappings: BagMapping[], searchBag: string): string[] {
  const immediateMaps = mappings.filter((map) => map.outputs.find(({ name }) => name === searchBag)).map((b) => b.name)
  if (immediateMaps.length === 0) {
    return [searchBag]
  } else {
    return [searchBag, ...flatten(immediateMaps.map((bag) => findBagsWithOutput(mappings, bag)))]
  }
}

const findAllBagsWithOutput = (mappings: BagMapping[], searchBag: string): string[] => {
  const result = findBagsWithOutput(mappings, searchBag)
  return [...new Set(result)].filter((b) => b !== searchBag) //?
}

const startBagName = 'shiny gold'

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data: string[] = await handleInputs({ fileName, input })
  const mappings = data.map(parseBags)
  const bagsContainingGold = findAllBagsWithOutput(mappings, startBagName)
  return bagsContainingGold.length
}
