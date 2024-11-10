let ak = {
    weight: 3600,
    year: 1974,
    autor: 'M. Kalashnikov'
}
function fn(object) { 
    for(let key in object) {
        value =  object[key];
        let objKey = key;
        
        object[key] = value;
    }
}


