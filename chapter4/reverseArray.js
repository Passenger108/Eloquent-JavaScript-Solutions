function reverseArray(collection){
    let result = [];
    for(let i=collection.length-1; i>=0; i--)
        result.push(collection[i]);
    return result;
}

function reverseArrayInPlace(collection){
    let i = 0, j = collection.length-1;
    while(i!=j){
        let temp = collection[i];
        collection[i++]=collection[j];
        collection[j--]=temp;
    }
    return collection;
}

let collection = [1,2,3,4,5];
console.log(reverseArray(collection));