var questionBox = document.getElementById("question");
var submitButton = document.getElementById("submit");
var responseArea = document.getElementById("answer");

var responses = {

  "Happy St Patrick's": {
    active: true,
    text: "Tildely de, Potatahs.",
    rules: function () {
      return true;
    }
  },

  "Do you want a pint of Guinness?" : {
    active: true,
    counter: 1,
    text: "Just the luck of the Irish!",
    rules: function () {
      if (responses["Do you want a pint of Guinness?"].counter >= 2) {
        responses["Paddy, it's your round."].active = true;
        return true;
      } else {
        responses["Do you want a pint of Guinness?"].counter += 1;
        return false;
      }
    }
  },

  "Paddy, it's your round.": {
    active: false,
    text: "Look, a Leprechaun!",
    rules: function () {
      return true;
    }
  },

  "Anything.": {
    active: true,
    text: "You crazy.",
    rules: function () {
      return true;
    }
  }
};

function submitQuestion() {
  var input = questionBox.value || "Anything.";
  var response = responses[input];

  var rules = response.rules();
  if (response.active === true && rules) {
    responseArea.innerHTML = response.text
  }
}

submitButton.addEventListener("click", submitQuestion);
