function twoSum(numbers: number[], target: number): number[] {
  const indexMap: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];

      if (complement in indexMap) {
          return [indexMap[complement] + 1, i + 1];
      }

      indexMap[numbers[i]] = i;
  }

  return [];
}
