const compare = (firstObject, secondObject) => {
    const firstObjectAray = Object.values(firstObject);
    const secondObjectAray = Object.values(secondObject);

    if (firstObjectAray.length !=secondObjectAray.length)
        return false;

    for(let i=0;i<firstObjectAray.length; i++){
        if(typeof(firstObjectAray[i]) === 'object' && typeof(secondObjectAray[i]) === 'object')
            return compare(firstObjectAray[i], secondObjectAray[i]);
        if(firstObjectAray[i] != secondObjectAray[i])
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

console.log(compare(a, b));