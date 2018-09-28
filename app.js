const fs = require ("fs");

for(let i = 0; i<10 ; i++){
    fs.appendFile("hello.txt",i + ": hello,world!\n",(err)=>{
    if (err){
        console.log("there was an error");
    }
    else{
        console.log("success,file updated");
    }
    });
}