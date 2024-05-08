function calculateMinimumHP(dungeon: number[][]): number {
    /*
    this code used dynamic programming to solve the problem

    based on https://www.youtube.com/watch?v=4uUGxZXoR5o&t=3s

    if bottom-down has -5 then it has to be at least 6 to enter it
    if cell above it has 1, then (since it has only 1 way to move - down) it has to be at least 5 to enter
    similarly, the cell to the left, if it has 30, then 1 life is enough (min(0, currrent + next)) 
    or in this case min(0, 30 - 5) = 0 and then the +1 is granted at the return of the function

    when a cell has 2 possible moves (right, down), then it can have
    min(0, current + max(right, down)) to always find the min health
    ex: min(0, -10 + max(-4, 0)) = min(0, -10 + 0) = -10

     -2  -3   3
     -5  -10  1
     10  30  -5

     becomes:

     -6 -4 -1
     -5 -10-4
      0  0 -5

    again when a cell has 2 possible moves (right, down), then it can have
    min(0, current + max(right, down)) to always find the min health
    ex: min(0, -2 + max(-5, -4)) = -6

    and then abs(-6) + 1 = 7
    */

  const r = dungeon.length; // row length
  const c = dungeon[0].length; // col length
  const dp = new Array(r).fill(0).map(() => new Array(c).fill(0)); //dynamic programming

  for (let i = r - 1; i >= 0; --i) {
    for (let j = c - 1; j >= 0; --j) {
      if (i == r - 1 && j == c - 1)    //Bottom-Right cell (Princess Cell)
        dp[i][j] = Math.min(0, dungeon[i][j]);
      else if (i == r - 1)   //last row
        dp[i][j] = Math.min(0, dungeon[i][j] + dp[i][j + 1]);
      else if (j == c - 1)   //last col       
        dp[i][j] = Math.min(0, dungeon[i][j] + dp[i + 1][j]);
      else
        dp[i][j] = Math.min(0, dungeon[i][j] + Math.max(dp[i][j + 1], dp[i + 1][j]));
    }
  }
  return Math.abs(dp[0][0]) + 1;
}

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])); // 7