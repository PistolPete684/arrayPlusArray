function arrayPlusArray(arr1, arr2) {
  //setup a new variable to hold the sum of arr1
  let sum1 = 0
  //go through arr1 using a for loop and add up the individual numbers
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  //setup a new variable to hold the sum of arr2
  let sum2 = 0
  //go through arr2 using a for loop and add up the individual numbers
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  //setup and return variable holding the total of arr1 + arr2
  return finalSum = sum1 + sum2;
}