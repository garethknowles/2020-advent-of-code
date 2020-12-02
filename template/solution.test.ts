import { solution } from './solution'
import { solve } from './solve'

const testSet = [
  [
    ['a', 'b'],
    ['a', 'b'],
  ],
]

test.each(testSet)('solution(%i, %i)', async (input, expected) => {
  const result = await solution(input)
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = ['a', 'b', 'c']
  const result = await solve()
  expect(result).toEqual(expected)
})
