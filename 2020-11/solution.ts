import { handleInputs } from './inputHelpers'

enum Seat {
  floor = '.',
  empty = 'L',
  occupied = '#',
}

const parseSeats = (input: string[]): Seat[][] => input.map((row) => row.split('').map((char) => char as Seat))

const getSeatSafely = (seatX: number, seatY: number, plane: Seat[][]): Seat | undefined => {
  if (seatX >= 0 && seatY >= 0 && seatX < plane[seatY].length && seatY < plane.length) {
    return plane[seatY][seatX]
  }
  return undefined
}

const adjacentSeats = (seatX: number, seatY: number, plane: Seat[][]): Seat[] => {
  const left = getSeatSafely(seatX - 1, seatY, plane)
  const right = getSeatSafely(seatX + 1, seatY, plane)
  const topLeft = getSeatSafely(seatX - 1, seatY - 1, plane)
  const top = getSeatSafely(seatX, seatY - 1, plane)
  const topRight = getSeatSafely(seatX + 1, seatY - 1, plane)
  const bottomLeft = getSeatSafely(seatX - 1, seatY + 1, plane)
  const bottom = getSeatSafely(seatX, seatY + 1, plane)
  const bottomRight = getSeatSafely(seatX + 1, seatY + 1, plane)
  return [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight] //?
}

const adjacentOccupiedCount = (seatX: number, seatY: number, plane: Seat[][]) =>
  adjacentSeats(seatX, seatY, plane).reduce((prev, seat) => (seat === Seat.occupied ? prev + 1 : prev), 0)

const mapSeatToNewState = (seatX: number, seatY: number, plane: Seat[][]) => {
  const seat = plane[seatY][seatX] //?
  const adj = adjacentOccupiedCount(seatX, seatY, plane)
  if (seat === Seat.empty && adj === 0) {
    return Seat.occupied
  } else if (seat === Seat.occupied && adj >= 4) {
    return Seat.empty
  }
  return seat
}

const mapSeats = (plane: Seat[][]) => plane.map((row, y) => row.map((_seat, x) => mapSeatToNewState(x, y, plane))

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data: string[] = await handleInputs({ fileName, input })
  const seats = parseSeats(data)
  const newSeats = mapSeats(seats) //?

  return 1
}
