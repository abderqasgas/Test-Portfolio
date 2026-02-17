const quote = document.getElementById('quote');


const quotes = [
	'William Shakespeare: "All the world’s a stage, and all the men and women merely players."',
	'Albert Einstein: "Life is like riding a bicycle. To keep your balance, you must keep moving."',
	'Mahatma Gandhi: "You must be the change you wish to see in the world."',
	'Nelson Mandela: "Resentment is like drinking poison and then hoping it will kill your enemies."',
	'Lao Tzu: "If you are depressed, you are living in the past; if you are anxious, you are living in the future. If you are at peace, you are living in the present."',
	'Confucius: "It does not matter how slowly you go as long as you do not stop."',
	'Seneca: "Luck is what happens when preparation meets opportunity."',
	'Oscar Wilde: "To live is the rarest thing. Most people exist, that is all."',
	'Mark Twain: "The secret of getting ahead is getting started."',
	'Benjamin Franklin: "Either write something worth reading or do something worth writing."',
	'Aristotle: "Quality is not an act, it is a habit."',
	'Socrates: "An unexamined life is not worth living."',
	'Sun Tzu: "In the midst of chaos, there is also opportunity."',
	'Ralph Waldo Emerson: "Do not go where the path may lead; go instead where there is no path."',
	'Emily Dickinson: "Hope is the thing with feathers that perches in the soul."',
	'Thomas Edison: "Genius is one percent inspiration, ninety-nine percent perspiration."',
	'Abraham Lincoln: "Whatever you are, be a good one."',
	'Marcus Aurelius: "You have power over your mind - not outside events. Realize this, and you will find strength."',
	'Plato: "Wise men speak because they have something to say; fools because they have to say something."',
	'Goethe: "Knowing is not enough; we must apply. Willing is not enough; we must do."',
	'Buddha: "The mind is everything. What you think you become."',
	'Rumi: "What you seek is seeking you."',
	'William James: "Act as if what you do makes a difference. It does."',
	'Kahlil Gibran: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars."',
	'Theodore Roosevelt: "Do what you can, with what you have, where you are."'
];


const dailyQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = dailyQuote;
