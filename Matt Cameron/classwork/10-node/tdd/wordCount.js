var wordCount = function(string) {
	var words = string.match(/\S+/g);
	return words.length;
}

module.exports = wordCount