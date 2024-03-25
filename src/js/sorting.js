export function personage(objectSort, arraySort = []) {
    let keys = [];
    for (const key in objectSort) {
      if (arraySort.indexOf(key) === -1) {
        keys.push(key);
      }
    }
    keys = [...arraySort, ...keys.sort()];

    const result = [];
    for (const key of keys) {
      result.push({
        key,
        value: objectSort[key]
      });
    }
    return result;
  }