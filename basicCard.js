var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
};

var questions = [];
var basicCardOne = new BasicCard('On which planet does Yoda train Luke?', 'Dagobah');
var basicCardTwo = new BasicCard('What did Samuel L. Jackson request from George Lucas in order to be in the Star Wars prequels?', 'Purple Lightsaber');

questions.push(basicCardOne);
questions.push(basicCardTwo);

var selection = 0;
function randomQuestion() {
	selection = Math.floor(Math.random() * (questions.length));
	console.log(questions[selection].front)
	console.log(questions[selection].back)
}

randomQuestion();

module.exports = BasicCard;