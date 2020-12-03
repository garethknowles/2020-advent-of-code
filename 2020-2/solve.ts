import { solution } from './solution'
import fs from 'fs'
import path from 'path'

import { Policy } from './solution'

const shouldConsoleResult = process.argv.find((arg) => arg === '--result')

export const solve = async (policy: Policy = Policy.PolicyOne) => {
  const inputFile = fs
    .readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
    .split(/\r?\n/)
    .filter((value) => value !== '')

  const result = await solution(inputFile, policy)
  shouldConsoleResult && console.log(result)
  return result
}
