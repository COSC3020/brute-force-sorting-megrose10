function permutationSort(a) {
    for(let i = 0; i < a.length; i++) {
        for(let j = 1; j < a.length - 1; j++) {
          if(array[i] > array[j]) {
            let tmp = array[j];
            array[j] = array[i];
            array[i] = tmp;
          }
        }
    }
            
    return array;
}

let array = [2, 4, 3, 1, 5];
array = permutationSort(array);
console.log(array);
