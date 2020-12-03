import { solution } from './solution'
import fs from 'fs'
import path from 'path'

const shouldConsoleResult = process.argv.find((arg) => arg === '--result')

export const solve = async (size) => {
  const inputFile = fs
    .readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
    .split(/\r?\n/)
    .filter((value) => value !== '')

  console.log(inputFile)
  const result = await solution(inputFile, size)
  shouldConsoleResult && console.log(result)
  return result
}

solve(2)
