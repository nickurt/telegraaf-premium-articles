// ==UserScript==
// @name        Telegraaf Premium Articles
// @namespace   http://telegraaf.nl
// @version     0.1
// @description Read Telegraaf Premium Articles
// @match       http://www.telegraaf.nl/*
// @grant       none
// @copyright   2014
// ==/UserScript==

function sprintf( format ) {
	for( var i=1; i < arguments.length; i++ ) {
    	format = format.replace( /%s/, arguments[i] );
  	}
  	return format;
}

var productPromotion ='?utm_campaign=twitter';
var premium = $('.premiumcontent > div > div'); 
var fullFunctionInput = "newnavigate('%s', event)";

// Delete cookie
document.cookie = "wkpr=null; expires=0; domain=.telegraaf.nl; path=/";

for (i = 0; i < premium.length; i++) {
	if(!premium[i].hasAttribute('onclick')) continue;

	var url = premium[i].getAttribute('onclick').substr(13,(premium[i].getAttribute('onclick').length-23));
	premium[i].setAttribute('onclick', sprintf(fullFunctionInput, url+productPromotion)); 
}