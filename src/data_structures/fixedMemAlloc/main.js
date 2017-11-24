export default class FixedMemAlloc {
  constructor () {
    this._totalMem = 0
    this._divisions = 0
    this._partition_size = 0
    this._processes = []
  }

  initMem (totalMem, divisions) {
    this._totalMem = Math.abs(totalMem)
    this._divisions = Math.abs(divisions)
    this._partition_size = this._totalMem / this._divisions
    this._processes = (() => {
      let arr = []
      let count = this._divisions
      while (count--) {
        arr.push(null)
      }
      return arr
    })()
  }

  get totalMem () {
    return this._totalMem
  }

  get divisions () {
    return this._divisions
  }
  get partitionSize () {
    return this._partition_size
  }
  get processes () {
    return this._processes
  }

  get spaceRemaining () {
    var sum = 0
    for (let x = 0; x < this._divisions; x++) {
      if (this._processes[x] != null) {
        sum += this._partition_size - this._processes[x]['size']
      } else if (this._processes[x] == null) {
        sum += this._partition_size
      }
    }
    return sum
  }
  get internalFragmentation () {
    var sum = 0
    for (let x = 0; x < this._divisions; x++) {
      if (this._processes[x] != null) {
        // sum += this._partition_size - this._processes[x]['size']
        sum += this._processes[x]['fragment']
      }
    }
    return sum
  }

  createProcess (pid, size) {
    pid += ''
    size = Math.abs(+size)
    if (size > this._partition_size) return false
    else {
      for (let x = 0; x < this._divisions; x++) {
        if (this._processes[x] === null || this._processes[x]['pid'] === pid) {
          this._processes[x] = {pid, size, fragment: this._partition_size - size}
          return this._processes
        }
      }
      return false
    }
  }

  removeProcess (pid) {
    for (let x = 0; x < this._divisions; x++) {
      pid += '' // converting to string
      if (this._processes[x] != null && this._processes[x]['pid'] === pid) {
        this._processes[x] = null
        return this._processes
      }
    }
    return false
  }

  clearPartions () {
    this._processes.fill(null)
    return this._processes
  }
}
