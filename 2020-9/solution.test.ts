import { solution } from './solution'

test('example1', async () => {
  const expected = 127
  const result = await solution({ fileName: 'example1.txt', preambleSize: 5 })
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = 138879426
  const result = await solution({ fileName: 'input.txt', preambleSize: 25 })
  expect(result).toEqual(expected)
})
