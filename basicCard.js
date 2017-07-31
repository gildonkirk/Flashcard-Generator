var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
};

var questions = [];
var basicCardOne = new BasicCard('On which planet does Yoda train Luke?', 'Dagobah');
var basicCardTwo = new BasicCard('What did Samuel L. Jackson request from George Lucas in order to be in the Star Wars prequels?', 'Purple Lightsaber');
var basicCardThree = new BasicCard('What snow creature attacks Luke at the beginning of The Empire Strikes Back?', 'A Wampa');
var basicCardFour = new BasicCard('Who said, "Aren\'t you a little short to be a Storm Trooper?"', 'Princess Leia');

questions.push(basicCardOne);
questions.push(basicCardTwo);
questions.push(basicCardThree);
questions.push(basicCardFour);

var selection = 0;
function randomQuestion() {
	selection = Math.floor(Math.random() * (questions.length));
	console.log('You have 10 Seconds to answer the following question aloud:')
	setTimeout(function(){console.log(questions[selection].front);}, 3000);
	setTimeout(function(){console.log(questions[selection].back);}, 13000);
}

randomQuestion();

module.exports = BasicCard;