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

const requiredFields = ['birthYear', 'issueYear', 'expirationYear', 'height', 'hairColor', 'eyeColor', 'passportID']
export const passportValidation = (passport): boolean => {
  if (!passport) {
    return false
  }

  let fieldCount = 0
  requiredFields.map((field) => {
    const value = passport[field]
    if (value && value.length > 0) {
      fieldCount++
    }
  })
  console.log(fieldCount)
  return fieldCount === requiredFields.length
}

export const solution = async (input: string[]) => {
  const validPassports = input.map(extractPassport).filter(passportValidation)
  return validPassports.length
}
