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

const runInstructions = (code: Instruction[], solutionB = false): number => {
  const alreadyRunCode: Instruction[] = []
  let pointer = 0
  let accumulator = 0
  while (pointer < code.length) {
    const currentInstruction = code[pointer]
    if (alreadyRunCode.includes(currentInstruction)) {
      return solutionB ? undefined : accumulator
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
  return solutionB ? accumulator : undefined
}

const replaceCode = (originalCode: Instruction[], instructionToReplace: Instruction): Instruction[] => {
  const newCode = [...originalCode]
  const index = newCode.findIndex((i) => i === instructionToReplace)
  const replacement: Instruction = {
    operation: instructionToReplace.operation === 'jmp' ? 'nop' : 'jmp',
    argument: instructionToReplace.argument,
  }
  newCode[index] = replacement
  return newCode
}

const tryReplacingInstructions = (originalCode: Instruction[]): number => {
  const jumpsReplaced = originalCode.filter(({ operation }) => operation === 'jmp').map((i) => replaceCode(originalCode, i))
  const nopsReplaced = originalCode.filter(({ operation }) => operation === 'nop').map((i) => replaceCode(originalCode, i))
  const newCodeSets = [...jumpsReplaced, ...nopsReplaced]
  let result: number
  newCodeSets.find((newCode) => {
    result = runInstructions(newCode, true)
    return result !== undefined
  })
  return result
}

export const solution = async ({ fileName, input, solutionB = false }: { fileName?: string; input?: string[]; solutionB?: boolean }) => {
  const data: string[] = await handleInputs({ fileName, input })
  const instructions = parseAllInstructions(data)

  const result = solutionB ? tryReplacingInstructions(instructions) : runInstructions(instructions)

  return result
}
