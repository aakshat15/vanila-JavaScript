const fs = require('fs');
// Write function normal
function write() {
    fs.writeFile('n4.txt', 'hi guzz', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully.');
        }
    });
}



// Write function Sync
function writeSync() {
    // const fs = require('fs');
    fs.writeFileSync('n4.txt', 'run write function');
}


// READ function normal
function read(){
    fs.readFile('n4.txt' , 'utf-8' , (error,data) => {
        if(error){
            throw error;
        }else
        console.log(data);
        
    })
}


// READ function Sync
function readFileSync(){
    const data = fs.readFileSync('n4.txt' , 'utf-8')
    console.log(data);  
 }

 
// write();
// read()
// readFileSync()
