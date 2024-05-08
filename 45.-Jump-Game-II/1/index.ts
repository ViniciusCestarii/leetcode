function jump(nums: number[]): number {
  const lastIndex = nums.length - 1
  let currentIndex = 0
  let jumpTimes = 0

  while(currentIndex !== lastIndex) {
    const currentJump = nums[currentIndex]

    if (currentJump >= lastIndex - currentIndex) {
      return jumpTimes + 1
    }

    let nextMaxJump = 0
    let nextMaxJumpIndex = 0
    for (let i = currentIndex + 1; i <= currentJump + currentIndex; i++) {
      // calculate the next best jump
      const jumpPower = nums[i] + i
      if (nextMaxJump < jumpPower) {
        nextMaxJump = jumpPower
        nextMaxJumpIndex = i
      }
    }

    jumpTimes++

    currentIndex = nextMaxJumpIndex
  }
  return jumpTimes
};

console.log(jump([4,1,1,3,1,1,1]))