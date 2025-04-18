const fs = require('fs');

//Reading a file synchronously
const fileData = fs.readFile('./fs.txt', 'utf-8', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})

//Creating a file and writing to it synchronously
fs.writeFile('./newFile.txt', 'Hello world!', (err)=>{
    if(err){
        throw err;
    }
    console.log('File created successfully!');
})


//Rename a file synchronously
fs.rename('./newFile.txt', './renamedFile.txt', (err)=>{
    if(err){
        throw err;
    }
    console.log('File renamed successfully!');
})

//Delete a file synchronously
fs.unlink('./renamedFile.txt', (err)=>{
    if(err){
        throw err;
    }
    console.log('File deleted successfully!');
})

//As all the tasks are asynchronous, so this will give some erors because we are:-
// creating --> renaming --> deleting the file at the same time. 
// so it can be happen that creating and renaming task is in middle and deleting task is executed. which will give error.
// so we either use synchronous methods or use callbacks to make sure that the tasks are executed one after another.