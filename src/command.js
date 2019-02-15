'use strict';

var command = {};

class Command{
	constructor(name, description, callback){
		this.name = name;
		this.description = description;
		this.callback = callback;
	}
}

command['help'] = new Command('help', "Lists all commands",
	function(client, user, userID, channelID, args, state){
		var msg = "```";
		for(var key in command){
			msg += "!wek " + command[key].name + " - " + command[key].description + "\n";
		}
		client.sendMessage({
				to: channelID,
				message: msg + "```"
		});
	}
);

command['censor'] = new Command('censor', "Toggles server censorship",
	function(client, user, userID, channelID, args, state){
		var before = state['censor'];
		state['censor'] = !state['censor']; 
		client.sendMessage({
			to: channelID,
			message: "Censorship has been turned " 
				+ (state['censor'] ?  "ON" : "OFF") + "."
		});
	}
);


module.exports = command;