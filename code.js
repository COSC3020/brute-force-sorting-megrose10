function permutationSort(a) {
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
          //console.log("i = " + a[i]);
          //console.log("j = " + a[j]);
          //console.log(a);
          if(a[i] > a[j]) {
            let tmp = a[j];
            a[j] = a[i];
            a[i] = tmp;
          }
          
        }
    }
            
    return a;
}

//let array = [2, 4, 3, 1, 5];
//array = permutationSort(array);
//console.log(array);
