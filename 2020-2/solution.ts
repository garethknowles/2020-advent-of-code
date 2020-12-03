type Value = {
  rangeLower: number
  rangeUpper: number
  character: string
  password: string
}

const splitValues = (input: string): Value => {
  const match = input.match(/([0-9]+)-([0-9]+) ([a-z]): ([a-z]*)/)
  return {
    rangeLower: Number(match[1]),
    rangeUpper: Number(match[2]),
    character: match[3],
    password: match[4],
  }
}

const check = (value: Value) => {
  const countOfLetter = value.password.split('').filter((l) => l === value.character).length
  const result = countOfLetter > 0 && countOfLetter >= value.rangeLower && countOfLetter <= value.rangeUpper
  console.log(countOfLetter, value, result)
  return result
}

export const solution = async (input: string[]) => {
  const values = input.map(splitValues)
  console.log('Value count', values.length)
  const count = values.filter(check).length
  return String(count)
}
