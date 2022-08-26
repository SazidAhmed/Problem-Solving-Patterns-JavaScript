function collectOdds(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length ===0 ){
            return;
        }

        if(helperInput[0] % 2 !==0){
            result.push(helperInput.slice(1))
        }

        helper(arr)
        console.log(result)
        return result;
    }
}