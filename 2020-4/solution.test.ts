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

test('solution', async () => {
  const result = await solve()
  expect(result).toEqual(235)
})
