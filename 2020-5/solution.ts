interface BoardingPass {
  encoded: string
  row?: number
  column?: number
  seatID?: number
}

export const binaryPartition = (input: string): number => {
  const start = 2 ** input.length - 1 //?
  const inputValues = input.split('') //?
  const finalRange = inputValues.reduce(
    (range, newValue) => {
      const size = Math.ceil((range[1] - range[0]) / 2) //?
      const half = size + range[0] //?
      if (newValue === 'F' || newValue === 'L') {
        return [range[0], half] //?
      } else if (newValue === 'B' || newValue == 'R') {
        return [half, range[1]] //?
      }
      return range //?
    },
    [0, start],
  )
  return finalRange[0] //?
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

export const solution = async (input: string[]) => {
  const boardingPasses = input.map(decodeBoardingPass)
  const seatIDs = boardingPasses.map((boardingPass) => boardingPass.seatID)
  const highestID = seatIDs.reduce((p, c) => (c > p ? c : p))
  return highestID
}
