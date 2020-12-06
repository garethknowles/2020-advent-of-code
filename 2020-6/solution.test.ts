import { solutionA, solutionB } from './solution'

const testSet = [
  [
    {
      input: ['abcx \
      abcy abcz'],
      expected: 6,
    },
  ],
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solutionA({ input })
  expect(result).toEqual(expected)
})

test('example1', async () => {
  const expected = 11
  const result = await solutionA({ fileName: 'example1.txt' })
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = 6714
  const result = await solutionA({ fileName: 'input.txt' })
  expect(result).toEqual(expected)
})

test('example1b', async () => {
  const expected = 6
  const result = await solutionB({ fileName: 'example1.txt' })
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = 3435
  const result = await solutionB({ fileName: 'input.txt' })
  expect(result).toEqual(expected)
})
