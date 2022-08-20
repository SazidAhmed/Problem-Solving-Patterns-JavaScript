function anagram(str1, str2){
    if(str1.length !== str2.length){
        console.log('Length miss matched')
        return false;
    }

    const obj ={};

    for(let val of str1){
        obj[val] = (obj[val] || 0) + 1
    }
    console.log(obj)
    console.log('Tracing ...')

    // for(let i = 0 ; i < str1.length; i++){
    //     let val = str1[i];
    //     obj[val] ? obj[val] += 1 : obj[val] = 1 ;
    // }

    for(let val of str2){
        if(!obj[val]){
            console.log('Not Anagram !!!')
            return false;
        }else{
            obj[val] -= 1 
            console.log(obj)
        }
    }
    console.log('Anagram !!!')

    return true;
}

anagram('cardd', 'racdf')