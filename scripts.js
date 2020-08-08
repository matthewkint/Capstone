var counter = 1;
var questionNumber = 0; //actually it's one, but we'll say zero for our array :).
var employeeData = JSON.parse(data);//data is a json object declared in data.js
console.log(employeeData);
var potterQuestions = JSON.parse(potter);
console.log(potterQuestions);
var disneyQuestions = JSON.parse(disney);
var MainQuestions = JSON.parse(main);
var officeQuestions = JSON.parse(office);
var cloneQuestions = JSON.parse(clone);
var quizType = "";
var numberQuestion = 1; //for the findSelection function

//how to make change key names example from editing employee data
// var choiceNum = ""
// for (i=0; i<=4; i++) {
// 	for (b=0; b<=19; b++){
// 		// choiceNum = "choice" + (b+1);
// 		// console.log(choiceNum);
// 		// console.log(typeof choiceNum)
// 		employeeData[i]["choice" + (b + 1)] = '';
// 	}
// }//end of for loop

function signIn(){
	var inputUsername = '';
	var inputPassword = '';

	if (counter > 3){
		alert("You ran out of attempts.\nSince you seem like a nice person you can just reload the page :)");
		return;
	}

	inputUsername = document.getElementById('username').value;
	inputPassword = document.getElementById('password').value;

	if (inputUsername != "" && inputPassword != "") {
		for (entry = 0; entry < employeeData.length; entry++) {
			if (inputUsername == employeeData[entry].idEmployees){				
				console.log("Username, idEmployees: " + inputUsername, employeeData[entry].idEmployees);
				if (employeeData[entry].Password == inputPassword){
					window.localStorage.setItem("user", entry);
					window.location.replace("./quiz_selector.html");
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
	} else {
		alert("Please enter a username and password")
	}

}//end of signIn()


//Picking a quiz to take
function startQuiz(value){
	quizType = value
if(value == "clone"){
	window.location.replace("quizClone.html");
	console.log(value)
}else if (value == "disney"){
	window.location.replace("quizDisney.html");
	//window.location.replace("quiz.html");
	console.log(value)
}else if (value == "harry"){
	window.location.replace("quizHarry.html");
	console.log(value)
}else{
	window.location.replace ("quizOffice.html");
	console.log(value)
}
}

var questionForm = document.querySelector("#questionForm");
console.log(questionForm);

if (questionForm) {
	questionForm.addEventListener("submit", function(event) {
		findSelection();
		event.preventDefault();
	}, false);
}

function findSelection() {
	if (document.getElementById("nextButton").value == "Finish") {
		//questionNumber = 1; //is this necessary
		window.location.replace("results.html");
	} else {
		var options = document.getElementsByName("option")
		for(i = 0; i < options.length; i++) {
			if(options[i].checked) {
			console.log("User chose: " + options[i].value)

			//get user's index number from local storage
			var employee = localStorage.getItem("user");
			console.log(employee);

			//store option number as choice[questionNumber] in employee object
			employeeData[employee]["choice" + questionNumber] = options[i].value;

			//print results to console to make sure it's working
			console.log(qNum)
			console.log(employeeData);

			//example code used earlier to edit employee objeccts
			//employeeData[i]["choice" + (b + 1)] = '';

			//what?
			var userSelection = options[i].value;
			}
		}
		console.log(quizType);
		loadQuestion(quizType);
	}
	questionNumber++;
} 
var qNum = 0;
var noSkip = true
function loadQuestion(value) {
	quizType = value
	if(value == 'disney'){
		if (qNum <= 10){
			if(noSkip == true){
				document.getElementById("question").innerHTML = disneyQuestions[qNum].Question;
				document.getElementById("option0").innerHTML = disneyQuestions[qNum].Choice1;
				document.getElementById("option1").innerHTML = disneyQuestions[qNum].Choice2;
				document.getElementById("option2").innerHTML = disneyQuestions[qNum].Choice3;
				document.getElementById("option3").innerHTML = disneyQuestions[qNum].Choice4;

				noSkip = false;
			} else {
				qNum -= 1;
				document.getElementById("question").innerHTML = MainQuestions[qNum].Question;
				document.getElementById("option0").innerHTML = MainQuestions[qNum].Choice1;
				document.getElementById("option1").innerHTML = MainQuestions[qNum].Choice2;
				document.getElementById("option2").innerHTML = ''
				document.getElementById("option3").innerHTML = ''
				noSkip = true;

			}
			for (i=0; i<4; i++) {
				document.getElementById("radio" + i).checked = false;
			}
			qNum += 1;
			console.log(qNum);
		} else {
			document.getElementById("question").innerHTML = "End of quiz";
	
			var optionDivs = document.getElementsByClassName("option")
			for(i = 0; i < optionDivs.length; i++) {
				optionDivs[i].style.display = "none";	
			}
	
			document.getElementById("nextButton").value = "Finish";
	}
	} else if (value == 'harry'){
		quizType = value
	if (qNum <= 10) {
		if(noSkip == true){
			document.getElementById("question").innerHTML = potterQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = potterQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = potterQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = potterQuestions[qNum].Choice3;
			document.getElementById("option3").innerHTML = potterQuestions[qNum].Choice4;

			noSkip = false;
		} else {
			qNum -= 1;
			document.getElementById("question").innerHTML = MainQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = MainQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = MainQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = ''
			document.getElementById("option3").innerHTML = ''
			noSkip = true;
		}
		for (i=0; i<4; i++) {
			document.getElementById("radio" + i).checked = false;
		}

		qNum += 1;
		console.log(qNum)
	} else {
		document.getElementById("question").innerHTML = "End of quiz";

		var optionDivs = document.getElementsByClassName("option")
		for(i = 0; i < optionDivs.length; i++) {
			optionDivs[i].style.display = "none";	
		}

		document.getElementById("nextButton").value = "Finish";
	}
	


	
} else if(value == 'office'){
	if (qNum <= 10) {
		if(noSkip == true){
			document.getElementById("question").innerHTML = officeQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = officeQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = officeQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = officeQuestions[qNum].Choice3;
			document.getElementById("option3").innerHTML = officeQuestions[qNum].Choice4;

			noSkip = false;
		} else {
			qNum -= 1;
			document.getElementById("question").innerHTML = MainQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = MainQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = MainQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = ''
			document.getElementById("option3").innerHTML = ''
			noSkip = true;
		}
		for (i=0; i<4; i++) {
			document.getElementById("radio" + i).checked = false;
		}

		qNum += 1;
	} else {
		document.getElementById("question").innerHTML = "End of quiz";

		var optionDivs = document.getElementsByClassName("option")
		for(i = 0; i < optionDivs.length; i++) {
			optionDivs[i].style.display = "none";	
		}

		document.getElementById("nextButton").value = "Finish";
	}



} else {
	if (qNum <= 10) {
		if(noSkip == true){
			document.getElementById("question").innerHTML = cloneQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = cloneQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = cloneQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = cloneQuestions[qNum].Choice3;
			document.getElementById("option3").innerHTML = cloneQuestions[qNum].Choice4;

			noSkip = false;
		} else {
			qNum -= 1;
			document.getElementById("question").innerHTML = MainQuestions[qNum].Question;
			document.getElementById("option0").innerHTML = MainQuestions[qNum].Choice1;
			document.getElementById("option1").innerHTML = MainQuestions[qNum].Choice2;
			document.getElementById("option2").innerHTML = ''
			document.getElementById("option3").innerHTML = ''
			noSkip = true;
		}
		for (i=0; i<4; i++) {
			document.getElementById("radio" + i).checked = false;
		}

		qNum += 1;
	} else {
		document.getElementById("question").innerHTML = "End of quiz";

		var optionDivs = document.getElementsByClassName("option")
		for(i = 0; i < optionDivs.length; i++) {
			optionDivs[i].style.display = "none";	
		}

		document.getElementById("nextButton").value = "Finish";
	}


}
}