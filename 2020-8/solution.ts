import { handleInputs } from './inputHelpers'

interface Instruction {
  operation: string
  argument: number
}

const parseAllInstructions = (input: string[]) => input.map(parseInstruction)

const parseInstruction = (input: string): Instruction => {
  const parts = input.split(' ')
  const operation = parts[0]
  const argument = Number(parts[1])
  return {
    operation,
    argument,
  }
}

const runInstructions = (code: Instruction[]): number => {
  const alreadyRunCode: Instruction[] = []
  let pointer = 0
  let accumulator = 0
  while (true) {
    pointer
    const currentInstruction = code[pointer]
    if (alreadyRunCode.includes(currentInstruction)) {
      return accumulator
    }
    if (currentInstruction.operation === 'acc') {
      accumulator += currentInstruction.argument
      pointer += 1
    } else if (currentInstruction.operation === 'jmp') {
      pointer = pointer + currentInstruction.argument
    } else if (currentInstruction.operation === 'nop') {
      pointer += 1
    }
    alreadyRunCode.push(currentInstruction)
  }
}

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data: string[] = await handleInputs({ fileName, input })
  const instructions = parseAllInstructions(data)
  const result = runInstructions(instructions) //?
  return result
}
