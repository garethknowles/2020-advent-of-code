class _Array<T> extends Array<T> {
  static range(from: number, to: number, step: number): number[] {
    return Array.from(Array(Math.floor((to - from) / step) + 1)).map((_v, k) => from + k * step)
  }
}

interface BoardingPass {
  encoded: string
  row?: number
  column?: number
  seatID?: number
}

export const binaryPartition = (input: string): number => {
  const start = 2 ** input.length - 1
  const inputValues = input.split('')
  const finalRange = inputValues.reduce(
    (range, newValue) => {
      const size = Math.ceil((range[1] - range[0]) / 2)
      const half = size + range[0]
      if (newValue === 'F' || newValue === 'L') {
        return [range[0], half]
      } else if (newValue === 'B' || newValue == 'R') {
        return [half, range[1]]
      }
      return range
    },
    [0, start],
  )
  return finalRange[0]
}

export const decodeBoardingPass = (encoded: string): BoardingPass => {
  const row = binaryPartition(encoded.slice(0, 7))
  const column = binaryPartition(encoded.slice(7, 10))
  const seatID = row * 8 + column
  return {
    encoded,
    column,
    row,
    seatID,
  }
}

const order = (seats: number[]): number[] => seats.sort((a: number, b: number) => (a < b ? 1 : -1))
const highestID = (seats: number[]): number => order(seats)[0]
const lowestID = (seats: number[]): number => order(seats).reverse()[0]

const missingSeat = (seats: number[]): number => {
  const lowest = lowestID(seats)
  const highest = highestID(seats)
  const wholeRange = _Array.range(lowest, highest - lowest, 1)

  const missing = wholeRange.filter((v) => !seats.find((seat) => seat === v))
  return missing[0]
}

export const solution = async (input: string[], solutionB = false) => {
  const boardingPasses = input.map(decodeBoardingPass)
  const seatIDs = boardingPasses.map((boardingPass) => boardingPass.seatID)

  if (solutionB) {
    return missingSeat(seatIDs)
  }

  return highestID(seatIDs)
}
