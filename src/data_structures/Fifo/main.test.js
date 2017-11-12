import FifoPageRep from './main'
const fifoPageRep = new FifoPageRep(3)

test('pages function returns an array', () => {
  expect(Array.isArray(fifoPageRep.pages)).toBe(true)
})

test('addPid should return first element if its full and false if otherwise', () => {
  expect(fifoPageRep.addPid(2)).toBe(false)
  expect(fifoPageRep.addPid(7)).toBe(false)
  expect(fifoPageRep.addPid(8)).toBe(false)
  expect(fifoPageRep.addPid(3)).toBe(2)
  expect(fifoPageRep.addPid(4)).toBe(7)
  expect(fifoPageRep.addPid(8)).toBe(8)
})

test('pageFaults should be incremented when pid not found in fifo array', () => {
  fifoPageRep.clear()
  fifoPageRep.addPid(2)
  fifoPageRep.addPid(7)
  fifoPageRep.addPid(8)
  expect(fifoPageRep.pageFaults).toBe(3)
  fifoPageRep.addPid(8)
  expect(fifoPageRep.pageFaults).toBe(3)
  fifoPageRep.addPid(6)
  expect(fifoPageRep.pageFaults).toBe(4)
})

test('just generall testing ', () => {
  fifoPageRep.clear()
  fifoPageRep.addPid(2)
  console.log(fifoPageRep.pages)
  fifoPageRep.addPid(3)
  console.log(fifoPageRep.pages)
  fifoPageRep.addPid(4)
  console.log(fifoPageRep.pages)
  fifoPageRep.addPid(5)
  console.log(fifoPageRep.pages)
  fifoPageRep.addPid(6)
  console.log(fifoPageRep.pages)
  console.log(`No of page faults: ${fifoPageRep.pageFaults}`)
})
