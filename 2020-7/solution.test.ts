import { solution } from './solution'

const testSet = [
  {
    input: [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ],
    expected: 32,
  },
]

test.each(testSet)('solution(%i, %i)', async ({ input, expected }) => {
  const result = await solution({ input })
  expect(result).toEqual(expected)
})

test('b - example1', async () => {
  const expected = 126
  const result = await solution({ fileName: 'example1.txt' })
  expect(result).toEqual(expected)
})

test('solutionB', async () => {
  const expected = 155802
  const result = await solution({ fileName: 'input.txt' })
  expect(result).toEqual(expected)
})
