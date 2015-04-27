// this keyword

// 1st rule - default's to global scope
// 2nd rule - implcicit; call func via obj
//            is set to the object
// 3rd rule - explicit; call/apply/bind
// 4th rule - new keyword

var fullname = 'dt';

function person() {
  console.log(this.fullname);
}

var cody = {
  fullname: 'cody',
  greet: person,
  foo: function() {
    console.log("my full name is " + this.fullname)
  },
  thisPrint: function() {
    console.log(this);
  }
}

var perry = {
  fullname: "pezza",
}

// 1st rule
person();

// 2nd rule 
cody.greet();

// 3rd rule
person.call(perry);

// 4th rule 

