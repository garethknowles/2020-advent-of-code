import { solution } from './solution'
import fs from 'fs'
import path from 'path'

export const solve = async (filename = './input.txt', validationChecks = false) => {
  const inputFile = fs
    .readFileSync(path.join(__dirname, filename), 'utf-8')
    .split(/\r?\n\r?\n/)
    .filter((value) => value !== '')

  const result = await solution(inputFile, validationChecks)
  return result
}
