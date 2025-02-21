let list = {
    value : 1,
    rest : {
        value :2,
        rest : {
            value: 3,
            rest : {
                value : 4,
                rest : {
                    value : 5,
                    rest : null
                }
            }
        }
    }
};


function prepend(element , list=null){
    return {value:element, rest:list};
}

function nth(list, number){
    if(!list) return undefined;
    if(number==0)  return list.value;
    return nth(list.rest,number-1);
}

function arrayToList (array){
    let list =null;
    for( let i= array.length-1; i>=0; i--){
        list = {value:array[i], rest:list};
    } 
    return list;
}

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}

console.log(listToArray(list));

