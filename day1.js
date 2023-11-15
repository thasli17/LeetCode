var highRepeat = function(s){
    var maxNo = 1;
    var value = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]===s[i+1]){
            maxNo += 1
        }else{
            maxNo = 1
        }
        if(maxNo > value){
            value = maxNo
        }
        
    }
    return value
}

console.log(highRepeat('aabbccc'));