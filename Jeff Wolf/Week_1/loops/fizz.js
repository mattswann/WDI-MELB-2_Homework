console.log("Fizzbuzz Project is all go");
var max = 101;
//above is the maximum count
var result;
var x = 1;
//above is where the count begins from
while(x<max) {
    if (x%15 === 0)  {
        result = 'fizzbuzz';
}   else if (x%3 === 0) {
        result = 'buzz';
}   else if (x%5 === 0)  {
        result = 'fizz';
}   else   {
        result = x;
}
x++;
//the above ensures the count from var "x" to var "max"!
console.log(result);
}



/* alternative version...
var counter = 1;
var maxValue = 20;

while (counter <= 20) {
	if ((counter % 3 === 0) && (counter & 5 === 0)) {
		console.log('fizzbuzz');
	
	}	else if(console % 3 === 0) {
		console.log('fizz');
	
	}	else if (counter % 5 === 0) {
		console.log('buzz')
	
	} else {
		console.log(counter);
	}
	counter++
}
*/