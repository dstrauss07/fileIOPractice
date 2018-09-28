const fs = require("fs"),
    fileName = "data/test.txt";
fs.mkdir("data", (err)=>{
    if(err){
        if(err.code != "EEXIST"){ 
        console.error("couldn't create directory" +err.message);
     }
    }
    else{
        console.log("created Directory");
    }
});
fs.writeFile(fileName,"hello, world", (err)=>{
    if (err){
        console.error(err.message);
    }
    else{
        console.log("success");
    }
});

console.log("finished");