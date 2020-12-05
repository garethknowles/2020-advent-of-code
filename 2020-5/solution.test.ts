import { solution, binaryPartition } from './solution'
import { solve } from './solve'

const testSet = [
  {
    input: ['FBFBBFFRLR'],
    expected: 357,
  },
  {
    input: ['BFFFBBFRRR'],
    expected: 567,
  },
  {
    input: ['FFFBBBFRRR'],
    expected: 119,
  },
  {
    input: ['BBFFBBFRLL'],
    expected: 820,
  },
  {
    input: ['BFFFBBFRRR', 'FFFBBBFRRR'],
    expected: 567,
  },
  {
    input: ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'],
    expected: 820,
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution(input)
  expect(result).toEqual(expected)
})

test('binaryPartition', () => {
  expect(binaryPartition('FBFBBFF')).toEqual(44)
  expect(binaryPartition('RLR')).toEqual(5)
})

test('solution', async () => {
  const result = await solve()
  expect(result).toEqual(838)
})

test('solutionB', async () => {
  const result = await solve(true)
  expect(result).toEqual(714)
})
