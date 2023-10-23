

// Find Index of first odd number - (using array method and also not
//   using array methods)


let array =[4,6,8,6]
for (let index = 0; index < array.length; index++) {
  if(array[index] % 2 !== 0){
    console.log(index);
    return;
  }

  
}

