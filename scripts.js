var counter = 1;
var questionNumber = 0; //actually it's one, but we'll say zero for our array :).
var employeeData = JSON.parse(data); //data is a json object declared in data.js
console.log(employeeData);
var potterQuestions = JSON.parse(potter);
var disneyQuestions = JSON.parse(disney);
var MainQuestions = JSON.parse(main);
var officeQuestions = JSON.parse(office);
var cloneQuestions = JSON.parse(clone);
var quizType = "";
var numberQuestion = 1; //for the findSelection function


//how to make changing key names example from editing employee data
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
}else if (value == "disney"){
	window.location.replace("quizDisney.html");
	
	// console.log(value)
}else if (value == "harry"){
	window.location.replace("quizHarry.html");
	// console.log(value)
}else{
	window.location.replace ("quizOffice.html");
	// console.log(value)
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
	var employee = localStorage.getItem("user");
	if (document.getElementById("nextButton").value == "Finish") {
		//questionNumber = 1; //is this necessary

		//store employee responses to local storage.
		//Note that using this method this data will be replaced if 
		//a different employee takes the quiz)
		var input = JSON.stringify(employeeData[employee]);
		localStorage.userInput = input;
		localStorage.quizTaken = quizType;

		//for testing
		console.log(localStorage.userInput);
		console.log("\nQuiztype\n");
		console.log(localStorage.quizTaken);
		alert("Last chance to look at the console before you're redirected");
		//redirects to results webpage. 
		window.location.replace("results.html");
		
	} else {
		var options = document.getElementsByName("option")
		for(i = 0; i < options.length; i++) {
			if(options[i].checked) {
			console.log("User chose: " + options[i].value)

			//get user's index number from local storage
			//var employee = localStorage.getItem("user");
			console.log(employee);

			//store option number as choice[questionNumber] in employee object
			employeeData[employee]["choice" + questionNumber] = options[i].value;
	
			//print results to console to make sure it's working
			console.log(qNum)
			console.log(employeeData)
			//example code used earlier to edit employee objeccts
			//employeeData[i]["choice" + (b + 1)] = '';
			}
		}
		loadQuestion(quizType);
	}
	questionNumber++;
} 
var qNum = 0;
var noSkip = true
// takes the quiz the user has pick and intergrated the main questions into the theme quiz 
function loadQuestion(value) {
	quizType = value
	if(value == 'disney'){
		if (qNum < 10){
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
	if (qNum < 10) {
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
	if (qNum < 10) {
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
	if (qNum < 10) {
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

// function storeResult(){
// 	var options = document.getElementsByName("option");
// 	for(i = 0; i < options.length; i++) {
// 		if(options[i].checked) {
// 			return console.log(options[i].value + "LOOK at this number and see");
// 			//themeResults = themeResults + Number(options[i].value);
// 		}
// 	}
// }

// shows the results of theme test 
// displays img, charater name, description
function showResult(){
	var total = 0
	output = JSON.parse(localStorage.userInput)
	outputArray = Object.values(output)
	console.log(output)
	console.log(outputArray)
	outputArray.splice(0, 4)
	for(i=0; i<outputArray.length; i++){
		if(i % 2 == 1){
			total = total + Number(outputArray[i])
		}
	}
	if (localStorage.quizTaken == "disney"){
		if(total < 7 ){
			document.getElementById("charater").innerHTML = "Vanellope Von Schweetz";
			document.getElementById("imageCharater").src = "images/Results/Vanellope.jpg";
			document.getElementById("charaterDescription").innerHTML = "You are strong, fun, and an absolute legend on the race track. You’re always up for an adventure and you approach every challenge with positivity and curiosity. You’re our hero!";
			//console.log("LEss than 7");

		} else if(total >= 7 && total < 14){
			document.getElementById("charater").innerHTML = "Jasmine";
			document.getElementById("imageCharater").src = "images/Results/Jasmine.jpg";
			document.getElementById("charaterDescription").innerHTML = "You’re driven, energetic, and compassionate. You want to see the world and go on as many adventures as possible. We know you are destined for great things!";
			
			//console.log("Under 14");

		} else if (total >= 14 && total < 21 ){
			document.getElementById("charater").innerHTML = "Ariel";
			document.getElementById("imageCharater").src = "images/Results/Ariel.jpg";
			document.getElementById("charaterDescription").innerHTML = "You’re friendly and fun, with curiosity that will take you on grand adventures. Just be careful not to sign any contracts with an evil sea witch!";
			
			//console.log("Under 21");

		} else {
			document.getElementById("charater").innerHTML = "Cinderella";
			document.getElementById("imageCharater").src = "images/Results/Cinderella.jpg";
			document.getElementById("charaterDescription").innerHTML = "You never give up on your dreams, and you always remember to be kind to others. No matter what challenges you face, you’ll be brave enough to conquer them!";
			
			//console.log("Under 30")
		}
	} // end of theme if statement 
	 else if (localStorage.quizTaken == "office"){
		if(total < 7 ){
			document.getElementById("charater").innerHTML = "Meredith Palmer";
			document.getElementById("imageCharater").src = "images/Results/Meredith.jpg";
			document.getElementById("charaterDescription").innerHTML = "Meredith was always a bit of a party animal but you could probably keep up with her!";
			// console.log("LEss than 7");
		} else if(total >= 7 && total < 14){
			document.getElementById("charater").innerHTML = "Angela Martin";
			document.getElementById("imageCharater").src = "images/Results/Angela.jpg";
			document.getElementById("charaterDescription").innerHTML = "You love cats and you love keeping your private life private. You might also find clothes in the children's section of Gap. You're just like Angela Martin.";
			// console.log("Under 14");
		} else if (total >= 14 && total < 21 ){
			document.getElementById("charater").innerHTML = "Jim Halpert ";
			document.getElementById("imageCharater").src = "images/Results/Jim.png";
			document.getElementById("charaterDescription").innerHTML = "You love pranks and making your time at work fun!";
			// console.log("Under 21");
		} else {
			document.getElementById("charater").innerHTML = "Michael Scott";
			document.getElementById("imageCharater").src = "images/Results/Michael.jpg";
			document.getElementById("charaterDescription").innerHTML = "Whether you've claimed to be the world's best boss before or not, it looks as though you're just like Michael Scott!";
			// console.log("Under 30")
		}
	} // end of theme if statement 
	else if (localStorage.quizTaken == "harry"){
		if(total < 7 ){
			document.getElementById("charater").innerHTML = "Slytherin";
			document.getElementById("imageCharater").src = "images/Results/Slytherin.jpg";
			document.getElementById("charaterDescription").innerHTML = "You are relentless in your pursuit of success, making you a perfect fit for Slytherin, but your willingness to take risks makes you somewhat compatible with the typical traits of Gryffindor house. People who don’t know you well are often intimidated by your reserved demeanour, and you have very few close friends. You are loyal to few, and definitely prioritise personal success over close relationships.";
			
			console.log("LEss than 7");
		} else if(total >= 7 && total < 14){
			document.getElementById("charater").innerHTML = "Hufflepuff";
			document.getElementById("imageCharater").src = "images/Results/Hufflepuff.png";
			document.getElementById("charaterDescription").innerHTML = "You belong in Hufflepuff without question, but your Ravenclaw-esque appreciation for knowledge means your many friends come to you when they need advice from someone with a level head. While you enjoy any kind of learning, working as part of a team is where you truly thrive. You are an excellent collaborator, and understand that communication with others is an essential part of learning and, more importantly, growing as a person.";
			
			console.log("Under 14");
		} else if (total >= 14 && total < 21 ){
			document.getElementById("charater").innerHTML = "Ravenclaw";
			document.getElementById("imageCharater").src = "images/Results/Ravenclaw.jpg";
			document.getElementById("charaterDescription").innerHTML = "Ravenclaw appreciation for knowledge means your many friends come to you when they need advice from someone with a level head. While you enjoy any kind of learning, working as part of a team is where you truly thrive. You are an excellent collaborator, and understand that communication with others is an essential part of learning and, more importantly, growing as a person.";
			
			console.log("Under 21");
		} else {
			document.getElementById("charater").innerHTML = "Gryffindor";
			document.getElementById("imageCharater").src = "images/Results/Gryffindor.jpg";
			document.getElementById("charaterDescription").innerHTML = "You are relentless in your pursuit of success, making you a perfect fit for Gryffindor People who don’t know you well are often intimidated by your reserved demeanour, and you have very few close friends. You are loyal to few, and definitely prioritise personal success over close relationships.";
			console.log("Under 30")
		}
	} // end of theme if statement 
	else {
		if(total < 7 ){
			document.getElementById("charater").innerHTML = "Ahsoka";
			document.getElementById("imageCharater").src = "images/Results/Ahsoka.jpg";
			document.getElementById("charaterDescription").innerHTML = "You’re proof that you don’t have to look tough to be tough. Outspoken and sometimes a little headstrong, you’ve come to understand the importance of experience and accepting you still have much to learn.";
			console.log("LEss than 7");
		} else if(total >= 7 && total < 14){
			document.getElementById("charater").innerHTML = "Anakin";
			document.getElementById("imageCharater").src = "images/Results/Anakin.jpg";
			document.getElementById("charaterDescription").innerHTML = "Are you the One? You form strong attachments to the people in your life and have trouble letting go, it’s true. But you’ve proven time and again that you’re charismatic, courageous, and capable of greatness.";
			console.log("Under 14");
		} else if (total >= 14 && total < 21 ){
			document.getElementById("charater").innerHTML = "Padmé";
			document.getElementById("imageCharater").src = "images/Results/Padme.jpg";
			document.getElementById("charaterDescription").innerHTML = "You understand that sometimes there are things no one can fix, but you still choose to always see the best in people. With a wisdom beyond your years, your interests lie in equality for everyone.";
			console.log("Under 21");
		} else {
			document.getElementById("charater").innerHTML = "Captain Rex";
			document.getElementById("imageCharater").src = "images/Results/Rex.png";
			document.getElementById("charaterDescription").innerHTML = "In your book, experience outranks everything. Loyal to the core, you always stand up for what’s right and come to the aid of your friends, who you consider as close as family.";

	

			console.log("Under 30")
		}
	} // end of else statment
}// end of function 