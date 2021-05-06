
var appMsgs = require("./appMsgs")
var userRepo = require("./userRepo")

//we are pointing it to folder-name
var logger = require("./logger");

var _ = require("underscore");

//**Underscore example */
var textMsg = "This is a text message";
var isString = _.isString(textMsg);
var isDate = _.isDate(textMsg);


logger.log("isString: "+ isString);
logger.log("isDate: "+ isDate);



//** 4th Example */
// console.log(userRepo.getUser());
// console.log(userRepo.getUsers());



//**Third Example */
// var msg = new appMsgs();
// console.log(msg.first);




//* Second example */
//console.log(appMsgs());


//* First Example */
// console.log(appMsgs.firstMsg);
// console.log(appMsgs.secondMsg);
// console.log(appMsgs.MsgObject);