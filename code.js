function permutationSort(a) {
    let isSorted = false;
    let permNum = 1;
    //let numToMove = 0;
    if(checkSort(a) == true) {
        //console.log("already sorted");
        return permNum;
    }
    else{
        while(isSorted == false) {
            let numToMove = 0;
            //let num = 0;
            for(let i = 1; i < a.length; i++) {
                let tmp = a[numToMove];
                a[numToMove] = a[i];
                a[i] = tmp;
                permNum++;
                numToMove++;
                if(checkSort(a) == true) {
                    isSorted = true;
                    break;
                    //i = array.length;
                }
                //num++;
                //console.log(num + ". "+ array);
                //permNum++;
                //numToMove++;
                // for(let j = i + 1; j < array.length; j++){
                //     let tmp = array[i];
                //     array[i] = array[j];
                //     array[j] = tmp; 
                //     if(checkSort(array) == true) {
                //         isSorted = true;
                //     }
                //     console.log(array);
                //     permNum += 1;
                // }
            }
        }
    }
    //console.log("Number of permutations: " + permNum);
    //console.log("Sorted: " + a);
    return permNum;
}

function checkSort(array) {

    let isSorted = false;

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]) {
                isSorted = false;
                //console.log("this is false");
                return false;
            }
            else {
                //console.log("this is true");
                isSorted = true;
            }
        }
    }
    //console.log(array);
    //console.log(isSorted);
    return true;
}

//test for isSorted
// let array = [1, 2, 3];
// if(checkSort(array) == true) {
//     console.log("works! for [1, 2, 3]")
// }
// let array1 = [1, 3, 2, 4];
// if(checkSort(array1) == false) {
//     console.log("works! for [1, 3, 2, 4]");
// }
// let array2 = [1, 3, 2, 4, 5, 2, 4];
// if(checkSort(array1) == false) {
//     console.log("works! for [1, 3, 2, 4, 5, 2, 4]");
// }

//test for generating permutations
//let array = [1, 2, 3];
//permutationSort(array);
//let array1 = [3, 2, 1];
//let array1 = [3, 2, 5, 1, 4];
//permutationSort(array1);
