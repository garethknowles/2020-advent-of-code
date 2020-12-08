import { solution } from './solution'

test('example1', async () => {
  const expected = 5
  const result = await solution({ fileName: 'example1.txt' })
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = 1521
  const result = await solution({ fileName: 'input.txt' })
  expect(result).toEqual(expected)
})

test('example1b', async () => {
  const expected = 8
  const result = await solution({ fileName: 'example1.txt', solutionB: true })
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = 1016
  const result = await solution({ fileName: 'input.txt', solutionB: true })
  expect(result).toEqual(expected)
})
