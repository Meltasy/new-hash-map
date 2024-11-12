import { LinkedList } from './linkedlist.mjs'

class HashMap {
  constructor() {
    this.bucketsArray = [...Array(this.capacity)]
    this.capacity = 16
    this.loadFactor = 0.75
  }
  hash(key) {
    let hashCode = 0
    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
    }
    return hashCode
  }
  set(key, value) {
    let length = this.length()
    if (this.capacity * this.loadFactor <= length) {
      this.capacity = this.capacity * 1.5
      let entries = this.entries()
      this.clear()
      for (let entry of entries) {
        let [key, value] = entry
        this.set(key, value)
      }
    }
    let index = this.hash(key)
    if (index < 0 || index >= this.capacity) {
      console.log('Trying to access index out of bound')
    }
    if (!this.bucketsArray[index]) {
      this.bucketsArray[index] = new LinkedList()
    }
    this.bucketsArray[index].append(key, value)
  }
  get(key) {
    let index = this.hash(key)
    if (index < 0 || index >= this.capacity) {
      console.log('Trying to access index out of bound')
    }
    if (!this.bucketsArray[index]) {
        return null
    } else {
        return this.bucketsArray[index].find(key)
    }
  }
  has(key) {
    let index = this.hash(key)
    if (index < 0 || index >= this.capacity) {
      console.log('Trying to access index out of bound')
    }
    if (!this.bucketsArray[index]) {
        return false
    } else {
        return this.bucketsArray[index].find(key) ? true : false
    }
  }
  remove(key) {
    let index = this.hash(key)
    if (index < 0 || index >= this.capacity) {
      console.log('Trying to access index out of bound')
    }
    if (!this.bucketsArray[index] || !this.has(key)) {
        return false
    }
    this.bucketsArray[index].removeKey(key)
    if (this.bucketsArray[index].head === null) {
        this.bucketsArray.splice(index, 1)
    }
    return true
  }
  length() {
    let length = 0
    for (let item of this.bucketsArray) {
        if (item) {
            length += item.total
        }
    }
    return length
  }
  clear() {
    if (this.bucketsArray < 1) {
      return 'There isn\'t anything to clear.'
    }
    this.bucketsArray.splice(0)
  }
  keys() {
    let keysArray = []
    for (let item of this.bucketsArray) {
      if (item) {
        keysArray.push(...item.getKeys())
      }
    }
    return keysArray
  }
  values() {
    let valuesArray = []
    for (let item of this.bucketsArray) {
      if (item) {
        valuesArray.push(...item.getValues())
      }
    }
    return valuesArray
  }
  entries() {
    let entriesArray = []
    for (let item of this.bucketsArray) {
      if (item) {
        entriesArray.push(...item.getEntries())
      }
    }
    return entriesArray
  }
}

export { HashMap }
