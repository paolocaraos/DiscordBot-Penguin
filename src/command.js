'use strict';

var command = {};

class Command{
	constructor(name, description, callback){
		this.name = name;
		this.description = description;
		this.callback = callback;
	}
}

command['help'] = new Command('help', "Lists all commands.",
	function(client, user, userID, channelID, args, state){
		var msg = "";
		for(var key in command){
			msg += "!wek " + command[key].name + " - " + command[key].description + "\n";
		}
		client.sendMessage({
			to: channelID,
			message: global.utils.textWrap('code', msg)
		});
	}
);

command['censor'] = new Command('censor', "Toggles server censorship.",
	function(client, user, userID, channelID, args, state){
		var toggle = state['censor'].getVal();
		console.log(toggle);
		state['censor'].setVal(!toggle); 
		client.sendMessage({
			to: channelID,
			message: "Censorship has been turned " 
				+ (state['censor'].getVal() ?  "ON" : "OFF") + "."
		});
	}
);

command['time'] = new Command('time', "Tells date and time.", 
	function(client, user, userID, channelID, args, state){
		client.sendMessage({
			to: channelID,
			message: global.utils.textWrap('italics',""+ new Date())
		});
	}
);

command['intro'] = new Command('intro', "Introduction.", 
	function(client, user, userID, channelID, args, state){
		client.sendMessage({
			to: channelID,
			message: "Hi, it me, Wekwek!"
		});
	}
);


module.exports = command;