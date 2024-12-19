// problem1 -> Unique array elements
let arr = [1, 2, 2, 3, 4, 5, 4, 5];
console.log([...new Set(arr)]);
// intersection of two arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let set1 = new Set(arr1);
console.log(arr2.filter((item) => set1.has(item)));
// 
