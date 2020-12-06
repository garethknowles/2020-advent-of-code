import { solution } from './solution'

const testSet = [
  [
    {
      input: ['a', 'b'],
      expected: ['a', 'b'],
    },
  ],
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution({ input })
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = ['a', 'b', 'c']
  const result = await solution({ fileName: 'input.txt' })
  expect(result).toEqual(expected)
})
