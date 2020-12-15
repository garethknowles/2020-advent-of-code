import { solution } from './solution'

describe('2020 day 10', () => {
  test.only('example 1', async () => {
    const expected = 35
    const result = await solution({ fileName: 'example1.txt' })
    expect(result).toEqual(expected)
  })

  test('example 2', async () => {
    const expected = 220
    const result = await solution({ fileName: 'example2.txt' })
    expect(result).toEqual(expected)
  })

  test('solution', async () => {
    const expected = 1856
    const result = await solution({ fileName: 'input.txt' })
    expect(result).toEqual(expected)
  })
})
