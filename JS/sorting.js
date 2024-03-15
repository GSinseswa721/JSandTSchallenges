function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function customSortDescending(arr) {
 for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            arr.splice(i, 1);
            i--; 
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const array = [8, 3, 7, 12, 5, 9, 6, 11, 4];
console.log(customSortDescending(array)); 
