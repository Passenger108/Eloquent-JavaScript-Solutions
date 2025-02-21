//mine approach which cant handle null and undefined cases, only works for truthy values

function deepEqual(value1, value2) {
    if ((typeof value1) == "object" && (typeof value2) == "object") {
       for(let key of Object.keys(value1))
            if(!Object.hasOwn(value2,key)) return false;
       for(let key of Object.keys(value2))
            if(!Object.hasOwn(value1,key)) return false;
       for(let key of Object.keys(value1))
            if(!deepEqual(value1[key],value2[key])) return false;
       return true;
    }
    return value1 === value2;
}


//book approach

function deepEqual(a,b){
    if(a===b) return true;

    if(a==null || b==null || typeof a != "object" || typeof b != "object") return false;

    let keysA =Object.keys(a), keysB = Object.keys(b);

    if(keysA.length != keysB.length) return false;

    for(let key of keysA){
        if(!keysB.includes(key)  || !deepEqual(a[key],b[key])) return false;
    }

    return true;
}