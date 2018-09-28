fs = require ("fs"),
    fileName = "data/myCars.json";

const Car = function Car(year,make,model){
    this.Year = year;
    this.Make = make;
    this.Model = model;
}

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

let cars = [];
for(let i = 2000; i<2018; i++){
    let myCar = new Car(i, "Toyota", "Camry");  
    cars.push(myCar);
}



let carsArrJson = JSON.stringify(cars);

fs.writeFile(fileName,carsArrJson,(err)=>{
    if(err){
        console.error(err.message);
        throw err;
    }
    console.log("the file has been saved");
});