function hasMajorityElement(nums) {
    let candidate;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count++;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2;
}

console.log(hasMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
console.log(hasMajorityElement([3, 1, 3, 4, 4])); 
