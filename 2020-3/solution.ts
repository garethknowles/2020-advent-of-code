enum Square {
  Open,
  Tree,
}

class Grid {
  grid: Square[][]
  currentPosition: [number, number]
  visitedSquares: Square[]

  constructor(input: string[]) {
    this.grid = input.map((line) => line.split('').map((char) => (char === '#' ? Square.Tree : Square.Open)))
    this.reset()
  }

  reset() {
    this.currentPosition = [0, 0]
    this.visitedSquares = []
    this.move(0, 0)
  }

  getValue(x: number, y: number) {
    const row = this.grid[y % this.grid.length]
    return row[x % row.length]
  }

  move(dx: number, dy: number) {
    const [x, y] = this.currentPosition
    const newX = x + dx
    const newY = y + dy
    const newSquare = this.getValue(newX, newY)
    this.visitedSquares.push(newSquare)
    this.currentPosition = [newX, newY]
  }

  moveDownInSteps(stepX: number, stepY: number) {
    while (this.currentPosition[1] < this.grid.length - 1) {
      this.move(stepX, stepY)
    }
  }

  visitedTreeCount(): number {
    return this.visitedSquares.filter((s) => s === Square.Tree).length
  }

  runForSlope(right: number, down: number): number {
    this.reset()
    this.moveDownInSteps(right, down)
    return this.visitedTreeCount()
  }
}

export const solution = async (input: string[], slopes: number[][] = [[3, 1]]) => {
  const grid = new Grid(input)

  const results = slopes.map((slope) => grid.runForSlope(slope[0], slope[1]))
  return results.reduce((prev, cur) => prev * cur)
}
