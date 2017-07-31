var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

var questions = [];
var clozeCardOne = new ClozeCard('Samuel L. Jackson requested from George Lucas that his lightsaber be purple.', 'his lightsaber be purple.');
var clozeCardTwo = new ClozeCard('Dagobah is the planet on which Yoda trains Luke.', 'Dagobah');
var clozeCardThree = new ClozeCard('A Wampa attacks Luke at the beginning of The Empire Strikes Back.', 'A Wampa');
var clozeCardFour = new ClozeCard('Princess Leia said, "Aren\'t you a little short to be a Storm Trooper?".', 'Princess Leia');
var clozeCardError = new ClozeCard('Throw', 'Error');


questions.push(clozeCardOne);
questions.push(clozeCardTwo);
questions.push(clozeCardThree);
questions.push(clozeCardError);

var selection = 0;
function randomQuestion() {
	selection = Math.floor(Math.random() * (questions.length));
	if (questions[selection].fullText.indexOf(questions[selection].cloze) !== -1){
		console.log('You have 10 Seconds to say the missing word or phrase:')
		setTimeout(function(){console.log(questions[selection].partial);}, 3000);
		setTimeout(function(){console.log(questions[selection].cloze);}, 13000);
	} else {
		console.log('Error: cloze not part of full text.');
	};
};

randomQuestion();

module.exports = ClozeCard;