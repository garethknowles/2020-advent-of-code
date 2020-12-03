import { solution } from './solution'
import { solve } from './solve'

const testSetA = [
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
]

const testSetB = [
  {
    input: ['..##', '####'],
    expected: 1,
  },
  {
    input: ['.......', '#......'],
    expected: 0,
  },
]

test.each(testSetA)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution(input)
  expect(result).toEqual(expected)
})

test.each(testSetB)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution(input, [[1, 1]])
  expect(result).toEqual(expected)
})

const slopesA = [[3, 1]]
test('exampleA', async () => {
  const expected = 7
  const result = await solution(
    ['..##.......', '#...#...#..', '.#....#..#.', '..#.#...#.#', '.#...##..#.', '..#.##.....', '.#.#.#....#', '.#........#', '#.##...#...', '#...##....#', '.#..#...#.#'],
    slopesA,
  )
  expect(result).toEqual(expected)
})

test('solutionA', async () => {
  const expected = 230
  const result = await solve(slopesA)
  expect(result).toEqual(expected)
})

const slopesB = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]
test('exampleB', async () => {
  const expected = 336
  const result = await solution(
    ['..##.......', '#...#...#..', '.#....#..#.', '..#.#...#.#', '.#...##..#.', '..#.##.....', '.#.#.#....#', '.#........#', '#.##...#...', '#...##....#', '.#..#...#.#'],
    slopesB,
  )
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = 9533698720
  const result = await solve(slopesB)
  expect(result).toEqual(expected)
})
