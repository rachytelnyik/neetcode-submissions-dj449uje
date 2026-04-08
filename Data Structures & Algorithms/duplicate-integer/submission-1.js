class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        for(let i = 0; i < nums.length - 1; i++){
            for(let k = i + 1; k < nums.length; k++) {
                if(nums[i] === nums[k]) result = true;
            }
        }
        return result;
    }
}
