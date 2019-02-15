'use strict';

var botState = {};

class State{
	constructor(name, description, value){
		this.name = name;
		this.description = description;
	}
}

botState['censor'] = new State('censor', 
	"Wekwek will censor bad words when turned ON.", true);

module.exports = botState;