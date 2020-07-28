/* mySQL connectivity sample */

var mySQLpointer, connObj;

mySQLpointer = require("mysql"); //this imports the mysql module

connObj = mySQLpointer.createConnection( 
			{ 
				host:     "107.180.1.16", 
				user:     "summer2020group3",
				password: "!!Group3",
				database: "summer2020group3"
			} );

connObj.connect( function(err) { //this function is where we actually connect.
	if (err) 
		// throw err; or use the follwowing command
		console.log("Connection Error: " + err.stack);
	else 
		console.log("Connected to Db! :-)  ID= " + connObj.threadId);
});

connObj.end(); //closes the connection

//DB info

//Host: 107.180.1.16
//Port: 3306 this doesn't matter right now.
//User: summer2020group3
//PW: !!Group3
//Default Schema: summer2020group3
