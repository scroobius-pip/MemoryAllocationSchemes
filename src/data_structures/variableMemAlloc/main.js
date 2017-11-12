export default class VariableMemAlloc {
  constructor (totalMem, method) {
    this._totalMem = Math.abs(totalMem)
    this._processes = []
    this._method = method
  }

  get totalMem () {
    return this._totalMem
  }

  _spaceRemaining () {
    var sum = this._totalMem
    for (let x = 0; x < this._processes.length; x++) {
      if (this._processes[x]['pid'] != null) {
        sum -= this._processes[x]['size']
      }
    }
    return sum
  }

  _allPid () {
    var arr = []
    for (let x = 0; x < this._processes.length; x++) {
      if (this._processes[x]['pid'] != null) {
        arr.push(this._processes[x]['pid'])
      }
    }
    return arr
  }

  get spaceRemaining () {
    return this._spaceRemaining()
  }

  get externalFragmentation () {
    var sum = 0
    for (let x = 0; x < this._processes.length; x++) {
      if (this._processes[x]['pid'] == null) {
        sum += this._processes[x]['size']
      }
    }
    return sum
  }

  get processes () {
    return this._processes
  }

  createProcess (pid, size) {
    size = Math.abs(+size)
    pid += ''
    const firstFit = () => {
      for (let x = 0; x < this._processes.length; x++) {
        if (this._processes[x]['size'] >= size && this._processes[x]['pid'] === null) {
          this._processes[x] = {
            size,
            pid
          }
          return this._processes
        }
      }
      this._processes.push({
        pid,
        size
      })
      return this._processes
    }

    const bestFit = () => {
      var fitDiff = -1
      var fitIndex = -1
      for (let x = 0; x < this._processes.length; x++) {
        if (this._processes[x]['size'] >= size && this._processes[x]['pid'] === null) {
          if (fitDiff === -1 || fitDiff > (this._processes[x]['size'] - size)) {
            fitDiff = this.processes[x]['size'] - size
            fitIndex = x
          }
        }
      }

      if (fitIndex === -1) {
        this._processes.push({
          pid,
          size
        })
      } else {
        this._processes[fitIndex] = {
          pid,
          size
        }
        return this._processes
      }
    }

    const worstfit = () => {
      var fitDiff = -1
      var fitIndex = -1
      for (let x = 0; x < this._processes.length; x++) {
        if (this._processes[x]['size'] >= size && this._processes[x]['pid'] === null) {
          if (fitDiff === -1 || fitDiff < (this._processes[x]['size'] - size)) {
            console.log(`pid:${pid} size:${size} proces-size:${this._processes[x]['size']} fitDiff:${fitDiff}`)

            fitDiff = this.processes[x]['size'] - size
            fitIndex = x
          }
        }
      }

      if (fitIndex === -1) {
        this._processes.push({
          pid,
          size
        })
      } else {
        this._processes[fitIndex] = {
          pid,
          size
        }
        return this._processes
      }
    }

    if (size > this._spaceRemaining() || pid === undefined || size === undefined) return false
    switch (this._method) {
      case 'firstfit':
        return firstFit()
      case 'bestfit':
        return bestFit()
      case 'worstfit':
        return worstfit()
      default:
        return false
    }
  }

  removeProcess (pid) {
    for (let x = 0; x < this._processes.length; x++) {
      pid += '' // converting to string
      if (this._processes[x]['pid'] === pid) {
        if (this._processes[x + 1] === undefined) {
          this._processes.pop()
          return this._processes
        } else {
          this._processes[x]['pid'] = null
          return this._processes
        }
      }
    }
    return false
  }

  clearProcesses () {
    this._processes = []
    return this._processes
  }
}
