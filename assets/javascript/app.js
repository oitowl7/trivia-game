var score = 0
var randomNumber = 0;
var randomAnswerNumber = 0;
var indexUsed = [];
var randomWeights = [];
var timerTime = 30;
var questionsAnswered = 0;
var Timer;
var weights = [-2, -1, 1, 2, 0]
var jarJarBoolean = false;
var inputArray = [
	{
		question: "Describe your father/mentor",
		answers: [
			"1.) He could save others from death...but not himself. Ironic.",
			"2.) I didn't have a father. I was conceived by the force.",
			"3.) My mentor/boss is a giant worm.",
			"4.) He has a very particular set of skills that make him a nightmare.",
			"5.) Ooh mooey mooey I love you! ",
		]
	},
	{
		question: "What is your eye color?",
		answers: [
			"1.) Deep yellow/orange/brownish.",
			"2.) Bright yellow...sometimes covered up by a scary black helmet.",
			"3.) Blueish",
			"4.) Green. Literally my whole body is green.",
			"5.) Oh, maxi big da Force...",
		]
		
	},
	{
		question: "What is your ideal lightsaber?",
		answers: [
			"1.) Elegant with a deep red blade.",
			"2.) Double bladed red saberstaff...complete with cool ninja moves.",
			"3.) Purple...sitting on the fence between light and dark.",
			"4.) Good ol' blue or green.",
			"5.) Uh-oh! Biiiiiig Goober fish!",
		]
	},
	{
		question: "What is your ideal complexion?",
		answers: [
			"1.) White skin that gets wrinkly when I accidentally zap it.",
			"2.) I would rather cover myself in tattoos so you can't see my true complexion.",
			"3.) Black skin with a shaved head.",
			"4.) I always wanted to be green.",
			"5.) Icky, icky goo!",
		]
	},
	{
		question: "Which one of these seem like something you would say in difficult situation?",
		answers: [
			"1.) And we shall have...peace",
			"2.) This technological terror is nothing compared to the force.",
			"3.) He is too dangerous to be kept alive.",
			"4.) Do. Or do not. There is no try.",
			"5.) Wesa got a grand army. That's why you no liking us meesa thinks.",
		]
	}
];

$(document).ready(function() {
	hideGame();
	hideResult();
	showInstructions();
	score = 0;
});

var start = function(){
	questionsAnswered = 0;
	score = 0;
	indexUsed = [];
	jarJarBoolean = false;
	$("#result-img").attr('src', '');
	$("#result-description").html("");
	$("#paragon-score").html("");
	timerReset();
	hideInstructions();
	hideResult();
	showGame();
	gameDisplay();
}

var hideInstructions = function(){
	$(".instructions-div").hide();
}
var showInstructions = function(){
	$(".instructions-div").show();
}
var hideGame = function(){
	$(".game-div").hide();
}
var showGame = function(){
	$(".game-div").show();
}
var hideResult = function(){
	$(".results-div").hide();
}
var showResult = function(){
	$(".results-div").show();
}

var runTimer = function(){
	Timer = setInterval(function(){
		timerTime--
		$("#timer").text(timerTime);
		if(timerTime === 0){
			timerReset();
			nextQuestion();
			jarJarFxn();
		}
	},1000);
}

var timerReset = function(){
	clearInterval(Timer);
	$("#timer").text(timerTime);
	runTimer();
}

var stopTimer = function(){
	clearInterval(Timer);
	Timer = 0;
	$("#timer").text(Timer)
}

var gameDisplay = function(){
		rng();
		nextQuestion();
}

var rng = function(){
	randomNumber = Math.floor(Math.random() * 5);
	if (indexUsed.indexOf(randomNumber) === -1){
		indexUsed.push(randomNumber);
	} else {
		rng();
		return;
	}
}

var nextQuestion = function(){
	randomWeights = [];
	rngAnswer();
	$("#answer-1").text(inputArray[randomNumber].answers[randomAnswerNumber]);
	rngAnswer();
	$("#answer-2").text(inputArray[randomNumber].answers[randomAnswerNumber]);
	rngAnswer();
	$("#answer-3").text(inputArray[randomNumber].answers[randomAnswerNumber]);
	rngAnswer();
	$("#answer-4").text(inputArray[randomNumber].answers[randomAnswerNumber]);
	rngAnswer();
	$("#answer-5").text(inputArray[randomNumber].answers[randomAnswerNumber]);
}

var rngAnswer = function(){
	randomAnswerNumber = Math.floor(Math.random() * 5);
	if (randomWeights.indexOf(weights[randomAnswerNumber]) === -1){
		randomWeights.push(weights[randomAnswerNumber]);
	} else {
		rngAnswer();
		return;
	}
}

