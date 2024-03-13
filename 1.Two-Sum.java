/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let nesne = {}
    for (let i = 0; i < nums.length; i++) {
        let result= target - nums[i];
        if (nesne[result] != null) {
            return [i,nesne[result]]
        }
        else {
            nesne[nums[i]] = i
        }

    }

};
