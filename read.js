
const fs = require('fs');   
fs.readFile('n4.txt' , 'utf-8' , (error,data) => {
    if(error){
        throw error;
    }else
        console.log(data);
})

const data = fs.readFileSync('n4.txt' , 'utf-8')
console.log(data);
console.log('hello');

