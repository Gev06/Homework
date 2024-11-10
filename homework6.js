function fn(obj) {
    // debugger
    let obj2 = {};
    for (let key in obj) {
        obj2[obj[key]]=key;
    } 
    return obj2;
}


