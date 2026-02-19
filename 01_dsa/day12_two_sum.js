const twoSum = (nums, target) => {
  const map = {}; 

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum; 

   
    if (complement in map) {
      return [map[complement], i]; 
    }
    map[currentNum] = i;
  }
};