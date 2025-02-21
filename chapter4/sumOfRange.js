function range (start, end, step=1){

    let result = [];

    if(step>0)
        for(let iter=start; iter<=end; iter+=step)
            result.push(iter);
    else
        for(let iter=start; iter>=end; iter+=step)
            result.push(iter);
    

    return result;
}

function sum(collection){
    let result = 0;
    for(let element of collection)
        result+=element;
    return result;
}

console.log(sum(range(1,10)))
