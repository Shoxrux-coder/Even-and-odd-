// выведите только четные числа Создать два массива для even и odd.
let arr = [4, 16, 19, 22, 11, 144, 967, 19124] 

let even = []
let odd = []


arr.filter(item => item % 2  === 0 ? even.push(item) : odd.push(item))
console.log(even,odd);