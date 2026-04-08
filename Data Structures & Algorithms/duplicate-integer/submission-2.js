class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();

        for(let i = 0; i < nums.length; i++) {
            map.add(nums[i]);
        }

        return nums.length !== map.size;

    }
}
