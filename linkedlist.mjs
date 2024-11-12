import { Node } from './node.mjs'

class LinkedList {
  constructor(head = null) {
    this.head = head
    this.total = 0
  }
  append(key, value) {
    const node = new Node(key, value)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        if (current.key = key) {
            current.value = value
            return current
          }
        current = current.next
      }
      current.next = node
    }
    this.total++
  }
  find(key) {
    let current = this.head
    while (current !== null) {
      if (current.key === key) {
        return current.value
      }
      current = current.next
    }
    return null
  }
  removeKey(key) {
    let current = this.head
    if (current.key === key) {
        this.head = current.next
        this.total--
        return
    }
    while (current.next !== null) {
      let previous = current
      current = current.next
      if (current.key === key) {
        previous.next = current.next
        this.total--
        return
      }
    }
    return false
  }
  getKeys() {
    const keysArray = []
    let current = this.head
    for (let i = 0; i < this.total; i++) {
        keysArray.push(current.key)
        current = current.next
    }
    return keysArray
  }
  getValues() {
    const valuesArray = []
    let current = this.head
    for (let i = 0; i < this.total; i++) {
        valuesArray.push(current.value)
        current = current.next
    }
    return valuesArray
  }
  getEntries() {
    const entriesArray = []
    let current = this.head
    for (let i = 0; i < this.total; i++) {
        entriesArray.push([current.key, current.value])
        current = current.next
    }
    return entriesArray
  }
}

export { LinkedList }
