const stringify = (object, iteration=0) => {
    let res = "{\n";
    iteration++;
    let tabs="";
    for(let i=0; i<iteration ;i++)
        tabs+="    ";
    for(key in object){
        if(typeof(object[key])=='object')
            res+=tabs+String(key)+":"+stringify(object[key], iteration)+tabs;
        else{
            if(key === Object.keys(object)[Object.keys(object).length-1])
                res+=tabs+String(key)+":"+String(object[key]);
            else
                res+=tabs+String(key)+":"+String(object[key])+"\n";
        }
    }
    tabs="";
    for(let i=0; i<iteration-1 ;i++)
        tabs+="    ";
    return res+"\n"+tabs+"}";
}

const firstObject = {
    b:1,
    d: {
        da: 'Hello',
        df: {
            s: 1,
            'ka': 1
        }
    }
}

const secondObject = {
    b:1,
    d: {
        da: 'Hello',
        df: {
            s: 1,
            'ka': 1
        }
    }
}

console.log(JSON.stringify(firstObject) === JSON.stringify(secondObject));
console.log(stringify(firstObject));
console.log(stringify(firstObject) === stringify(secondObject));
