type Value = {
  rangeLower: number
  rangeUpper: number
  character: string
  password: string
}

export enum Policy {
  PolicyOne,
  PolicyTwo,
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

const policyOneCheck = (value: Value) => {
  const countOfLetter = value.password.split('').filter((l) => l === value.character).length
  const result = countOfLetter > 0 && countOfLetter >= value.rangeLower && countOfLetter <= value.rangeUpper
  return result
}

const policyTwoCheck = (value: Value) => {
  const characters = value.password.split('')
  const firstMatch = characters[value.rangeLower - 1] === value.character
  const secondMatch = characters[value.rangeUpper - 1] === value.character
  return (firstMatch && !secondMatch) || (secondMatch && !firstMatch)
}

const check = (policy: Policy) => {
  switch (policy) {
    case Policy.PolicyTwo:
      return policyTwoCheck
    case Policy.PolicyOne:
      return policyOneCheck
  }
}

export const solution = async (input: string[], policy: Policy = Policy.PolicyOne) => {
  const values = input.map(splitValues)
  const count = values.filter(check(policy)).length
  return String(count)
}
