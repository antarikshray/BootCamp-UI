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