function Bob() {

}

Bob.prototype.hey = function(input){
	if contains_only_numbers(input) return 'Whatever'

	if (input.toUpperCase() === input) 
		return 'Woah, chill out!'
	else if (input.match(/\?$/)) 
		return 'Sure.'
	else 
		return 'Whatever.'
}

function contains_only_numbers(inout) {

}
module.exports = Bob