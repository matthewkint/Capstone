<<<<<<< HEAD
const csvFilePath='HarryPotter.csv'; 
//file path is Employees.csv for me, but you'll have to change it to "Questions.csv" if you're doing that one.
//This .csv file is in my current directory, as you can see.
const csv=require('csvtojson');
//This is the module we'll be using. You may have to install it.
//If you run into that error I believe the command is: npm i --save csvtojson
const fs = require('fs');
//You might have to install this as well, just look at npmjs.com if you do.

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{			//this is where we actually create a json object.
    console.log(jsonObj);	//I printed it to the console, but you obviously don't need this part.
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 

    const data = JSON.stringify(jsonObj); 			//turning the object into a string
    fs.writeFile('HarryPotter.json', data, (err) => { //actually saving the data to a .json file.
    if (err) {
        throw err;
    }
    console.log("JSON data is saved."); //if you see this message it worked.
});
})

//I feel a little foolish putting in comments at all this simple parts, but I hope it helps.
//Feel free to ask me any questions