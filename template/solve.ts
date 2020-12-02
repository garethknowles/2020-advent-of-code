import { solution } from './solution'
import fs from 'fs'
import path from 'path'

export const solve = async () => {
  const inputFile = fs
    .readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
    .split(/\r?\n/)
    .filter((value) => value !== '')

  return await solution(inputFile)
}

solve()
