import fs from 'fs'
import path from 'path'

const parseTxtFile = async (fileName = './input.txt') =>
  fs
    .readFileSync(path.join(__dirname, fileName), 'utf-8')
    .split(/\r?\n\r?\n/)
    .filter((value) => value !== '')

export const handleInputs = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  let inputArray = input
  if (fileName) {
    inputArray = await parseTxtFile(fileName)
  }
  if (!inputArray || inputArray.length === 0) {
    throw new Error('Input error')
  }
  return inputArray
}
