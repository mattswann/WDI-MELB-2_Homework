String.prototype.reverse = function() {
return this.split("").reverse().join("");
};

function palindrome(word) {
	return (word.toLowerCase() === word.toLowerCase().reverse()) ? true : false;
}