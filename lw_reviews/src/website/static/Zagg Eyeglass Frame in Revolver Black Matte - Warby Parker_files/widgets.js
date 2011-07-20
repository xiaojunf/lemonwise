(function(a,b){function w(a){for(var b=1,c;c=arguments[b];b++)for(var d in c)a[d]=c[d];return a}function v(a){return Array.prototype.slice.call(a)}function u(a,b){for(var c=0,d;d=a[c];c++)if(b==d)return c;return-1}function t(){var a=v(arguments),b=[];for(var c=0,d=a.length;c<d;c++)a[c].length>0&&b.push(a[c].replace(/\/$/,""));return b.join("/")}function s(a,b,c){var d=b.split("/"),e=a;while(d.length>1){var f=d.shift();e=e[f]=e[f]||{}}e[d[0]]=c}function r(){}function q(a,b){this.id=this.path=a,this.force=!!b}function p(a,b){this.id=a,this.body=b,typeof b=="undefined"&&(this.path=this.resolvePath(a))}function o(a,b){this.deps=a,this.collectResults=b,this.deps.length==0&&this.complete()}function n(a,b){this.deps=a,this.collectResults=b}function m(){for(var a in y)if(y[a].readyState=="interactive")return G[y[a].id]}function l(a,b){var c;!a&&x&&(c=F||m()),c?(delete G[c.scriptId],c.body=b,c.execute()):(E=c=new p(a,b),D[c.id]=c);return c}function k(){var a=v(arguments),b,c;typeof a[0]=="string"&&(b=a.shift()),c=a.shift();return l(b,c)}function j(a,b){var c=b.id||"",d=c.split("/");d.pop();var e=d.join("/");return a.replace(/^\./,e)}function i(a,b){function c(a){return p.exports[j(a,b)]}var d=[];for(var e=0,f=a.length;e<f;e++){if(a[e]=="require"){d.push(c);continue}if(a[e]=="exports"){b.exports=b.exports||{},d.push(b.exports);continue}d.push(c(a[e]))}return d}function h(){var a=v(arguments),b=[],c,d;typeof a[0]=="string"&&(c=a.shift()),N(a[0])&&(b=a.shift()),d=a.shift();return l(c,function(a){function c(){var c=i(v(b),e),f;typeof d=="function"?f=d.apply(e,c):f=d,typeof f=="undefined"&&(f=e.exports),a(f)}var e=this,f=[];for(var h=0,k=b.length;h<k;h++){var l=b[h];u(["require","exports"],l)==-1&&f.push(j(l,e))}f.length>0?g.apply(this,f.concat(c)):c()})}function g(){var a=v(arguments),b,c;typeof a[a.length-1]=="function"&&(b=a.pop()),typeof a[a.length-1]=="boolean"&&(c=a.pop());var d=new o(f(a,c),c);b&&d.then(b);return d}function f(a,b){var c=[];for(var d=0,g;g=a[d];d++)typeof g=="string"&&(g=e(g)),N(g)&&(g=new n(f(g,b),b)),c.push(g);return c}function e(a){var b,c;for(var d=0,e;e=g.matchers[d];d++){var f=e[0],h=e[1];if(b=a.match(f))return h(a)}throw new Error(a+" was not recognised by loader")}function d(){a.using=H,a.provide=I,a.define=J,a.loadrunner=K;return O}function c(a){for(var b=0;b<g.bundles.length;b++)for(var c in g.bundles[b])if(c!=a&&u(g.bundles[b][c],a)>-1)return c}var x=a.attachEvent&&!a.opera,y=b.getElementsByTagName("script"),z=0,A,B=b.createElement("script"),C={},D={},E,F,G={},H=a.using,I=a.provide,J=a.define,K=a.loadrunner;for(var L=0,M;M=y[L];L++)if(M.src.match(/loadrunner\.js(\?|#|$)/)){A=M;break}var N=Array.isArray||function(a){return a.constructor==Array};r.prototype.then=function(b){var c=this;this.started||(this.started=!0,this.start()),this.completed?b.apply(a,this.results):(this.callbacks=this.callbacks||[],this.callbacks.push(b));return this},r.prototype.start=function(){},r.prototype.complete=function(){if(!this.completed){this.results=v(arguments),this.completed=!0;if(this.callbacks)for(var b=0,c;c=this.callbacks[b];b++)c.apply(a,this.results)}},q.loaded=[],q.prototype=new r,q.prototype.start=function(){var a=this,b,d,e;if(e=D[this.id]){e.then(function(){a.complete()});return this}(b=C[this.id])?b.then(function(){a.loaded()}):!this.force&&u(q.loaded,this.id)>-1?this.loaded():(d=c(this.id))?g(d,function(){a.loaded()}):this.load();return this},q.prototype.load=function(){var b=this;C[this.id]=b;var c=B.cloneNode(!1);this.scriptId=c.id="LR"+ ++z,c.type="text/javascript",c.async=!0,c.onerror=function(){throw new Error(b.path+" not loaded")},c.onreadystatechange=c.onload=function(c){c=a.event||c;if(c.type=="load"||u(["loaded","complete"],this.readyState)>-1)this.onreadystatechange=null,b.loaded()},c.src=this.path,F=this,y[0].parentNode.insertBefore(c,y[0]),F=null,G[c.id]=this},q.prototype.loaded=function(){this.complete()},q.prototype.complete=function(){u(q.loaded,this.id)==-1&&q.loaded.push(this.id),delete C[this.id],r.prototype.complete.apply(this,arguments)},p.exports={},p.prototype=new q,p.prototype.resolvePath=function(a){return t(g.path,a+".js")},p.prototype.start=function(){var a,b,d=this,e;this.body?this.execute():(a=p.exports[this.id])?this.exp(a):(b=D[this.id])?b.then(function(a){d.exp(a)}):(bundle=c(this.id))?g(bundle,function(){d.start()}):(D[this.id]=this,this.load())},p.prototype.loaded=function(){var a,b,c=this;x?(b=p.exports[this.id])?this.exp(b):(a=D[this.id])&&a.then(function(a){c.exp(a)}):(a=E,E=null,a.id=a.id||this.id,a.then(function(a){c.exp(a)}))},p.prototype.complete=function(){delete D[this.id],q.prototype.complete.apply(this,arguments)},p.prototype.execute=function(){var a=this;typeof this.body=="object"?this.exp(this.body):typeof this.body=="function"&&this.body.apply(window,[function(b){a.exp(b)}])},p.prototype.exp=function(a){this.complete(this.exports=p.exports[this.id]=a||{})},o.prototype=new r,o.prototype.start=function(){function a(){var a=[];b.collectResults&&(a[0]={});for(var c=0,d;d=b.deps[c];c++){if(!d.completed)return;d.results.length>0&&(b.collectResults?d instanceof n?w(a[0],d.results[0]):s(a[0],d.id,d.results[0]):a=a.concat(d.results))}b.complete.apply(b,a)}var b=this;for(var c=0,d;d=this.deps[c];c++)d.then(a);return this},n.prototype=new r,n.prototype.start=function(){var a=this,b=0,c=[];a.collectResults&&(c[0]={}),function d(){var e=a.deps[b++];e?e.then(function(b){e.results.length>0&&(a.collectResults?e instanceof n?w(c[0],e.results[0]):s(c[0],e.id,e.results[0]):c.push(e.results[0])),d()}):a.complete.apply(a,c)}();return this},h.amd={};var O=function(a){return a(g,k,O,define)};O.Script=q,O.Module=p,O.Collection=o,O.Sequence=n,O.Dependency=r,O.noConflict=d,a.loadrunner=O,a.using=g,a.provide=k,a.define=h,g.path="",g.matchers=[],g.matchers.add=function(a,b){this.unshift([a,b])},g.matchers.add(/(^script!|\.js$)/,function(a){var b=new q(a.replace(/^\$/,g.path.replace(/\/$/,"")+"/").replace(/^script!/,""),!1);b.id=a;return b}),g.matchers.add(/^[a-zA-Z0-9_\-\/]+$/,function(a){return new p(a)}),g.bundles=[],A&&(g.path=A.getAttribute("data-path")||A.src.split(/loadrunner\.js/)[0]||"",(main=A.getAttribute("data-main"))&&g.apply(a,main.split(/\s*,\s*/)).then(function(){}))})(this,document);window.__twttrlr = loadrunner.noConflict();__twttrlr(function(using, provide, loadrunner, define) {provide("util/iframe",function(a){var b=document.createElement("div");a(function(a){b.innerHTML='<iframe src="'+a.url+'" allowtransparency="true" frameborder="0" scrolling="no"/>';var c=b.firstChild.cloneNode(!1);c.src=a.url,c.className=a.className||"";for(var d in a.css)c.style[d]=a.css[d];c.title=a.title||"";if(a.replace){var e=a.replace.parentNode;e.replaceChild(c,a.replace)}else document.body.insertBefore(c,document.body.firstChild);return c})});
provide("util/querystring",function(a){function e(a){var b={},d,e,f,g;if(a){d=a.split("&");for(g=0;f=d[g];g++)e=f.split("="),e.length==2&&(b[c(e[0])]=c(e[1]))}return b}function d(a){var c=[];for(var d in a)a[d]!==null&&typeof a[d]!="undefined"&&c.push(b(d)+"="+b(a[d]));return c.sort().join("&")}function c(a){return decodeURIComponent(a)}function b(a){return encodeURIComponent(a).replace(/\+/g,"%2B")}a({decode:e,encode:d,encodePart:b,decodePart:c})});
provide("util/nodeselect",function(a){var b=document,c="querySelectorAll"in b?function(a,c){return b.querySelectorAll(a+"."+c)}:"getElementsByClassName"in b?function(a,c){var d=b.getElementsByClassName(c),e,f=[];for(i=0;e=d[i];i++)e.tagName.toLowerCase()==a&&f.push(e);return f}:function(a,c){var d=b.getElementsByTagName(a),e,f=new RegExp("(?:^|\\s+)"+c+"(?:\\s+|$)"),g=[];for(i=0;e=d[i];i++)f.test(e.className)&&g.push(e);return g};a(c)});
provide("$vendor/domready/ready.js", function(exports) {!function(a){function k(){b=1;for(var a=0,d=c.length;a<d;a++)c[a]()}var b=0,c=[],d,e,f=!1,g=a.createElement("a"),h="DOMContentLoaded",i="addEventListener",j="onreadystatechange";/^loade|c/.test(a.readyState)&&(b=1),a[i]&&a[i](h,e=function(){a.removeEventListener(h,e,f),k()},f),g.doScroll&&a.attachEvent(j,d=function(){/^c/.test(a.readyState)&&(a.detachEvent(j,d),k())});var l=g.doScroll?function(a){self!=top?b?a():c.push(a):!function(){try{g.doScroll("left")}catch(b){return setTimeout(function(){l(a)},50)}a()}()}:function(a){b?a():c.push(a)};typeof module!="undefined"&&module.exports?module.exports={domReady:l}:window.domReady=l}(document);exports();loadrunner.Script.loaded.push("$vendor/domready/ready.js")});
provide("util/domready",function(a){using("$vendor/domready/ready.js",function(){a(domReady)})});
provide("util/util",function(a){function d(a,b){for(var c=0,d;d=a[c];c++)if(b==d)return c;return-1}function c(a){return b([],a)}function b(a){for(var b=1,c;c=arguments[b];b++)for(var d in c)a[d]=c[d];return a}a({aug:b,array:c,indexOf:d})});
provide("tfw/widget/base",function(a){using("util/util","util/domready","util/nodeselect","util/querystring","util/iframe",function(b,c,d,e,f){function o(a){return a&&j.byId[a]?j.byId[a].element:null}function n(){l(),c(function(){l()})}function m(a){i=a}function l(){var a=i.widgets,b,c;for(var e in a){e.match(/\./)?b=d.apply(this,e.split(".")):b=document.getElementsByTagName(e);for(var f=0,g;g=b[f];f++)c=new a[e](g),j.list.push(c),j.byId[c.id]=c,c.render(i)}}var g=0,h,i,j={list:[],byId:{}},k=function(){};b.aug(k.prototype,{_:function(a){var b=this.lang;if(!b||!this.langs.hasOwnProperty(b))b="en";return this.langs[b][a]},add:function(a){j.list.push(this),j.byId[this.id]=a},create:function(a,b,c,d){this.id=this.generateId();return f({url:a,css:{width:c[0]+(typeof c[0]!="string"?"px":""),height:c[1]+(typeof c[1]!="string"?"px":"")},className:b,id:this.id,title:d,replace:this.originElement})},params:function(){var a=this.originElement.href&&this.originElement.href.split("?")[1],b=a?e.decode(a):{};return b},generateId:function(){return this.originElement.id?this.originElement.id:"twitter_tweet_button_"+g++}}),a({Base:k,init:m,embed:n,find:o,TWITTER_PROFILE_URL:/^https?\:\/\/(?:www\.)?twitter\.com\/(?:#!?\/)?([a-zA-Z0-9_]{1,20})\/?$/})})});
provide("util/events",function(a){using("util/util",function(b){function d(){this.completed=!1,this.callbacks=[]}var c={bind:function(a,b){this._handlers=this._handlers||{},this._handlers[a]=this._handlers[a]||[];return this._handlers[a].push(b)},unbind:function(a,c){if(!!this._handlers[a])if(c){var d=b.indexOf(this._handlers[a],c);d>=0&&this._handlers[a].splice(d,1)}else this._handlers[a]=[]},trigger:function(a,b){var c=this._handlers&&this._handlers[a];b.type=a;if(c)for(var d=0,e;e=c[d];d++)e.call(this,b)}};d.prototype.addCallback=function(a){this.completed?a.apply(this,this.results):this.callbacks.push(a)},d.prototype.complete=function(){this.results=makeArray(arguments),this.completed=!0;for(var a=0,b;b=this.callbacks[a];a++)b.apply(this,this.results)},a({Emitter:c,Promise:d})})});
provide("util/uri",function(a){using("util/querystring","util/util",function(b,c){function f(){var a=document.getElementsByTagName("a"),b=document.getElementsByTagName("link"),d=/\bme\b/,e=/^https?\:\/\/(www\.)?twitter.com\/([a-zA-Z0-9_]+)$/,f=c.array(a).concat(c.array(b)),g,h,i;for(var j=0,k;k=f[j];j++){h=k.getAttribute("rel"),i=k.getAttribute("href");if(h&&i&&h.match(d)&&(g=i.match(e)))return g[2]}}function e(){var a=document.getElementsByTagName("link");for(var b=0,c;c=a[b];b++)if(c.getAttribute("rel")=="canonical")return d(c.getAttribute("href"));return null}function d(a){var b;if(a.match(/^https?:\/\//))return a;b=location.host,location.port.length>0&&(b+=":"+location.port);return[location.protocol,"//",b,a].join("")}a({absolutize:d,getCanonicalURL:e,getScreenNameFromPage:f})})});
provide("tfw/widget/intent",function(a){using("util/util","tfw/widget/base","util/querystring","util/uri",function(b,c,d,e){function q(a){a=a||window.event;var b=a.target||a.srcElement,c,d;while(b&&b.nodeName.toLowerCase()!=="a")b=b.parentNode;if(b&&b.nodeName.toLowerCase()==="a"&&b.href){c=b.href.match(f);if(c){var e=o(b.href);e=e.replace(/^http[:]/,"https:"),e=e.replace(/^\/\//,"https://"),twttr.events.hub?(d=new p(l.generateId(),b),l.add(d),n(e,b),twttr.events.trigger("click",{target:b,region:"intent",type:"click",data:{}})):m(e),a.returnValue=!1,a.preventDefault&&a.preventDefault()}}}function o(a){var b="original_referer="+location.href;return[a,b].join(a.indexOf("?")==-1?"?":"&")}function n(a,b){using("xd/parent","xd/jsonrpc",function(c,d){var e=c.connect({window:{width:550,height:450},src:a});d(e).expose({trigger:function(a,c){twttr.events.trigger(a,{target:b,region:"intent",type:a,data:c})}})})}function m(a){var b=Math.round(k/2-h/2),c=0;j>i&&(c=Math.round(j/2-i/2)),window.open(a,"intent",g+",width="+h+",height="+i+",left="+b+",top="+c)}var f=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,g="scrollbars=yes,resizable=yes,toolbar=no,location=yes",h=550,i=520,j=screen.height,k=screen.width,l,p=function(a,b){this.id=a,this.element=this.originElement=b},r=function(a){this.originElement=[],this.element=a};r.prototype=new c.Base,b.aug(r.prototype,{render:function(a){l=this,window.__twitterIntentHandler||(document.addEventListener?document.addEventListener("click",q,!1):document.attachEvent&&document.attachEvent("onclick",q),window.__twitterIntentHandler=!0)}}),a({Listener:r})})});
provide("tfw/widget/tweet",function(a){using("util/util","tfw/widget/base","util/querystring","util/uri",function(b,c,d,e){var f=document.title,g=encodeURI(location.href),h={en:1,de:1,es:1,fr:1,it:1,ko:1,ja:1,ru:1,tr:1,pt:1},i=function(a){this.originElement=a,this.id=this.generateId();var b=this.params(),c=b.count||a.getAttribute("data-count"),d=b.lang||a.getAttribute("data-lang");this.text=b.text||a.getAttribute("data-text")||f,this.via=b.via||a.getAttribute("data-via")||e.getScreenNameFromPage(),this.url=b.url||a.getAttribute("data-url")||e.getCanonicalURL()||g,this.related=b.related||a.getAttribute("data-related"),this.counturl=b.counturl||a.getAttribute("data-counturl"),this.searchlink=b.searchlink||a.getAttribute("data-searchlink"),this.placeid=b.placeid||a.getAttribute("data-placeid"),this.supportCount[c]||(c="horizontal"),this.count=c,h[d]||(d="en"),this.lang=d};i.prototype=new c.Base,b.aug(i.prototype,{supportCount:{vertical:1,horizontal:1,none:1},titles:{en:"Twitter For Websites: Tweet Button",de:"Twitter für Webseiten: Tweet-Schaltfläche",es:"Twi`tter para sitios web: Botón para Twittear",fr:'Twitter pour votre site web : bouton "Tweeter"',it:"Tweeter per i siti web: Bottone Tweet",ja:"WEBサイト向けTwitter: ツイートボタン",ko:"Twitter 웹버전: 트윗 버튼",pt:"Twitter para websites: Botão de Tweet",ru:"Твиттер для веб-сайта: кнопка «Твитнуть»",tr:"Web siteleri için Twitter: Tweetle Butonu"},dimensionsMap:{en:{vertical:[55,62],horizontal:[110,20],none:[55,20]},de:{vertical:[67,62],horizontal:[110,20],none:[67,20]},es:{vertical:[64,62],horizontal:[110,20],none:[64,20]},fr:{vertical:[65,62],horizontal:[110,20],none:[65,20]},it:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ko:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ja:{vertical:[80,62],horizontal:[130,20],none:[80,20]},ru:{vertical:[68,62],horizontal:[110,20],none:[68,20]},tr:{vertical:[66,62],horizontal:[110,20],none:[66,20]},pt:{vertical:[66,62],horizontal:[110,20],none:[66,20]}},parameters:function(){var a={text:this.text,url:this.url,via:this.via,related:this.related,count:this.count,lang:this.lang,counturl:this.counturl,searchlink:this.searchlink,placeid:this.placeid,original_referer:location.href,id:this.id};a._=(new Date).getTime();return d.encode(a)},render:function(a){var b=a.assetUrl()+"/widgets/tweet_button.html?"+this.parameters(),c=this.dimensionsMap[this.lang][this.count],d=this.titles[this.lang];this.element=this.create(b,"twitter-share-button twitter-count-"+this.count,c,d)}}),a({Embeddable:i})})});
provide("tfw/widget/follow",function(a){using("util/util","tfw/widget/base","util/querystring","util/uri",function(b,c,d,e){var f={en:1,de:1,es:1,fr:1,it:1,ko:1,ja:1,ru:1,tr:1,pt:1},g=function(a){this.originElement=a,this.id=this.generateId();var b=this.params(),c=b.lang||a.getAttribute("data-lang")||"en";this.showScreenName=b.show_screen_name||a.getAttribute("data-show-screen-name")||"",this.showCount=b.show_count||a.getAttribute("data-show-count")||"",this.button=b.button||a.getAttribute("data-button")||"blue",this.linkColor=b.link_color||a.getAttribute("data-link-color")||"",this.textColor=b.text_color||a.getAttribute("data-text-color")||"",this.width=b.width||a.getAttribute("data-width")||"",this.screenName=this.screenNameFromHref(),this.align=b.align||a.getAttribute("data-align")||"",this.lang=c,f[c]||(this.lang="en")};g.prototype=new c.Base,b.aug(g.prototype,{titles:{en:"Twitter For Websites: Tweet Button",de:"Twitter für Webseiten: Tweet-Folgen",es:"Twi`tter para sitios web: Botón para Seguir",fr:'Twitter pour votre site web : bouton "Suivre"',it:"Tweeter per i siti web: Bottone Seguire",ja:"WEBサイト向けTwitter",ko:"Twitter 웹버전",pt:"Twitter para websites",ru:"Твиттер для веб-сайта",tr:"Web siteleri için Twitter"},langs:{en:{dimensions:[300,20]},de:{dimensions:[300,20]},es:{dimensions:[300,20]},fr:{dimensions:[300,20]},it:{dimensions:[300,20]},ko:{dimensions:[300,20]},pt:{dimensions:[300,20]},ja:{dimensions:[300,20]},ru:{dimensions:[300,20]},tr:{dimensions:[300,20]}},parameters:function(){var a={screen_name:this.screenName,lang:this.lang,button:this.button,link_color:this.linkColor,text_color:this.textColor,show_count:this.showCount,show_screen_name:this.showScreenName,align:this.align,id:this.id};a._=(new Date).getTime();return d.encode(a)},screenNameFromHref:function(){var a=this.originElement.href,b;if(b=a.match(c.TWITTER_PROFILE_URL))return b[1]},render:function(a){if(!!this.screenName){var b=a.assetUrl()+"/widgets/follow_button.html?"+this.parameters(),c=this.langs[this.lang].dimensions;this.width&&(c=[this.width,c[1]]);var d=this.langs[this.lang].title;this.element=this.create(b,"twitter-follow-button",c,d)}}}),a({Embeddable:g})})});
window.twttr=window.twttr||{},function(){twttr.host=twttr.host||"platform{i}.twitter.com",using.path.length==0&&(using.path="//"+twttr.host.replace(/\{i\}/,"")+"/js"),typeof twttr.ignoreSSL=="undefined"&&(twttr.ignoreSSL=!1);var a=[];twttr.events={bind:function(b,c){return a.push([b,c])}},using("util/util","tfw/widget/follow","tfw/widget/tweet","tfw/widget/intent","util/events","tfw/widget/base",function(b,c,d,e,f,g){function k(){using("xd/parent","xd/jsonrpc",function(a,b){var c=h.assetUrl()+"/widgets/hub.html";twttr.events.hub=a.connect({src:c,iframe:{name:"twttrHubFrame",style:"position:absolute;top:-9999em;width:10px;height:10px"}}),b(twttr.events.hub).expose({trigger:function(a,b,c){var b=b||{},d=b.region;delete b.region,twttr.events.trigger(a,{target:g.find(c),data:b,region:d,type:a})}})})}function j(a){return(window.location.protocol.match(/s\:$/)||a)&&!twttr.ignoreSSL?"https":"http"}var h={},i=0;h.widgets={"a.twitter-share-button":d.Embeddable,"a.twitter-follow-button":c.Embeddable,body:e.Listener},h.assetUrl=function(a){var b=j(a),c=twttr.host,d=c.replace("{i}",i++);i==3&&(i=0);return b+"://"+d},twttr.events=b.aug({},f.Emitter),twttr.events.oldbind=twttr.events.bind,twttr.events.bind=function(a,b){k(),this.bind=this.oldbind,this.bind(a,b)};for(var l=0;handler=a[l];l++)twttr.events.bind(handler[0],handler[1]);g.init(h),g.embed()})}()});