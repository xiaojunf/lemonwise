window.olark=function(r,V){r=function(o,y){return{downloadAssetsAndApplication:function(z,r,E,M,N,v,k){function B(O){var a=i.createElement("script");a.src=(k.location.protocol=="https:"?"https:":"http:")+"//"+O;a.async=!0;a.defer=!0;(i.getElementsByTagName("head")[0]||i.getElementsByTagName("body")[0]||i.body).appendChild(a)}function P(a){setTimeout(function(){B(a+"/cache.js?ts="+ +new Date)},1E3)}function Q(a){var j=+new Date;e.P("loadassets");B(e.assetHost+"/a/assets/v0/site/"+a+".js?cb="+j+"&v="+
v)}function R(){var a=w.match(/(olarkid=(0000-0000-0000-0000|1470-860-10-9245))/);return a&&a[2]?a[2]:null}function C(a,e){return(k.location.protocol=="https:"?"https:":"http:")+"//"+a+e}function a(){var a=Array.prototype.slice.call(arguments||[]).join(" "),e=k.name=k.name||Math.random().toString().replace("0.","oktab");a=["actor=jsclient","application="+encodeURIComponent(z),"location="+encodeURIComponent(i.location.href),"referrer="+encodeURIComponent(i.referrer.toString()),"message="+encodeURIComponent(a),
"tabname="+encodeURIComponent(e),"cachebreak="+encodeURIComponent(Math.random().toString())];olark._.isHypothesis&&a.push("hypothesis_name="+encodeURIComponent(olark._.hypothesisName));olark._.conversationId&&a.push("conversation_id="+encodeURIComponent(olark._.conversationId));olark._.visitorId&&a.push("visitor_id="+encodeURIComponent(olark._.visitorId));olark._.siteId&&a.push("site_id="+encodeURIComponent(olark._.siteId));(new Image).src="https://log.olark.com/jslog/?"+a.join("&")}var F=32,G="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
j=function(){function e(){var c=/(\;|^)\s*([^\=\s]+)\s*\=\s*([^\;]*)/g,d,b=[];try{for(;d=c.exec(i.cookie);)b.push({name:d[2],value:unescape(d[3])})}catch(h){a("alternate failed to parse:",h.message,"#cookie_altfail")}return b}function j(c){for(var d=e(),b,h=[],k=0;k<d.length;k++)b=d[k],b.name===c&&h.push(b.value);return h.length==1?h[0]:h.length==0?{}.undefinedValue:(a("alternate got multiple values for",c,"-",h.join(", "),"#warn #cookie_alt_multivalue"),h[0])}function s(c,d,b,h,j,x){function t(){if(b){var g=
new Date;g.setTime(g.getTime()+b);g="; expires="+g.toGMTString()}else g="";var a=j?"; domain="+j:"",k=escape(d.toString());i.cookie=c+"="+k+g+a+"; path="+h;if(b<0){if(g=p(c),typeof g!="undefined")throw Error("[olark] unable to delete cookie: "+c+"))="+e().length);}else if(g=p(c,!0),g!=d.toString())throw Error("[olark] unable to set cookie: "+c+", expected "+d+" but got "+g+"))="+e().length);}var f=k!=k.top?"#iframe_cookie":"";if(d||d===0)try{t()}catch(l){if(x)throw l;else try{i.cookie=c+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT",
t(),a("value of cookie",c,"was fixed #warn #cookie_needed_cleanpath",f)}catch(m){try{for(var g=k.location.hostname.split(".");g.length>2;)g.shift(),i.cookie=c+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=."+g.join(".")+"; path="+h;t();a("value of cookie",c,"was fixed #warn #cookie_needed_cleandomain",f)}catch(S){a(S.message,"#error #cookie_storefail",f)}}}else a("value of cookie",c,"was",d,", prevent write #error #cookie_writenull",f)}function p(c,d){var b=function(){for(var d=[],b=c+"=",e=i.cookie.split(";"),
h=0;h<e.length;h++){for(var g=e[h];g.charAt(0)==" ";)g=g.substring(1,g.length);g.indexOf(b)==0&&d.push(g.substring(b.length,g.length))}return d.length==1?d[0]:d.length==0?{}.undefinedValue:(a("got multiple values for",c,"-",d.join(", "),"#warn #cookie_orig_multivalue"),d[0])}();b=b?unescape(b):b;var h=d&&/^\s*$/.test(i.cookie)?" #emptycookie":"",k=j(c),f=[];k!==b&&(k?b?f.push("#cookie_alt_mismatch"):f.push("#cookie_alt_better"):b?f.push("#cookie_alt_worse"):f.push("#cookie_alt_noval"),k==b&&f.push("#cookie_alt_equiv"),
a("cookie",c,"alternate value got",k,"when original got",b,"))="+e().length,f.join(" ")));if(/^\s*$/.test(b))a("value of cookie",c,"is empty string, forcing to undefined #warn #cookie_emptystring"+h,"))="+e().length),b={}.undefinedValue;else if(b=="null")a("value of cookie",c,"is a string 'null', looks like it should have been null, forcing to null #warn #cookie_readnull"+h),b=null;else if(b=="undefined")a("value of cookie",c,"is a string 'undefined', looks like it should have been undefined, forcing to undefined #warn #cookie_readundefined"+
h),b={}.undefinedValue;else if(b=="**erased")b={}.undefinedValue;return b}function n(c,d){s(c,"**erased",-2592E6,m,f,d)}function l(c){for(var d=o.location.search.replace(/^\?/,"").split(/&/),a=d.length-1,h;a>=0;a--)if(h=d[a].split(/=/),h[0]==c)return h[1];return{}.undefinedValue}var m="/",f=null,q={};return{setPath:function(a){m=a},setDomain:function(a){f=a},isAllowedToWriteCookies:function(){var c=Math.random().toString().replace("0.",""),d=k!=k.top?!0:!1,b=k.navigator.cookieEnabled?!1:!0;try{if(b)return a("cannot set any cookies #nocookies_due_to_disabled"),
!1;else{var h;try{s("_okck",c,null,m,f,!0),n("_okck",!0),h=!0}catch(e){h=!1}if(h){var j;try{s("_okck",c,5E3,m,f,!0),n("_okck",!0),j=!0}catch(i){j=!1}return j?!0:(d?a("cannot set expirable cookies #nocookies_with_expiry_due_to_p3p"):a("cannot set expirable cookies #nocookies_with_expiry"),!1)}else return d?a("cannot set session cookies #nocookies_for_session_due_to_p3p"):a("cannot set session cookies #nocookies_for_session"),!1}}catch(l){return a("unexpected issue testing cookies:",l.message,"#error #unknown_cookie_test_error"),
!1}},set:function(c,d,b){if(!q[c])try{s(c,d,b||null,m,f)}catch(e){a("failed to create cookie:",e.toString(),"#error  #cookie_badset")}},get:function(c){try{return q[c]?l(c):p(c)}catch(d){return a("failed to read cookie:",d.toString(),"#error #cookie_badget"),null}},setAllowingNullAndUndefinedAndEmptyString:function(c,d,b){if(!q[c]){d===null?d="**null":typeof d=="undefined"?d="**undefined":d==""&&(d="**emptystr");try{s(c,d,b||null,m,f)}catch(e){a("failed to create cookie:",e.toString(),"#error  #cookie_badset")}}},
getAllowingNullAndUndefinedAndEmptyString:function(c){try{var d=q[c]?l(c):p(c);d=="**null"?d=null:d=="**undefined"?d={}.undefinedValue:d=="**emptystr"&&(d="");return d}catch(b){return a("failed to read cookie:",b.toString(),"#error #cookie_badget"),null}},erase:function(c){if(!q[c])try{n(c)}catch(d){a("failed to erase cookie:",d.toString(),"#error #cookie_baderase")}},backTheseCookiesByQueryString:function(a){for(var d=0;d<a.length;d++)q[a[d]]=!0}}}(),i=k.document,w=i.cookie,K=o.olark=k.olark,e=K._,
A=e.l,u=e.callstack=e.s||[],D=A.match(/((.+)\/(loader\d+|wc|olark|core|olark\-shopify)\..+)?/)[2]||"static.olark.com/jsclient",T=/^static\.olark\.com\/(javascript|js)\/.*$/.test(A);olark._.hypothesisName="master";olark._.isHypothesis=!1;if(j.isAllowedToWriteCookies()){olark._.cookieManager=j;olark._.assetHost="assets.olark.com";(function(e){var j=setTimeout(function(){a("boot time =",+new Date-e,"#slowboot #warn")},18E3);olark("api.chat.onReady",function(){clearTimeout(j)})})(+new Date);olark("api.boot.onIdentityReady",
function(a,e,j){function i(){var l=k.clicky;if(l&&l.olark){n=!1;try{l.olark(a,e,j)}catch(m){o.console&&o.console.warn&&o.console.warn("[olark] unable to connect with clicky: "+m.toString())}}else n&&setTimeout(i,600)}var n=!0;olark("api.boot.onWindowLoad",function(){setTimeout(function(){n=!1},2E3)});i()});T&&(D="static.olark.com/jsclient");e.P(3);(function(){var a=A.split("ts=");a.length==2&&j.set("olarkld",a[1],2592E6)})();olark._.versions={application:z,legacy:r,storage:E,popout:M,follow:N,loader:v};
olark._.preventBoot=!1;var U=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()),L=!0;e.f?(clearTimeout(e.f),e.f=null):e.noload=!0;if(y!==i)y.body.style.cssText="height:100%;margin:0px;padding:0px;background:transparent";(function(){function i(){var a;if(olark._.siteId&&olark._.visitorId&&olark._.conversationId)for(a=x.shift();a;)a(olark._.siteId,olark._.visitorId,olark._.conversationId),a=x.shift()}function r(){var a;if(q)for(a=t.shift();a;)a(),a=
t.shift()}function s(g){function d(){for(var a=g.replace(/\-/g,"").slice(0,8),c="",b=G,e=F-a.length;e--;)c+=b.charAt(Math.floor(Math.random()*b.length));c+=a;return c}function c(a){var d=RegExp("^["+G+"]+$");return a.length==F&&d.test(a)?!0:!1}function b(){o=!0;olark._.conversationId=d();j.set("wcsid",olark._.conversationId);olark._.isNewConversation=!0}function e(){o||a("creating new visitor ID when we already had a conversation ID #visitor_changed_on_conversation #warn");olark._.visitorId=d();j.set("hblid",
olark._.visitorId,63072E6)}olark._.siteId=g;var h=j.get("hblid"),f=j.get("wcsid"),l=j.get("_oklv"),m=l?+new Date-parseInt(l):0,o=!1,n=j.get("_okgid");!f||!l||m>H?b():I&&n!==J?b():c(f)||(a("regenerating invalid wcsid #warn #invalid_wcsid_in_cookie",f),b());j.set("_oklv",(+new Date).toString());h?c(h)||(a("regenerating invalid hblid #warn #invalid_hblid_in_cookie",h),e()):e();olark._.visitorId=olark._.visitorId||h;olark._.conversationId=olark._.conversationId||f;if(j.get("hblid")!==olark._.visitorId)a("hblid could not be set #error #noboot #unset_hblid"),
olark._.preventBoot=!0;if(j.get("wcsid")!==olark._.conversationId)a("wcsid could not be set #error #noboot #unset_wcsid"),olark._.preventBoot=!0;if(!olark._.visitorId||!olark._.conversationId)olark._.preventBoot=!0,k.location.protocol=="https:"?a("preventing boot due to missing hblid/wcsid #noboot_on_ssl #warn"):a("preventing boot due to missing hblid/wcsid #noboot #warn");i()}function p(){var g,b,f;if(q&&v&&!h&&!olark._.preventBoot&&(!U||!L)){olark._.isHypothesis?(g="static.olark.com/jsclient-"+
olark._.hypothesisName+"/application.js",b=g.split("application.js")[0]):d?(g=d,a("using custom application from inline HTML: "+g+" #custom_application_from_inline"),b=g.split("application.js")[0]):c?(g=c,a("using custom application from asset server: "+g+" #custom_application_from_assets"),b=g.split("application.js")[0]):(g=D+"/application.js",b=D);var i=/olarkap=(([^;]+.)?(olark.(com|net)(%3Ad+)?|battleship:d+)[^;]+)/;f=/olarkap=([a-zA-Z0-9]+)/;i=i.test(w)?w.match(i)[1]:null;f=f.test(w)?w.match(f)[1]:
null;g=i?/((assets|static)\.olark\.(com|net))/.test(i)?g+"?v="+z:unescape(i):f?g+"?v="+f:g+"?v="+z;e.popout=C(b,"/popout.html");e.follow=C(b,"/follow.html");e.plugins=C(b,"/plugins");f=e;i=b;var l=E,m=/^static\.olark\.com.+$/.test(i),n=m||k.location.protocol=="https:",p=!(o.localStorage||o.globalStorage)&&y.documentElement&&y.documentElement.addBehavior;f.storage=m&&p?"https://static.olark.com/jsclient/storage.html?v="+l:(n?"https":"http")+"://"+i+"/storage.html?v="+l;e.hlog=a;f=(f=g.match(/(.+)\/javascript\/.+/))?
f[1]:"static.olark.com";K.__buildinfo={olarkfile:"/javascript/olark.js",corefile:"/javascript/application.js",jshost:f,dev:/^\s*static\.olark\.com\s*$/.test(f)?!1:!0,strict:j.get("olarkst")=="1"?!0:!1};e.P("loadcore");B(g);/(wc\.js|olark\.js|core\.js)/.test(A)||P(b)}}function n(b){try{var c;switch(b[0]){case "load":q=!0;p();r();break;case "api.chat.connect":h=!1;p();break;case "api.boot.onIdentityReady":return x.push(b[1]),i(),[b[0],function(){}];case "api.boot.onWindowLoad":return t.push(b[1]),r(),
[b[0],function(){}];case "call":switch(b[1]){case "identify":c=R()||b[2][0];f&&c&&c!=f?o.console&&o.console.warn&&o.console.warn("[olark] cannot call olark.identify with different identities"):(f=c||f,Q(f),s(f));break;case "configure":var e=b[2][1];switch(b[2][0]){case "system.asset_host":olark._.assetHost=e;break;case "system.allow_mobile_boot":e&&(L=!1);break;case "system.application":d=e;break;case "system.path":j.setPath(e);break;case "system.domain":j.setDomain(e);break;case "system.max_milliseconds_conversation_can_be_idle":H=
olark._.maxMillisecondsConversationCanBeIdle=e;break;case "system.group":J=e;break;case "system.group_change_ends_chat":I=e?!0:!1;break;case "system.use_querystring_for_cookies":j.backTheseCookiesByQueryString(e||[])}}}return b}catch(k){return a("unable to handle early deferred call:",k.message,"#warn #early_deferred_fail"),b}}var l,m,f,q=!1,c=null,d=null,b={},h=!1,v=!1,x=[],t=[],H=olark._.maxMillisecondsConversationCanBeIdle=12E5,I=!1,J;e.s={push:function(a){u.push(a);u[u.length-1]=n(a)}};e.finish=
function(a){v=!0;if(a)typeof a=="string"?c=a:(b=a,c=(b.system?b.system.application:null)||c,e.defaults=b);e.P("assets");p()};for(l=0;l<u.length;l++)m=u[l],u[l]=n(m)})()}}}}(window,document);r.downloadAssetsAndApplication("8128c50c5627299a35c08d63e1da236b","cf3baf1e7eced7c4961b1013620784fd","428f5e6fe255baf2ff0f6622092b3073","67eb4b8f3d220f0203de2402160945af","147d190ede9e97876a7e502ef65ae9e6","Loader12b90cf32cfa990569d209b6555197cdd",window);return olark}();