'use strict';

var utils = {}


/*		Wraps text in Discord markup formatting.
*
*		@param{string} 		mode - Markup style
*								   [Code Block, Bold, Italics, Bold Italics]
*		
*		@param{string} 		txt  - Text to be wrapped
*		@returns{string}	     - Modified String
*/
utils.textWrap = function(mode, txt){
	var wrapper = {};
	wrapper['code'] 		= "```";
	wrapper['italics'] 		= "*";
	wrapper['bold']			= "**";
	wrapper['bold italics'] = "***";
	wrapper['underline']	= "__";
	wrapper['strikethrough']= "~~";
	var result = "";
	try{
		result += wrapper[mode] + txt + wrapper[mode];
	}catch(err){
		console.log("Invalid option.");
	}finally{
		return result;
	}
};

module.exports = utils;