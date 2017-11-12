import FifoArray from 'fifo-array'

export default class FifoPageRep {
  constructor (noDivisions) {
    this._noDivisions = noDivisions
    this._fifoArray = new FifoArray(noDivisions)
    this._pageFault = 0
  }

  addPid (pid) {
    let x = this._fifoArray.length === this._noDivisions ? this._fifoArray[0] : false
    if (!this._fifoArray.includes(pid)) this._pageFault++
    this._fifoArray.push(pid)
    return x
  }

  clear () {
    this._fifoArray = new FifoArray(this._noDivisions)
    this._pageFault = 0
    return this._fifoArray
  }

  get pageFaults () {
    return this._pageFault
  }
  get pages () {
    return this._fifoArray
  }
}
