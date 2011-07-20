/*jsl:option explicit*/

/*
2008-2009 Brett Knights. All rights reserved. This material may not be reproduced,
displayed, modified or distributed without the express prior written
permission of the copyright holder.
*/

var KOTN = function(){

	return {

	setReturnURL:	function (){
		this.setCookie('intendedLocation', window.location.href);
	},

	checkLoggedIn: function(isTrue, isFalse){ // callbacks for discovered state

		if (!(this.custId && parseInt(this.custId, 10) > 0)){ // must be set up in client header
			isFalse(true);
			return;
		}
		if(this.isLogged && this.loginTimeout && new Date.getTime() < this.loginTimeout){
			isTrue();
			return;
		}
		try{
			var origHandler = window.onerror;
			function checkedIt(isLogged){
				try{
					if(isLogged) isTrue();
					else isFalse();
				}catch(e){alert(e);}
				window.onerror = origHandler;
			}
			window.onerror = function(msg, url, line){checkedIt(false);  return true;};
			// customer info suitelet : available without login:Y; All Roles; Released
			var myself = this;
			jQuery.getJSON("https://checkout.netsuite.com/app/site/hosting/scriptlet.nl?script=7&deploy=1&compid=983810&h=1811a89d2417deb526fd&jsoncallback=?", function(ui, success){
				try{
					if (ui.accountId && typeof ui.accountId != "undefined"){
						if(parseInt(ui.accountId, 10) > 0){
								myself.isLogged = true;
								myself.custId = ui.accountId;
								myself.loginTimeout = new Date().getTime() + (20 * 60000); // trust state for 20 minutes. basically means check once per page load.
								checkedIt(true);
								return;
						}
					}
				}catch(e){;}
				checkedIt(false);
			});
		}catch(e){
			checkedIt(false);
		}
	},

	getCookie: function (name){
		this.wpCookie = this.wpCookie || new Cookie("wpClient");
		return this.wpCookie[name];
	},

	setCookie: function (name, value){
		this.wpCookie = this.wpCookie || new Cookie("wpClient");
		this.wpCookie[name] = value;
		this.wpCookie.store(null, "/");
	},

	clearCookie: function (name){
		this.wpCookie = this.wpCookie || new Cookie("wpClient");
		if(typeof this.wpCookie[name] != undefined) delete this.wpCookie[name];
		this.wpCookie.store(null, "/");
	}
};
}();

//DTH Jun14-2010: Added to style login button.  Done with jQuery to attempt to avoid unwanted styling of other input buttons
jQuery(document).ready(function(){
	var $ = jQuery;
	if((/[&?]login=T\b/).test(document.location.search)) { // adjust login screen
		$("input#submitter.bgbutton[value='Sign In'] , input#.bgbutton[value='Register']").css(
		    {'background':'url("/c.983810/site/images/button-cyan-bg.png") repeat-x scroll 50% 50% #00A4E4',
		     'border':'1px solid #00A4E4',
		     'color':'white',
		     'height':'36px',
		     'line-height':'16px',
		     'padding':'5px 10px'});
		$("td.smalltext:contains('register'):last").hide();
	}
});
/* not relying on general return mechanism
jQuery(document).ready(
function(){
	if(window.console)console.log("about to check");

	$("#div__header a, td.footer a").click(function(){KOTN.clearCookie('intendedLocation'); return true;});

	KOTN.checkLoggedIn(
	function(){
		var intendedLocation = KOTN.getCookie('intendedLocation');
		if(window.console)console.log("intendedLocation: "+ intendedLocation);
		if(intendedLocation){
			KOTN.clearCookie('intendedLocation');
			document.location = unescape(intendedLocation);
		}
	},
	function(){
		if(window.console)console.log("not logged");
		KOTN.clearCookie('intendedLocation');
		if(KOTN.forceLogin) KOTN.forceLogin();
	}
);});
*/