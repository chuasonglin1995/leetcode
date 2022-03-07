class Node {
  constructor(key, val, next, prev) {
      this.key = (key === undefined ? 0 : key)
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
      this.prev = (prev === undefined ? null : prev)
  }
}

class DoubleLinkedList {
  constructor() {
      this.head = null
      this.tail = null
      this.size = 0
  }
  
  addNode(node) {
      if (this.size == 0) {
          this.head = node
          this.tail = node
      } else {
          this.head.prev = node
          node.next = this.head
          this.head = node
      }
      this.size++
  }
  
  removeNode(node) {
      if (node == this.head) {                            // if node is the same as the head
          this.head.prev = null
          this.head = this.head.next
          node.next = null
      }
      else if (node == this.tail) {                       // if node is the same as the tail
          this.tail = this.tail.prev
          node.prev = null
          node.head = null
      } 
      else if (node != this.head && node != this.tail) {  // if node is in the middle of the head and tail
          node.prev.next = node.next
          node.next.prev = node.prev
          node.next = null
          node.prev = null
      }
      this.size --
  }
  
  getSize() {
      return this.size
  }
  
  removeTailNode() {
      let val = this.tail.key       //storing the key number as we need this later to delete the (key,value) related to this key in the map, once we delete the node 
      if (this.size == 1) {
          this.head = null
          this.tail = null
      } 
      else {
          let temp  = this.tail.prev
          this.tail.prev = null
          this.tail = temp
          this.tail.next = null
      }
      this.size --
      return val
  }
}

class LRUCache {
  constructor(capacity) {
      this.capacity = (capacity === undefined ? 0 : capacity)
      this.map =  new Map()
      this.node = new DoubleLinkedList()
  }
  
  get(key) {
      if (!this.map.has(key)) return -1
      
      let val = this.map.get(key).val
      this.put(key, val)
      return val
  }
  
  put (key, value) {
      // doesnt matter if the map has the key or not
      // we will move the head to this new node
      let node = new Node(key, value)
      
      if (this.map.has(key)) {
          this.node.removeNode(this.map.get(key))
          this.map.delete(key)
      }
      else {
          if (this.node.getSize() == this.capacity) {
              this.map.delete(this.node.removeTailNode()) //first deletes the tail node, then deletes the map (key,value) related to that tail node
          }
      }
      
      this.node.addNode(node)
      this.map.set(key, node) // value being the newly created node
  }
}


