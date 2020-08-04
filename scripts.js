
var counter = 1;
var questionNumber = 0; //actually it's one, but we'll say zero for our array :).
var employeeData = JSON.parse(data);//data is a json object declared in employees.js
console.log(employeeData);
var potterQuestions = JSON.parse(potter);
console.log(potterQuestions);
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

	if (inputUsername != "" && inputPassword != "") {
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
	} //end of if

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

var form = document.querySelector("#questionForm");

// form.addEventListener("submit", function(event) {
// 	findSelection();
// 	console.log("Next pressed, and a selection was made")
// }, false);

form.addEventListener("submit", function(event) {
	findSelection();
	event.preventDefault();
  }, false);

function findSelection() {
	if (document.getElementById("nextButton").value == "Finish") {
		window.location.replace("results.html");
	} else {
		var options = document.getElementsByName("option")
		for(i = 0; i < options.length; i++) {
			if(options[i].checked) {
			console.log("User chose: " + options[i].value)
			var userSelection = options[i].value;
			}
		}
		loadQuestion();
	}
} 
var qNum = 0
function loadQuestion() {

	if (qNum <= 10) {
		document.getElementById("question").innerHTML = potterQuestions[qNum].Question;
		document.getElementById("option0").innerHTML = potterQuestions[qNum].Choice1;
		document.getElementById("option1").innerHTML = potterQuestions[qNum].Choice2;
		document.getElementById("option2").innerHTML = potterQuestions[qNum].Choice3;
		document.getElementById("option3").innerHTML = potterQuestions[qNum].Choice4;

		document.getElementById("optionImage0").src = potterQuestions[qNum].Image0;
		document.getElementById("optionImage1").src = potterQuestions[qNum].Image1;
		document.getElementById("optionImage2").src = potterQuestions[qNum].Image2;
		document.getElementById("optionImage3").src = potterQuestions[qNum].Image3;

		for (i=0; i<4; i++) {
			document.getElementById("radio" + i).checked = false;
		}

		qNum += 1;
	} else {
		document.getElementById("question").innerHTML = "End of quiz";

		document.getElementById("optionImage0").style.display = "none";
		document.getElementById("optionImage1").style.display = "none";
		document.getElementById("optionImage2").style.display = "none";
		document.getElementById("optionImage3").style.display = "none";

		var optionDivs = document.getElementsByClassName("option")
		for(i = 0; i < optionDivs.length; i++) {
			optionDivs[i].style.display = "none";	
		}

		document.getElementById("nextButton").value = "Finish";
	}
}

// function populateNext() {
// 	questionNumber++;
// 	console.log(questionNumber);

// 	//write question
// 	document.getElementById("question").innerHTML = potterQuestions[questionNumber].Question;

// 	//write options
// 	document.getElementById('option0').innerHTML = potterQuestions[questionNumber].Choice1;
// 	document.getElementById("option1").innerHTML = potterQuestions[questionNumber].Choice2;
// 	document.getElementById('option2').innerHTML = potterQuestions[questionNumber].Choice3;
// 	document.getElementById('option3').innerHTML = potterQuestions[questionNumber].Choice4;

// 	//when finished, show them the results page
// 	if(questionNumber>=potterQuestions.length){
// 		//redirect to results page
// 	}
// }
