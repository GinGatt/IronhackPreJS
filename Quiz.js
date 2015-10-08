var user = {}
var responses = []

function question1() {
  	var name = prompt('What is your name?')
  	user.name = name
}

function question2(){
	var firstQ = prompt('Is a blue moon more frequent than a red moon? (Yes or No)')
	if (firstQ.toLowerCase()==='yes'){
		alert("Nope. Blue moons are oddly common.")
		firstQ = false
	}
	else if (firstQ.toLowerCase() === 'no'){
		firstQ = true
	}
	else{
		alert("Please answer either Yes or No");
	  	return question2();
	}
	responses.push(firstQ);
}

function question3(){
	var secondQ = prompt("Who is Phish's lead singer? (Richard Nixon, Mama Cass, Trey Anastasio)")
	switch(secondQ.toLowerCase()){
		case 'trey anastasio':
			secondQ = true;
			responses.push(secondQ);
			break;
		case 'richard nixon':
			alert("History major you are not.")
			secondQ = false;
			responses.push(secondQ);
			break;
		case 'mama cass':
			alert("Nope. Dead.")
			secondQ = false;
			responses.push(secondQ);
			break;
		default:
			alert("Please answer with Richard Nixon, Mama Cass, or Trey Anastasio.");
			return question3();	
	}
}
function question4(){
	var thirdQ = prompt('Is 5%4 > 4%5? (Yes or No)')
	thirdQ = thirdQ.toLowerCase();
	if (thirdQ === 'yes'){
		alert("WRONG!!");
		thirdQ = false;
		responses.push(thirdQ);
	}
	else if (thirdQ === 'no'){
		thirdQ = true;
		responses.push(thirdQ);
	}
	else{
		alert("Don't be a dick. Yes or No.");
		return question4();
	}
}
function question5(){
	var fourthQ = prompt("Give me a number. I'll tell you the factorial of that number!")
	function factorial(num){
		if(num === 0){return 1;}
		return num * factorial(num -1); 
	}
	if (!isNaN(parseFloat(fourthQ)) && isFinite(fourthQ)){
		alert(factorial(parseFloat(fourthQ)));
		function question6(){
			var fourth_result = prompt("Was my math correct? (Yes or No)")
			fourth_result = fourth_result.toLowerCase();
			if (fourth_result === 'yes'){
			fourth_result = true;
			responses.push(fourth_result);
			}
			else if (fourth_result === 'no'){
				fourth_result = false;
				alert("My math unlike yours was correct.")
				responses.push(fourth_result);
			}
			else{
				alert("Don't be a dick. Yes or No.");
				return question6();
			} 
		}
		question6();
		return factorial(fourthQ);
	}
	else{
		alert("Give me a number!!");
		return question5();
	}
}

function evaluate(responsesArray) {
// declare two variables to store the totals
	var correct, incorrect;
	correct = [];
	incorrect = [];
// populate the “totals” variables from the “responsesArray”
	for (var i=0; i < responsesArray.length; i++) {
		if(responsesArray[i]===true){
			correct.push(responsesArray[i]);
		}
		else if(responsesArray[i]===false){
			incorrect.push(responsesArray[i]);
		}
	};
// save the “totals” variables inside the user object
	var num_correct, num_incorrect;
	num_correct = correct.length;
	num_incorrect = incorrect.length;
	user.correct = num_correct;
	user.incorrect = num_incorrect;

// call showResults
	showResults();
}

function showResults() {

// display the user results
	var score;
	score = 100*(parseFloat(user.correct)/(parseFloat(user.correct)+ parseFloat(user.incorrect)));
	alert('You got '+ user.correct + ' correct and '+ user.incorrect +' incorrect. Your score is a '+ score +' .');
	}

question1(); 
question2();
question3();
question4();
question5();

// call the function, passing it the responses array
evaluate(responses);
