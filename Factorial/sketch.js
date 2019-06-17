var input;
var number;
var button;

var result;
function setup() {
	noCanvas();

	input = select('#number');
	button = select('#submit');
	button.mousePressed(factorial);
	input.changed(factorial);

	result = createP("");
}

function factorial(){
	var text = input.value();
	if(text != ""){
		number = int(text);
		result.html(getFact(number));
	}
}

function getFact(n){
	var num = n;
	var array = [];
	while(n != 0){
		array.push(n%10);
		n = floor(n/10);
	}
	for(var i = 2; i<num;i++){
		var carry = 0;
		for(var j = 0; j<array.length;j++){
			var mul = i*array[j]+carry;
			array[j] = mul%10;
			carry = floor(mul/10);
		}
		carry = int(carry);
		while(carry){
			array.push(carry%10);
			carry = floor(carry/10);
		}
	}

	var result = '';
	for(var i = array.length - 1; i>=0;i--){
		result += str(array[i]);
	}
	return result;
}
