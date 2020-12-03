import { solution, Policy } from './solution'
import { solve } from './solve'

const testSet = [
  {
    input: ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'],
    expectedPolicy1: '2',
    expectedPolicy2: '1',
  },
  {
    input: ['6-9 b: bbwpbbvzbldbbf'],
    expectedPolicy1: '1',
    expectedPolicy2: '0',
  },
  {
    input: ['6-9 b: pphpp'],
    expectedPolicy1: '0',
    expectedPolicy2: '0',
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expectedPolicy1, expectedPolicy2 }) => {
  const result = await solution(input)
  expect(result).toEqual(expectedPolicy1)

  const result2 = await solution(input, Policy.PolicyTwo)
  expect(result2).toEqual(expectedPolicy2
})

test('solutionA', async () => {
  const expected = '560'
  const result = await solve()
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = '303'
  const result = await solve(Policy.PolicyTwo)
  expect(result).toEqual(expected)
})
