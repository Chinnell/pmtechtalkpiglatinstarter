// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add way to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.


// Create a Document Ready Function. 
	// Create a click handler that takes in the value from the input box. 
		// transfrom the input to pig latin. 
		// Displays the result to the screen
$(document).ready(function() {
	$(".btn").click(function(){
		var input = ($(".form-control").val()).toLowerCase();
		var result = toPigLatinSentence(input);
   		$('.result-text').html("<h3>" + result + "</h3>");
    });
});


// Create the wordStartsWithVowel function that takes a word as a parameter
	// This function should return true if the input word starts with a vowel, otherwise it should return false.
function wordStartsWithVowel(word) {
  	var firstLetter = word[0];
	
	if(firstLetter==="a"||firstLetter==="e"||firstLetter==="i"||firstLetter==="o"||firstLetter==="u"){
		console.log(true);
	} else {
		console.log(false);
	}
}
console.log(wordStartsWithVowel("Hola"));
// Create the wordStartsWithVowelTransformation function that takes a word as a parameter
	// Appends "way" to the end of the word 
function wordStartsWithVowelTransformation(word) {
	//Declare a variable called newWord
	var newWord;
	//Assign: newWord the value of  word + "ay"
	newWord = word + "ay";
	//Add "ay" to the end of the word
	console.log(newWord);
	// Retun the new word.
	return(newWord);
}


// Create the wordStartsWithConsonantTransformation function that takes a word as a parameter
	// Moves the first consonant to the end of the word and appends "ay" to the end of the word
function wordStartsWithConsonantTransformation(word) {
	//Declare a variable called newWord
	var newWord;
		
	//Declare a variable called firstLetter and assign it the value of the first letter of the word
	var firstLetter = word.slice(0,1);
	//Declare a variable called lastLetters assign it the value of the last letters of the word
	var lastLetters = word.slice(1,word.length);
	//Reassign newWord the lastletters + firstLetter + "ay"
	newWord = lastLetters + firstLetter + "ay";
	//return the new word
	return newWord;
}
console.log(wordStartsWithConsonantTransformation("Hello"));


// Create the toPigLatinWord function that takes a word as a parameter. 
	// If the word starts with a vowel return the result the wordStartsWithVowelTransformation function. 
	// Otherwise return the result of the wordStartsWithVowelTransformation. 

function toPigLatinWord(word) {
	var isVowel = wordStartsWithVowel(word);
	
	if(isVowel === true){
		return wordStartsWithConsonantTransformation(word);
	} else {
		return wordStartsWithConsonantTransformation(word);
	}
	
	return word;
}


// Create the toPigLatinSentence function that takes a sentence as a parameter
	//Itterates through all the words in the sentence and transforms each word to pig latin

function toPigLatinSentence(sentence) {
	
	//Declare an new variable called sentenceArray.
	
	//Use .split() to transfrom sentence string into and array of words and assign it to sentenceArray
	
	//Declare an new variable called newArray.
	
	//Create a for loop that loops over each item in the sentenceArray
	for(i=0; i>sentenceArray.length; i=i+1){
		
	}
		//For each word call pigLatinizeWord and push it into you new array
	
	//Join the array back into a string and return the result.

}
