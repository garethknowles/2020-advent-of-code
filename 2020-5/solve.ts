import { solution } from './solution'
import fs from 'fs'
import path from 'path'

const shouldConsoleResult = process.argv.find((arg) => arg === '--result')

export const solve = async (solutionB = false) => {
  const inputFile = fs
    .readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
    .split(/\r?\n/)
    .filter((value) => value !== '')

  const result = await solution(inputFile, solutionB)
  shouldConsoleResult && console.log(result)
  return result
}
