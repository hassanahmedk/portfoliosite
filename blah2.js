
let data = [10, 5, 32, 2, 26];

for(let i=0; i< data.length; i++){
    if(data[i]>data[i+1]){
        let temp = data[i];
        data[i] = data[i+1];
        data[i+1] = temp;
    }
}

console.log(data)