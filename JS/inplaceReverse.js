function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
   
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    
        start++;
        end--;
    }
    
}

const numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers); 
