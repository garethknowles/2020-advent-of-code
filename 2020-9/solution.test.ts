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

test('example1b', async () => {
  const expected = 62
  const result = await solution({ fileName: 'example1.txt', preambleSize: 5, solutionB: true })
  expect(result).toEqual(expected)
})

test('solutionb', async () => {
  const expected = 23761694
  const result = await solution({ fileName: 'input.txt', preambleSize: 25, solutionB: true })
  expect(result).toEqual(expected)
})
