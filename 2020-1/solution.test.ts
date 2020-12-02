import { solution } from './solution'
import { solve } from './solve'

const testSet = [
  {
    input: ['1721', '979', '366', '299', '675', '145', '6'],
    expected: '514579',
  },
  {
    input: ['2020', '0'],
    expected: '0',
  },
  {
    input: ['2019', '1'],
    expected: '2019',
  },
  {
    input: [],
    expected: undefined,
  },
  {
    input: ['2020', '123', '1'],
    expected: undefined,
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution(input)
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = '436404'
  const result = await solve()
  expect(result).toEqual(expected)
})
