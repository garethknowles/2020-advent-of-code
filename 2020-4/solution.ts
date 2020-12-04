export const extractPassportFields = (input: string) => input.split(/[ \n]/).filter((s) => s !== '')

const fieldMap = {
  byr: 'birthYear',
  iyr: 'issueYear',
  eyr: 'expirationYear',
  hgt: 'height',
  hcl: 'hairColor',
  ecl: 'eyeColor',
  pid: 'passportID',
  cid: 'countryID',
}

const mapField = (fieldData: string) => {
  const values = fieldData.split(':')
  const key = values[0]
  const value = values[1]
  const fieldName = fieldMap[key]
  const result = {}
  result[fieldName] = value
  return result
}

export const extractPassport = (input: string) => {
  const fieldData = extractPassportFields(input)
  if (fieldData.length === 0) {
    return undefined
  }
  const fields = fieldData.map(mapField).reduce((prev, cur) => {
    return { ...prev, ...cur }
  })
  return fields
}

type FieldValidation = {
  name: string
  digits?: number
  min?: number
  max?: number
  height?: boolean
  color?: boolean
  eyeColor?: boolean
}

const requiredFields = [
  { name: 'birthYear', digits: 4, min: 1920, max: 2002 },
  { name: 'issueYear', digits: 4, min: 2010, max: 2020 },
  { name: 'expirationYear', digits: 4, min: 2020, max: 2030 },
  { name: 'height', height: true },
  { name: 'hairColor', color: true },
  { name: 'eyeColor', eyeColor: true },
  { name: 'passportID', digits: 9 },
]

const validateDigits = (value: string, digits?: number): boolean => {
  if (!digits) {
    return true
  }
  const digitCount = value.split('').length
  const valid = digitCount === digits
  console.log(value, digitCount, valid)
  return valid
}
const validateMin = (value: string, min?: number): boolean => {
  if (!min) {
    return true
  }
  const intValue = Number(value)
  const valid = intValue >= min
  console.log(value, intValue, valid)
  return valid
}

const validateMax = (value: string, max?: number): boolean => {
  if (!max) {
    return true
  }
  const intValue = Number(value)
  const valid = intValue <= max
  console.log(value, intValue, valid)
  return valid
}

const validateHeight = (value: string, height?: boolean): boolean => {
  if (!height) {
    return true
  }
  if (value.endsWith('cm')) {
    const heightVal = value.substring(0, value.length - 2)
    const heightNum = Number(heightVal)
    return heightNum >= 150 && heightNum <= 193
  } else if (value.endsWith('in')) {
    const heightVal = value.substring(0, value.length - 2)
    const heightNum = Number(heightVal)
    return heightNum >= 59 && heightNum <= 76
  } else {
    return false
  }
}
const validateColor = (value: string, color?: boolean): boolean => {
  if (!color) {
    return true
  }
  const valid = !!value.match(/#[a-z,0-9]{6}/)
  return valid
}

const validateEyeColor = (value: string, eyeColor?: boolean): boolean => {
  if (!eyeColor) {
    return true
  }

  const valid = !!value.match(/^(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)$/)
  return valid
}

const isValid = (field: FieldValidation, value: string): boolean =>
  validateDigits(value, field.digits) &&
  validateMin(value, field.min) &&
  validateMax(value, field.max) &&
  validateHeight(value, field.height) &&
  validateColor(value, field.color) &&
  validateEyeColor(value, field.eyeColor)

export const passportValidation = (validationChecks: boolean) => (passport): boolean => {
  if (!passport) {
    return false
  }

  const validCount = requiredFields
    .map((field) => {
      const value = passport[field.name]
      if (value && (!validationChecks || isValid(field, value))) {
        return true
      } else {
        console.log('Failed on', value, field.name, field)
      }
    })
    .filter((value) => value === true).length

  const allValid = validCount === requiredFields.length

  console.log(validCount, allValid)
  return allValid
}

export const solution = async (input: string[], validationChecks = false) => {
  const validPassports = input.map(extractPassport).filter(passportValidation(validationChecks))
  return validPassports.length
}
