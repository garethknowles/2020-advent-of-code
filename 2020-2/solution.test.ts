import { solution } from './solution'
import { solve } from './solve'

const testSet = [
  [
    // {
    //   input: ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'],
    //   expected: 2,
    // },
    { input: ['6-9 b: bbwpbbvzbldbbf'], expected: '1' },
    { input: ['6-9 b: pphpp'], expected: '0' },
  ],
]

// test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
//   const result = await solution(input)
//   expect(result).toEqual(expected)
// })

test('solution', async () => {
  const expected = '560'
  const result = await solve()
  expect(result).toEqual(expected)
})
