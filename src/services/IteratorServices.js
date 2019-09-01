function *createIteratorObj(arr) {
  for(let obj of arr) {
    yield obj;
  }
}

export function createIterator(iterable) {
  return createIteratorObj(iterable);
}