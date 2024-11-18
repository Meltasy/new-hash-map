# new-hash-map

An odin project on hash maps

The following classes and methods have been used:

* **HashMap** class to represent the hash map of buckets
* **LinkedList** class to represent the lists in each bucket
* **Node** class to represent the nodes containing values
* **hash(key)** to take a key and produce a hash code
* **set(key, value)** to set a key and the value assigned to that key
* **get(key)** to take a key and return the value assigned to that key, or null if no key
* **has(key)** to take a key and return true if the key is in the hash map, or false if no key
* **remove(key)** to take a key and remove it's entry and return true, or false if no key
* **length()** to return the number of stored keys
* **clear()** to remove all entries
* **keys()** to return an array containing all keys
* **values()** to return an array containing all values
* **entries()** to return an array containing each key, value pair, example: [[firstKey, firstValue], [secondKey, secondValue]]
