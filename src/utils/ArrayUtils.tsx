interface ObjectWithId {
  id: string | number;
}

export function removeDuplicatesById<T extends ObjectWithId>(array: T[]): T[] {
  const uniqueArray: T[] = [];
  const ids: Set<string | number> = new Set();

  for (const obj of array) {
    if (!ids.has(obj.id)) {
      uniqueArray.push(obj);
      ids.add(obj.id);
    }
  }

  return uniqueArray;
}
