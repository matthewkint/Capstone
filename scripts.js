
var counter = 1;
var employeeData = JSON.parse(data);//data is a json object declared in employees.js
console.log(employeeData);
// console.log(employeeData.length)

var mainQuestions = {"Q1": "You’ve made it to Hogwarts, which means you’ve already bought a wand from Ollivander’s. What material is at its core?", "1a": "Phoenix Feather", "1b": "Dragon Heartstring", "1c": "Unicorn Hair", 
"Q2": "During the end-of-year exams, you notice that one of your classmates was using an enchanted quill. You come top of the class anyway, but they are second. What do you do?", "2a":"Tell the professor immediately – cheating is wrong, no matter what.", "2b": "Nothing, but if I hadn't come top of the class, I'd definitely tell the professor.", "2c": "Encourage the other student to admit what they'd done to the professor.", "2d":"Give them a high five for managing to sneak the quill into the exam.",
"Q3": "You would be most hurt if a person called you?", "3a": "Weak", "3b": "Ignorant", "3c": "Unkind", "3d": "Boring",
"Q4": "You're locked in a duel with a skilled opponent. They fire an unknown spell at you, and you shout…", "4a": "Expelliarmus!", "4b":"Protego!", "4c": "Stupefy!", "4d": "Crucio!", 
"Q5": "it's your fifth year at Hogwarts, and you've just received a Howler from your parents. What for?", "5a": "Sneaking into the Forbidden Forest at night on a dare.", "5b": "Getting caught cheating in my Divination O.W.L.","5c": "Being put in detention after I was caught in the library after hours.","5d": "Nothing! I'd never do anything to warrant a Howler.",
"Q6": "Which of these most accurately describes your relationship with your closest friends?","6a": "I love surrounding myself with people – the more friends I have, the better!","6b": "I have a few very close friends that I would trust with my life.","6c": "I tend to be wary around new people, so don't make new friends often.","6d": "I find myself becoming friends with people who can help me to succeed.",
"Q7": "Which of your skills are you most proud of?","7a": "My ability to absorb new information.","7b": "My ability to make new friends.","7c": "My ability to get what I want.","7d": "My ability to keep secrets.",
"Q8": "You're allowed a pet at Hogwarts. Which do you bring?","8a": "Owl","8b": "Cat","8c": "Toad","8d": "Nothing. I can't be trusted to look after a pet!",
"Q9": "Choose a Deathly Hallow.","9a": "The Elder Wand","9b": "The Resurrection Stone","9c": "The Cloak of Invisibility",
"Q10" : "Which Hogwarts house do you feel you identify with most closely?","10a": "Gryffindor","10b": "Hufflepuff", "10c": "Ravenclaw","10d": "Slytherin"}

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

function findSelection() {
	var options = document.getElementsByName("option")
	for(i = 0; i < options.length; i++) { 
		if(options[i].checked) 
		console.log("User chose: " + options[i].value)
	}
	loadQuestion();
} 
var qNum = 1
function loadQuestion() {
	console.log("i is: " +  qNum)

	if (qNum <= 10) {
		document.getElementById("question").innerHTML = mainQuestions["Q" + qNum];
		document.getElementById("option0").innerHTML = mainQuestions[qNum + "a"];
		document.getElementById("option1").innerHTML = mainQuestions[qNum + "b"];
		document.getElementById("option2").innerHTML = mainQuestions[qNum + "c"];
		document.getElementById("option3").innerHTML = mainQuestions[qNum + "d"];

		qNum += 1;
	} else {
		document.getElementById("question").innerHTML = "End of quiz";
	}
}