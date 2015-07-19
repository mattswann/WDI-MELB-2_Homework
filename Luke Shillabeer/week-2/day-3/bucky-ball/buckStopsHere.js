/*
  https://gist.github.com/mattswann/a86671fddee623efae3f
*/

var textArea   = document.getElementById("8ball-result");
var buckyImage = document.getElementById("buckyImage");

function returnRandStr(strArr) {
  return strArr[Math.floor(Math.random() * strArr.length)];
}

function makeChoice() {
  var result = returnRandStr(options);
  textArea.innerHTML = result;
}

var options = ["No", "Not today", "It is decidedly so", "Without a doubt",
  "Yes definitely", "You may rely on it", "As I see it yes", "Most likely",
  "Outlook good", "Signs point to yes", "Reply hazy try again",
  "Ask again later", "Better not tell you now", "Cannot predict now",
  "Concentrate and ask again", "Don't count on it", "My reply is no",
  "My sources say no", "Outlook not so good", "Very doubtful"
]

buckyImage.addEventListener('click', makeChoice);
