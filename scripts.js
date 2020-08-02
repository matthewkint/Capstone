
var counter = 1;
var employeeData = JSON.parse(data);//data is a json object declared in employees.js
console.log(employeeData);
// console.log(employeeData.length)

function signIn(){
	var inputUsername = '';
	var inputPassword = '';

	if (counter > 3){
		alert("You ran out of attempts.\nSince you seem like a nice person you can just reload the page :)");
		return;
	}

	inputUsername = document.getElementById('username').value;
	inputPassword = document.getElementById('password').value;
	//alert("Username is: " + inputUsername + "\nPassword is: " + inputPassword); //for testing
	for (entry = 0; entry < employeeData.length; entry++) {

		if (inputUsername == employeeData[entry].idEmployees){
			
			console.log("Username, idEmployees" + inputUsername, employeeData[entry].idEmployees);
			if (employeeData[entry].Password == inputPassword){
				window.location.replace("quiz_selector.html");
				break;
			}//end of nested if

		} else if(entry == (employeeData.length - 1)) {

			console.log("entry, employeeData.length  " + entry, employeeData.length);
			alert("That username isn't reccognized. Please try again.\nAttempt " 
			+ counter + "/3");
			counter++;
			console.log(counter);
		}//end of else if
	}//end of for

}//end of signIn()


//Picking a quiz to take
function startQuiz(value){
if(value == "clone"){
	window.location.replace("quiz.html");
	console.log(value)
}else if (value == "disney"){
	window.location.replace("quiz.html");
	console.log(value)
}else if (value == "harry"){
	window.location.replace("quiz.html");
	console.log(value)
}else{
	window.location.replace ("quiz.html");
	console.log(value)
}
}
