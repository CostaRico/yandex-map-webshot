'use strict';
var webshot = require('webshot');
var args = require('minimist')(process.argv.slice(2));
let presID = args.presID;
let width = args.width;
let height = args.height;
let action = args.action

//webshot('http://of.ru/ex.html', 'google2.png', 
//webshot(`http://localhost:9875/?id=${presID}`, `map_for_pres${presID}`, 
console.log(presID);
webshot(`http://localhost:3002/api/presentations/data/${action}?id=${presID}`, `/Users/costa/Sophie/new-api/maps/map_for_pres${presID}.png`, 
//webshot('file:///Users/costa/Sophie/get_ya/ex.html', 'google11.png', 
//webshot('http://ya.ru', 'google2.png', 
	{
		takeShotOnCallback: true,
		renderDelay: 3000, 
		screenSize: {
    		width: width, 
    		height: height
  		},
  		//timeout: 20*1000,

		//phantomConfig:{ 'ignore-ssl-errors': 'true', 'ssl-protocol': 'any' , debug: true},
		//phantomPath: require('phantomjs2').path//'/Users/costa/Sophie/new-api/get_ya_map/node_modules/phantomjs2/bin/phantomjs2'
		/*script: function() {
  		  window.onload = function() {
        		if (window.callPhantom === 'function') {
        			alert('!');
            		window.callPhantom('takeShot');
        		}
    		};
		},*/
	}, function(err) {
    console.log(err);
});

//console.log(require('phantomjs2').path)