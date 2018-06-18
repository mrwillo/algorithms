function findMinimumSwap(arr) {
    let sortedArr = arr.slice().sort();
    let idxSort = 0;
    let swap =0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === sortedArr[idxSort]) idxSort++;
        else swap++;
    }
    return swap;
}

console.log('minimumSwap: ', findMinimumSwap([1,2,4,3,5]));