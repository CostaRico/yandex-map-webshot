'use strict';
var webshot = require('webshot');
var args = require('minimist')(process.argv.slice(2));
var presID = args.presID;

//webshot('http://of.ru/ex.html', 'google2.png',
//webshot(`http://localhost:9875/?id=${presID}`, `map_for_pres${presID}`,
console.log(presID);


//webshot(`http://localhost:3002/api/presentations/data/pdf_map?id=${presID}`, `/Users/costa/Sophie/new-api/preses/map_for_pres${presID}.png`,


//test
//webshot(`http://ya.ru`, `map_for_pres${presID}.png`,


//webshot('file:///Users/costa/Sophie/get_ya/ex.html', 'google11.png',
//webshot('http://ya.ru', 'google2.png',

webshot("http://sophie.of.ru/api/presentations/data/pdf_map?id="+presID, "./maps/map"+presID+".png",
	{
		//takeShotOnCallback: true,
		renderDelay: 8000,
		screenSize: {
    		width: 1110,
    		height: 803
  		},
	}, function(err) {
    console.log(err);
		process.exit();
});


//process.exit();
//console.log(require('phantomjs2').path)
