//version one

function every (array, test){
    for(let element of array){
        if(!test(element))
            return false;
    }
    return true;
}

//version two

function every (array,test){
    return !array.some(value=>!test(value));
}