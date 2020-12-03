import { solution } from './solution'
import { solve } from './solve'

const testSet = [
  {
    input: ['..##', '###'],
    expected: 1,
  },
  {
    input: ['..##.......', '#...#...#..'],
    expected: 0,
  },
  {
    input: ['..##.......', '#...#...#..', '#...#...#..'],
    expected: 0,
  },
  {
    input: ['..##.......', '#...#...#..', '#...#...#..', '..#.#...#.#'],
    expected: 0,
  },
  {
    input: ['..##.......', '#...#...#..', '#...#...#..', '..#.#...#.#', '.#...##..#.'],
    expected: 1,
  },
  {
    input: ['..##.......', '#...#...#..', '.#....#..#.', '..#.#...#.#', '.#...##..#.', '..#.##.....', '.#.#.#....#', '.#........#', '#.##...#...', '#...##....#', '.#..#...#.#'],
    expected: 7,
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution(input)
  expect(result).toEqual(expected)
})

test('solution', async () => {
  const expected = 230
  const result = await solve()
  expect(result).toEqual(expected)
})
