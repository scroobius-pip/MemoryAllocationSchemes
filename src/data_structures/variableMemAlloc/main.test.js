import VariableMemAlloc from './main'
const totalMem = 1400
const variableMemAlloc = new VariableMemAlloc(totalMem, 'firstfit')

test('variables should be same as declared', () => {
  expect(variableMemAlloc.totalMem).toBe(totalMem)
})

test('getProcesses should  return  an array', () => {
  expect(Array.isArray(variableMemAlloc.processes)).toBe(true)
})

test('createProcess should return false if size greater than total Mem', () => {
  expect(variableMemAlloc.createProcess('1', (totalMem) + 1)).toBe(false)
})

test('createProcess should return an object if size is equal or less', () => {
  variableMemAlloc.clearProcesses()
  expect(typeof variableMemAlloc.createProcess('1', 30)).toBe('object')
    // console.log(variableMemAlloc.processes)
})

test("removeProcess should return an false if pid doesn't exist", () => {
  variableMemAlloc.clearProcesses()
  expect(variableMemAlloc.removeProcess('33')).toBe(false)
})

test('expect space remaining to be correct', () => {
  variableMemAlloc.clearProcesses()
  variableMemAlloc.createProcess('1', 100)
  variableMemAlloc.createProcess('2', 200)
  expect(variableMemAlloc.spaceRemaining).toBe(1100)
  variableMemAlloc.removeProcess('2')
  expect(variableMemAlloc.spaceRemaining).toBe(1300)
})

test('expect external fragmentation to be correct', () => {
  variableMemAlloc.clearProcesses()
  variableMemAlloc.createProcess('1', 100)
  variableMemAlloc.createProcess('2', 200)
  variableMemAlloc.removeProcess('2')
  expect(variableMemAlloc.externalFragmentation).toBe(0)
  variableMemAlloc.clearProcesses()
  variableMemAlloc.createProcess(1, 100)
  variableMemAlloc.createProcess(2, 200)
  variableMemAlloc.createProcess(3, 100)
  variableMemAlloc.removeProcess('2')
  expect(variableMemAlloc.externalFragmentation).toBe(200)
})

test('Checking memory allocation order for bestfit', () => {
  const bestFitMemAlloc = new VariableMemAlloc(500, 'bestfit')
  bestFitMemAlloc.createProcess(1, 10)
  bestFitMemAlloc.createProcess(2, 20)
  bestFitMemAlloc.createProcess(3, 50)
  bestFitMemAlloc.createProcess(4, 80)
  bestFitMemAlloc.createProcess(5, 70)
  bestFitMemAlloc.createProcess(6, 80)
  bestFitMemAlloc.removeProcess(1)
  bestFitMemAlloc.removeProcess(4)
  bestFitMemAlloc.removeProcess(6)
  bestFitMemAlloc.createProcess(7, 5)
  // console.log(bestFitMemAlloc.processes, `total space ${bestFitMemAlloc.totalMem}`, `remaining space ${bestFitMemAlloc.spaceRemaining}`, `fragmented space ${bestFitMemAlloc.externalFragmentation}`)

  expect(bestFitMemAlloc.processes[0]['pid']).toBe('7')
  expect(bestFitMemAlloc.processes[3]['pid']).toBe(null)
})

test('Checking memory allocation order for worstFit', () => {
  const bestFitMemAlloc = new VariableMemAlloc(500, 'worstfit')
  bestFitMemAlloc.createProcess(1, 10)
  bestFitMemAlloc.createProcess(2, 20)
  bestFitMemAlloc.createProcess(3, 50)
  bestFitMemAlloc.createProcess(4, 80)
  bestFitMemAlloc.createProcess(5, 70)
  bestFitMemAlloc.createProcess(6, 80)
  bestFitMemAlloc.removeProcess(1)
  bestFitMemAlloc.removeProcess(4)
  bestFitMemAlloc.removeProcess(6)
  bestFitMemAlloc.createProcess(7, 5)
  // console.log(bestFitMemAlloc.processes, `total space ${bestFitMemAlloc.totalMem}`, `remaining space ${bestFitMemAlloc.spaceRemaining}`, `fragmented space ${bestFitMemAlloc.externalFragmentation}`)

  expect(bestFitMemAlloc.processes[3]['pid']).toBe('7')
  expect(bestFitMemAlloc.processes[0]['pid']).toBe(null)
})
