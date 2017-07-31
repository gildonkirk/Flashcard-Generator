var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

var questions = [];
var clozeCardOne = new ClozeCard('Samuel L. Jackson requested from George Lucas that his lightsaber be purple.', 'his lightsaber be purple.');
var clozeCardTwo = new ClozeCard('Dagobah is the planet on which Yoda trains Luke.', 'Dagobah');

questions.push(clozeCardOne);
questions.push(clozeCardTwo);

var selection = 0;
function randomQuestion() {
	selection = Math.floor(Math.random() * (questions.length));
	console.log(questions[selection].partial)
	console.log(questions[selection].cloze)
}

randomQuestion();

module.exports = ClozeCard;