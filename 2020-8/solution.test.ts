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
