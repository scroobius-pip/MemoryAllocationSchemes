import FixedMemAlloc from './main'
const totalMem = 1400
const divisions = 4
const fixedMemAlloc = new FixedMemAlloc() // new FixedMemAlloc(totalMem, divisions)
fixedMemAlloc.initMem(totalMem, divisions)
test('variables should be same as declared', () => {
  expect(fixedMemAlloc.totalMem).toBe(totalMem)
  expect(fixedMemAlloc.divisions).toBe(divisions)
})

test('Process Array should have length of division', () => {
  expect(fixedMemAlloc.processes.length).toBe(divisions)
})

test('getProcesses should  return  an array', () => {
  expect(Array.isArray(fixedMemAlloc.processes)).toBe(true)
})

test('partition size should be divided properly', () => {
  expect(fixedMemAlloc._partition_size).toBe(totalMem / divisions)
})

test('createProcess should return false if size greater than partition size', () => {
  expect(fixedMemAlloc.createProcess('1', (totalMem / divisions) + 1)).toBe(false)
})

test('createProcess should return an object if size is equal or less', () => {
  expect(typeof fixedMemAlloc.createProcess('1', (totalMem / divisions))).toBe('object')
})

test('createProcess should return false if all partitions are taken', () => {
  fixedMemAlloc.clearPartions()
  let x = divisions
  while (x--) {
    fixedMemAlloc.createProcess(x, 350)
  }
  expect(fixedMemAlloc.createProcess('8', 350)).toBe(false)
})

test('clearPartitions should return a null array', () => {
  expect(fixedMemAlloc.clearPartions()[0]).toBe(null)
  expect(fixedMemAlloc.clearPartions()[1]).toBe(null)
})

test("removeProcess should return false if pid doesn't exist", () => {
  expect(fixedMemAlloc.removeProcess('238483')).toBe(false)
})

test('removeProcess should return object if pid exists', () => {
  fixedMemAlloc.clearPartions()
  fixedMemAlloc.createProcess('1', 120)
  expect(typeof fixedMemAlloc.removeProcess('1')).toBe('object')
})

test('space remaining should be correct', () => {
  fixedMemAlloc.clearPartions()
  fixedMemAlloc.createProcess('1', 140)
  fixedMemAlloc.createProcess('2', 240)
  fixedMemAlloc.createProcess('3', 840)

  expect(fixedMemAlloc.spaceRemaining).toBe(totalMem - (140 + 240))
})

test('internal fragmentation should be correct', () => {
  fixedMemAlloc.clearPartions()
  fixedMemAlloc.createProcess('1', 140)
  fixedMemAlloc.createProcess('2', 240)
  fixedMemAlloc.createProcess('3', 840)
  expect(fixedMemAlloc.internalFragmentation).toBe(320)
})

test('Just checking stuff', () => {
  fixedMemAlloc.clearPartions()
  fixedMemAlloc.createProcess('1', 140)
  fixedMemAlloc.createProcess('1', 150)
  fixedMemAlloc.createProcess('1', 4450)
  fixedMemAlloc.createProcess(2, '34')
  fixedMemAlloc.createProcess('3', 200)
  fixedMemAlloc.removeProcess('5')
  fixedMemAlloc.removeProcess('2')
  fixedMemAlloc.createProcess('8', 220)
  fixedMemAlloc.createProcess('3', 200)
  // fixedMemAlloc.clearPartions()

  console.log(fixedMemAlloc.processes, `total space ${fixedMemAlloc.totalMem}`, `remaining space ${fixedMemAlloc.spaceRemaining}`, `fragmented space ${fixedMemAlloc.internalFragmentation}`)
})

test('processes should be an array when reinitialized', () => {
  fixedMemAlloc.initMem(totalMem, divisions)
  expect(Array.isArray(fixedMemAlloc.processes)).toBe(true)
})

test('Array elements should be null when reinitialized', () => {
  fixedMemAlloc.initMem(totalMem, divisions)
  expect(fixedMemAlloc.processes[0]).toBe(null)
})
