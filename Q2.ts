function sumPositiveEven(nums: number[]): number {
    let sum: number = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i] > 0) {
            sum += nums[i]
        }
    }
    return sum
}
console.log(sumPositiveEven([1,2,-4,6,7,0]))