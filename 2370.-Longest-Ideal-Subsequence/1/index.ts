function longestIdealString(s: string, k: number): number {
  // Array to store the longest ideal subsequence length ending with each letter 'a' to 'z'.
  const dp = new Array(26).fill(0);

  for (let char of s) {
      // Get the index of the current character in the alphabet (0 for 'a', 25 for 'z').
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

      // Calculate the longest ideal subsequence that can end with `char`.
      let maxIdealSubseq = 0;

      // Consider all possible previous characters within the allowed `k` range.
      for (let offset = -k; offset <= k; offset++) {
          const prevIndex = index + offset;

          if (prevIndex >= 0 && prevIndex <= 25) {
              maxIdealSubseq = Math.max(maxIdealSubseq, dp[prevIndex]);
          }
      }

      // The longest ideal subsequence ending with the current character.
      dp[index] = maxIdealSubseq + 1;
  }

  // The longest ideal subsequence among all characters in the alphabet.
  return Math.max(...dp);
}

console.log(longestIdealString("ace", 2));
