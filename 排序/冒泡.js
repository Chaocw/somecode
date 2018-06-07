function removeDuplicates(nums) {
	for(let i=0; i<nums.length; i++){
		for(let j=0; j<nums.length-1-i; j++){
			if(nums[j]>nums[j+1]){
				nums[j] ^= nums[j+1], nums[j+1] ^= nums[j], nums[j] ^= nums[j+1];
			}else if(nums[j+1] = nums[j]){
				nums.splice(j,1)
			}
		}
	}
	return nums.length
}