var answer = function(selection){
	scoreCheck(selection);
	score+= randomWeights[selection];
	randomWeights = [];
	questionsAnswered++;
	gameOverCheck();
}

var jarJarFxn = function(){
	questionsAnswered++;
	randomWeights = [];
	gameOverCheck();
}

var scoreCheck = function(selection){
	if (jarJarBoolean === false && randomWeights[selection] !== 0){
			jarJarBoolean = true;
	}
}

var gameOverCheck = function(){
	if (questionsAnswered < 5){
		gameDisplay();
		timerReset();
	}
	else{
		stopTimer();
		results();
	}
}
var descriptionArray = [
"Darth Nihilus, also known as the Lord of Hunger, was a Sith Lord who lived approximately 4,000 years BBY. <br><br> He was the only survivor of an attack on his planet and became so scarred and evil that he gained a hunger to feed on force power. It became so strong, he could consume the life on entire planets all at once.<br><br>",
"Vitiate, most of his life called the Sith Emperor or Valkorion, was a Sith Lord that recreated and led the Sith Empire for over 1300 years.<br><br>Born in 5,113 BBY and dying in 3,630 BBY, he led a long and evil life. He was able to stay alive so long through dark side magic and rituals.<br><br>Each time he performed the ritual, he would consume all life on the planet he was currently on.",
"Palpatine, also know as Darth Sidious, was a powerful Sith Lord. He was born in 82 BBY and died in 4 ABY, although there are legends his body was cloned and that he survived beyond 4 ABY.<br><br> &quotSheev&quot came to power as a senator from Naboo. From there, he became the Chancellor of the Republic and eventually, Emperor of the First Galactic Empire.",
"Darth Sion, also known as the Lord of Pain, was a Sith Lord that lived approximately 4,000 years BBY.<br><br>He was an immortal, masochistic sith that used his pain and suffering to increase his power. He used this power to keep himself alive.He began challenging jedi after jedi, defeating all he faced. This event went on to be known as the First Jedi Purge.",
"Darth Bane was a Sith Lord who lived around approximately 1,000 BBY. He was the last known sith survivor of the Jedi-Sith war.<br><br>After the civil war, Bane created the Rule of Two, which specified there could only ever be two sith. A master, and an apprentice. This rule allowed the sith to rise up 1,000 years later with Darth Sidious and Darth Vader.",
"Darth Vader, born Anakin Skywalker, was a sith lord. He was the epitome of intimidation, fear, and dread. He was the right hand of Palpatine and did all his dirty work without hesitation.<br><br>Unwavering after being converted to the dark side, he was aboard the Death Star when it performed its test on Alderaan. He was finally redeemed when he saved his son Luke and killed Palpatine.",
"Darth Maul was a Sith Lord during the late days of the Galactic Republic and the Galactic Empire.<br><br>He is known as one of the fiercest warriors ever. Trained as an assassin and fighter, his force skills were not his greatest asset. His will and determination, combined with his ferocity and hatred, made him one of the greatest individual lightsaber fighters ever.",
"Darth Plagueis was a Sith Lord. While not the best fighter, Darth Plagueis was one of the most powerful sith with force powers.<br><br>He was so wise and powerful that he could use the force to influence midi-chlorians to create life. However, he was murdered in his sleep by his apprentice. Ironic, he could save others from death, but not himself.",
"Count Dooku, also known as Darth Tyranus, was a Sith Lord active during the waning years of the Galactic Republic.<br><br>While not supremely strong with force powers, he was no slouch. However, in dueling, he was very strong. He took on both Obi Wan Kenobi and a young Anakin Skywalker and handled them easily. He was also a very good general and leader.",
"Kylo Ren is a member of the dark order called the Knights of Ren. He was being trained by Luke Skywalker to be a Jedi, but turned from his training to follow the dark side despite still having some good.<br><br>He is very strong in unique force powers. He can read minds of weaker minded individuals as well as freeze people and objects in telekinetic halts.",
"Revan, also known as Revan the Butcher, Darth Revan, and the Prodigal Knight, was a jedi, dark jedi, and Sith Lord living around 4,000 BBY. He was a jedi who fell to the dark side, and came back to the light during the Mandelorian Wars, Jedi Civil War, and Great Galactic War.<br><br>It is difficult to classify him as a hero or villain. One minute he is a sith, next a jedi.",
"Rey is a force user during the time after the Galactic Empire. She has picked up on force abilities despite having no training.<br><br>It is not yet known if she will be a hero or villain. She is to be taught by Luke Skywalker the ways of the force. She is certainly strong, but which way she will go is still unknown.",
"Mara Jade Skywalker was a smuggler, Hand of the Emperor, and later a Jedi Master on the Jedi Council. She was also married to Luke Skywalker.<br><br>Her story goes from one side to the other. In the end, she finally chose the light side, but it was a long journey to that point. She was a very skilled fighter, and also excelled in feats of speed as well as force valor and protection.",
"Mace Windu was a powerful Jedi Master during the waning days of the Galactic Republic. Second in command of the Jedi Council to Yoda, he is referred to by Anakin Skywalker as one of the most powerful Jedi.<br><br>Occasionally showing signs of a darker side, he used a purple lightsaber to signify this. However, he was a very good fighter, matching or even equaling Palpatine in combat.",
"Leia Oragana was a Jedi Knight and Princess of Alderaan. While not trained in the ways of the force as early or strictly as Luke, she is still a very potent user of the force.<br><br>While her primary mission and role was one of diplomacy, she still found uses for her force powers often. At one point, she held an exploding Millennium Falcon together long enough for it to land.",
"Aayla Secura was a Jedi Master. She was skilled at both lightsaber combat and using force powers.<br><br>She was a general during the Clone Wars. She was very well liked by her subordinates. One clone trooper said she personally saw all of them off and called them the bravest soldiers she had ever met. They killed her soon after that.",
"Plo Koon was a Jedi Master on the Jedi Council during the Clone Wars. He was a very skilled pilot and an expert swordsman.<br><br>He was also well known for his calm, serene demeanor. Even in the face of intense pressure, he never cracked and always made wise decisions.",
"Qui-Gon Jinn was a Jedi Master in the waning days of the Galactic Republic. He was well known for his wisdom and was not a bad duelist either.<br><br>He was a decent fighter, but he did lose to Darth Maul after holding his own for a while. However, his intense knowledge of the force allowed him to keep living as a force ghost after his demise.",
"Obi-Wan Kenobi was a Jedi Master and member of the Jedi Council during the Galactic Republic. He is known to have trained two of the most powerful Jedi ever as well as led the Republic during the Clone Wars<br><br>He was also a very gifted duelist, having defeated Darth Maul in somewhat lucky circumstances.",
"Yoda was a powerful Jedi Master. He was born around 900 years BBY. His wisdom and experience were unmatched among his peers.<br><br>He was also one of the best duelists of all time. Using his small frame to great effect, he was able to jump around and move more quickly than many were able to keep up with.",
"Luke Skywalker is, quite simply, the most powerful Jedi of all time. He defeated his father at the Battle of Endor and then Palpatine's clones many times over.<br><br>He was the strongest force user ever known. He also taught many new Jedi and raised it from the edge of extinction back to prominence.",
"You either are really dumb, or really don't pay very close attention to your timers.<br><br>That said, there is every chance that you may be the most powerful sith that ever lived. There is evidence that shows that one Jar Jar Binks was considered to be the big baddie in the Star Wars Prequels.<br><br>Thank God George Lucas isn't that dumb."
]

 var paragonArray = [
"You are the most evil being ever known.",
"You are the nearly imortal Sith Emperor",
"You are literally Emperor Plapatine",
"You are the cause of the First Jedi Purge",
"You are the creator of the Rule of Two",
"You are the epitome of fear and terror",
"You are one of the greatest hate filled fighters ever",
"You can create life with just your mind",
"You are a sith general",
"You are a young, angry, Han Solo killer",
"You are an enigma, both light and dark",
"You are a natural force user, but for which side?",
"You were once the Emperor's hand, but now you're a jedi",
"You are a powerful Jedi, but one with a darker edge",
"You are a master diplomat and gifted jedi",
"You are a skilled Jedi, and a well liked one at that",
"You are a calm fighter in the air and on the ground",
"You are one of the wisest Jedi of all",
"You have the high ground",
"You are freaking yoda yo",
"You are the strongest Jedi that ever lived",
"You are literally the worst"
 ]

var results = function(){
	hideGame();
	hideInstructions();
	showResult();
	// console.log(score);
	if (jarJarBoolean === false){
		$("#result-img").attr('src', 'assets/images/jarjar.jpg');
		$("#result-description").html(descriptionArray[21]);
		$("#paragon-score").html(paragonArray[21]);
	} else{
		$("#result-img").attr('src', 'assets/images/' + score + '.jpg');
		$("#result-description").html(descriptionArray[score + 10]);
		$("#paragon-score").html(paragonArray[score + 10]);
	}
}