function firstMissingPositive(n, arr) {
    arr.sort((a, b) => a - b);
    let j = 1;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            continue;
        }
        if (arr[i] > j) {
            return j;
        } else {
            j = arr[i] + 1;
        }
    }
    return j;
}


const result = firstMissingPositive(4, [3, 4, -1, 1]);
console.log(result);
