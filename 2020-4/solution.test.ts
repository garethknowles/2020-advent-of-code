import { solution, extractPassportFields, extractPassport } from './solution'
import { solve } from './solve'

test.skip('extractPassportFields', () => {
  const input = 'eyr:2027\
  hcl:#602927\
  hgt:186cm byr:1939 iyr:2019 pid:552194973 ecl:hzl cid:123\
'
  const expectedFields = ['eyr:2027', 'hcl:#602927', 'hgt:186cm', 'byr:1939', 'iyr:2019', 'pid:552194973', 'ecl:hzl', 'cid:123']
  expect(extractPassportFields(input)).toEqual(expectedFields)

  const expectedPassportObject = {
    expirationYear: '2027',
    hairColor: '#602927',
    height: '186cm',
    birthYear: '1939',
    issueYear: '2019',
    passportID: '552194973',
    eyeColor: 'hzl',
    countryID: '123',
  }
  expect(extractPassport(input)).toEqual(expectedPassportObject)
})

test('exampleSet', async () => {
  const result = await solve('example.txt')
  expect(result).toEqual(2)
})

test('solutionA', async () => {
  const result = await solve('./input.txt')
  expect(result).toEqual(235)
})

test('exampleSetB2', async () => {
  const result = await solve('example2.txt', true)
  expect(result).toEqual(4)
})

test('exampleSetB3', async () => {
  const result = await solve('example3.txt', true)
  expect(result).toEqual(0)
})

test('solutionB', async () => {
  const result = await solve('./input.txt', true)
  expect(result).toEqual(194)
})
