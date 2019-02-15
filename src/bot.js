'use strict';

try {
    var discord = require('discord.io');
} catch (e) {
    console.log('discord.io missing. Run `npm install` first.');
    process.exit();
}

var logger = require('winston');
var auth = require('./config.json');
var command = require('./command.js');
var state = require('./botState.js');

//Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console,{
	name : 'console',
	colorize : true,
	silent : false
});

logger.level='debug';

//Initialize Discord Bot
var client = new discord.Client({
	token: auth.token,
	autorun: true
});

client.on('ready', function () {
    logger.info('Connected');
	logger.info(client.username + '-('+client.id+')');
	logger.log('debug', 'Hi, it me, Wekwek!');
});

client.on('message', function(user, userID, channelID, message, evt){
	/*
	Our client needs to know if it will execute a command 
	It will listen for messages that will start with '!'
	*/

	if(userID != client.id){
	   	if(message.substring(0,4) == '!wek'){
			var args = message.substring(1).split(' ');
			console.log(args);

			try{
				command[args[1]].callback(this, user, userID, channelID, args.slice(1), state);
			}catch(err){
				client.sendMessage({
					to: channelID,
					message: 'Wekwek didn\'t understand.'
				});
				logger.log('debug', err.message);
			}
		}

		if(state['censor'] == true){
			//censor stuff
		}		
	}
});