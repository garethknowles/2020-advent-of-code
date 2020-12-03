import { solution } from './solution'
import { solve } from './solve'

const testSet = [
  {
    input: ['1721', '979', '366', '299', '675', '145', '6'],
    expectedA: '514579',
    expectedB: '241861950',
  },
  {
    input: ['2000', '20', '19', '1'],
    expectedA: '40000',
    expectedB: '38000',
  },
  {
    input: ['2019', '1'],
    expectedA: '2019',
    expectedB: undefined,
  },
  {
    input: [],
    expectedA: undefined,
    expectedB: undefined,
  },
  {
    input: ['2020', '123', '1'],
    expectedA: undefined,
    expectedB: undefined,
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expectedA, expectedB }) => {
  const resultA = await solution(input, 2)
  expect(resultA).toEqual(expectedA)

  const resultB = await solution(input, 3)
  expect(resultB).toEqual(expectedB)
})

test('solutionA', async () => {
  const expected = '436404'
  const result = await solve(2)
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = '274879808'
  const result = await solve(3)
  expect(result).toEqual(expected)
})
