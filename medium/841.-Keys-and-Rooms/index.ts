function canVisitAllRooms(rooms: number[][]): boolean {
  const keysSet = new Set([0]);
  const toVisit: number[] = [0];

  while (toVisit.length > 0) {
    const indexToVisit = toVisit.pop();

    const keys = rooms[indexToVisit!]

    keys.forEach((key) => {
      if (!keysSet.has(key)) {
        keysSet.add(key);
        toVisit.push(key);
      }
    })
  }

  return keysSet.size === rooms.length;
};