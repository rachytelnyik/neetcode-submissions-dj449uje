class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for(let i of nums) {
            if(map[i] === undefined) {
                map[i] = 1;
            } else {
                return true;
            }
        }
        return false;
        
    }
}
