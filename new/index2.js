const add = (num1, num2) => {
  let result = ''
  let arrNum1 = Array.from(String(num1), Number)
  console.log(arrNum1)
  let arrNum2 = Array.from(String(num2), Number)
  console.log(arrNum2)
  return result = `${arrNum1[0] + arrNum2[0]}${arrNum1[1] + arrNum2[1]}`
}

console.log(add(16, 18))

