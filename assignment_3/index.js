const compareWithOrder = (firstObject, secondObject) => {
    const firstObjectArray = Object.values(firstObject);
    const secondObjectArray = Object.values(secondObject);

    if (firstObjectArray.length !=secondObjectArray.length)
        return false;

    for(let i=0;i<firstObjectArray.length; i++){
        if(typeof(firstObjectArray[i]) === 'object' && typeof(secondObjectArray[i]) === 'object')
            return compareWithOrder(firstObjectArray[i], secondObjectArray[i]);
        if(firstObjectArray[i] != secondObjectArray[i])
            return false;
    }
    return true;
}

const compareWithoutOrder = (firstObject, secondObject) => {

    if (Object.keys(firstObject).length !=Object.keys(secondObject).length)
        return false;

    for(key in firstObject){
        if(typeof(firstObject[key]) === 'object' && typeof(secondObject[key]) === 'object')
            return compareWithoutOrder(firstObject[key], secondObject[key]);
        if(firstObject[key] != secondObject[key])
            return false;
    }
    return true;
}

const a = {
    b: 1,
    a: 2,
    c:{
        ca: 1,
        cd: 'Hello',
        df: {
            ra:1
        }
    }
}

const b = {
    b: 1,
    a: 2,
    c:{
        ca: 1,
        cd: 'Hello',
        df: {
            ra:1
        }
    }
}

console.log(compareWithOrder(a, b));

const c = {
    b: 1,
    a: 2,
    c:{
        df: {
            ra:1
        },
        ca: 1,
        cd: 'Hello'
    }
}

console.log(compareWithoutOrder(a, c));