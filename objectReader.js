const fs= require("fs"),
    fileName = "data/myCars.json",
    cars = [];

fs.readFile(fileName, "utf8", (err,data) =>{
    let cars = JSON.parse(data);
    cars.forEach((car,idx,arr)=>{
        console.log(idx + ": " + car.Year + " " + car.Make + " " + car.Model);
    });
});
