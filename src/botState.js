'use strict';

var botState = {};

class State{
	constructor(name, description, value){
		this.name = name;
		this.description = description;
		this.value = value;
	}

	getVal(){
		return this.value;
	}

	setVal(v){
		this.value = v;
	}
}

botState['censor'] = new State('censor', 
	"Wekwek will censor bad words when turned ON.", false);

module.exports = botState;