// find prime no  from array


const array = [10,35,7,60,3]
for(let i=0;i<array.length;i++){
    let count=0;
    for(let j=2;j<array[i];j++){
        if(array[i]%j==0){
            count++;
        }
    }
    
    if(count==0){
        console.log(array[i]);
    }
}