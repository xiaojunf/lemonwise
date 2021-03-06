// Copyright 2010 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// See the source code here:
//      http://code.google.com/p/episodes/
// Don't overwrite pre-existing instances of the object (esp. for older browsers).
var NR_QUEUE = [];
typeof window.NREUMQ != "undefined" ? NR_QUEUE = NREUMQ : typeof window.EPISODES != "undefined" ? NR_QUEUE = EPISODES.q : typeof window.NREUM != "undefined" && (NR_QUEUE = NREUM.q);
var NREUM = NREUM || {};
NREUM.q = NR_QUEUE,NREUM.targetOrigin = document.location.protocol + "//" + document.location.host,NREUM.version = 12,NREUM.autorun = "undefined" != typeof NREUM.autorun ? NREUM.autorun : !0,NREUM.init = function() {
    NREUM.bDone = !1,NREUM.cycle = 0,NREUM.logging = !1,NREUM.contentLoadFired = !1,NREUM.marks = {},NREUM.measures = {},NREUM.starts = {},NREUM.findStartTime(),NREUM.load = null,NREUM.addEventListener("beforeunload", NREUM.beforeUnload, !1),NREUM.addEventListener("pagehide", NREUM.beforeUnload, !1),NREUM.processQ(),NREUM.beacon = null,NREUM.licenseKey = null,NREUM.applicationID = null,NREUM.transactionName = null,NREUM.txnParam = null,NREUM.unloaded = !1,document.readyState === "complete" ? NREUM.domContentLoaded() : "undefined" != typeof document.addEventListener ? document.addEventListener("DOMContentLoaded", NREUM.domContentLoaded, !1) : "undefined" != typeof document.attachEvent && document.attachEvent("onreadystatechange", NREUM.readyStateChange),NREUM.load || document.loaded ? NREUM.onload() : NREUM.addEventListener("load", NREUM.onload, !1)
},NREUM.processQ = function() {
    var a = NREUM.q.length,b,c,d;
    for (d = 0; d < a; d++)b = NREUM.q[d],c = b[0],"mark" === c ? NREUM.mark(b[1], b[2]) : "measure" === c ? NREUM.measure(b[1], b[2], b[3]) : "done" === c ? NREUM.done(b[1]) : "nrf" === c || "nrfinish" === c ? NREUM.nrfinish("t", b[1], b[2], b[3], b[4], b[5], b[6], b[7]) : "nrf2" === c || "nrfinish2" === c ? NREUM.nrfinish("to", b[1], b[2], b[3], b[4], b[5], b[6], b[7]) : "load" === c ? NREUM.load = b[1] : NREUM.dprint("Unknown queue command " + c)
},NREUM.nrfinish = function(a, b, c, d, e, f, g, h) {
    NREUM.dprint("NREUM: finish data received"),NREUM.txnParam = a,NREUM.beacon = b,NREUM.licenseKey = c,NREUM.applicationID = d,NREUM.transactionName = e,NREUM.measures.qt = f,NREUM.measures.ap = g,NREUM.dom_end_time = h
},NREUM.mark = function(a, b) {
    NREUM.dprint("NREUM.mark: " + a + ", " + b);
    a ? (NREUM.marks[a] = parseInt(b || (new Date).getTime(), 10),"firstbyte" === a ? (NREUM.measure("be", "starttime", "firstbyte"),NREUM.dom_start_time = NREUM.marks.firstbyte) : "onload" === a ? NREUM.measure("fe", "firstbyte", "onload") : "domContent" === a && NREUM.measure("dc", "firstbyte", "domContent")) : NREUM.dprint("Error: markName is undefined in NREUM.mark.")
},NREUM.measure = function(a, b, c) {
    NREUM.dprint("NREUM.measure: " + a + ", " + b + ", " + c);
    if (!a)NREUM.dprint("Error: episodeName is undefined in NREUM.measure."); else {
        var d;
        if ("undefined" == typeof b)"number" == typeof NREUM.marks[a] ? d = NREUM.marks[a] : d = (new Date).getTime(); else if ("number" == typeof NREUM.marks[b])d = NREUM.marks[b]; else if ("number" == typeof b)d = b; else {
            NREUM.dprint("Error: unexpected startNameOrTime in NREUM.measure: " + b);
            return
        }
        var e;
        if ("undefined" == typeof c)e = (new Date).getTime(); else if ("number" == typeof NREUM.marks[c])e = NREUM.marks[c]; else if ("number" == typeof c)e = c; else {
            NREUM.dprint("NREUM: Error: unexpected endNameOrTime in NREUM.measure: " + c);
            return
        }
        NREUM.starts[a] = parseInt(d, 10),NREUM.measures[a] = parseInt(e - d, 10)
    }
},NREUM.done = function(a) {
    NREUM.bDone = !0,NREUM.mark("done"),NREUM.autorun && NREUM.sendBeacon(),"function" == typeof a && a()
},NREUM.getMarks = function() {
    return NREUM.marks
},NREUM.getMeasures = function() {
    return NREUM.measures
},NREUM.getStarts = function() {
    return NREUM.starts
},NREUM.sendBeacon = function() {
    NREUM.processQ(),NREUM.domContentLoaded();
    if (NREUM.licenseKey === null || NREUM.applicationID === null)NREUM.dprint("NREUM: licenseKey or applicationID has not been set"); else {
        NREUM.dom_end_time && NREUM.dom_start_time && (NREUM.dprint("NREUM: picking up DOM processing time from embedded JS"),NREUM.mark("domContent", NREUM.dom_end_time)),NREUM.load && (NREUM.dprint("NREUM: picking up load event time from embedded JS"),NREUM.mark("onload", NREUM.load));
        var a = NREUM.getMeasures(),b = "",c;
        for (c in a)b += c + "=" + a[c] + "&";
        var d;
        if (b) {
            d = ("http:" === document.location.protocol ? "http:" : "https:") + "//" + NREUM.beacon + "/1/" + NREUM.licenseKey,d += "?a=" + NREUM.applicationID + "&",d += b,NREUM.transactionName !== null && NREUM.transactionName.length > 0 && (d += NREUM.txnParam + "=" + encodeURIComponent(NREUM.transactionName),d += "&v=" + NREUM.version);
            var e = new Image;
            e.src = d,NREUM.dprint("NREUM: (new) data sent", d)
        }
    }
},NREUM.inlineHit = function(a, b, c, d, e, f) {
    NREUM.cycle += 1;
    NREUM.licenseKey === null || NREUM.applicationID === null ? NREUM.dprint("NREUM: licenseKey or applicationID has not been set") : (img = new Image,url = ("http:" === document.location.protocol ? "http:" : "https:") + "//" + NREUM.beacon + "/1/" + NREUM.licenseKey,url += "?a=" + NREUM.applicationID + "&",url += "t=" + a + "&",url += "qt=" + b + "&",url += "ap=" + c + "&",url += "be=" + d + "&",url += "dc=" + e + "&",url += "fe=" + f + "&",url += "c=" + NREUM.cycle,img.src = url,NREUM.dprint("NREUM Inline: " + url))
},NREUM.findStartTime = function() {
    var a = NREUM.findStartWebTiming() || NREUM.findStartGToolbar() || NREUM.findStartCookie();
    a ? NREUM.mark("starttime", a) : NREUM.dprint("NREUM: Error: couldn't find a start time")
},NREUM.findStartWebTiming = function() {
    var a,b = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance;
    "undefined" != typeof b && "undefined" != typeof b.timing && "undefined" != typeof b.timing.navigationStart && (a = b.timing.navigationStart,NREUM.dprint("NREUM.findStartWebTiming: startTime = " + a));
    return a
},NREUM.findStartGToolbar = function() {
    var a;
    try {
        window.external && window.external.pageT ? a = (new Date).getTime() - window.external.pageT : window.gtbExternal && window.gtbExternal.pageT ? a = (new Date).getTime() - window.gtbExternal.pageT() : window.chrome && window.chrome.csi && (a = (new Date).getTime() - window.chrome.csi().pageT),a && NREUM.dprint("NREUM.findStartGToolbar: startTime = " + a)
    } catch(b) {
    }
    return a
},NREUM.findStartCookie = function() {
    var a = document.cookie.split(" "),b,c;
    for (b = 0; b < a.length; b++)if (0 === a[b].indexOf("NREUM=")) {
        var d,e,f = a[b].substring("NREUM=".length).split("&"),g,h;
        for (c = 0; c < f.length; c++)0 === f[c].indexOf("s=") ? g = f[c].substring(2) : 0 === f[c].indexOf("p=") ? (e = f[c].substring(2),e.charAt(e.length - 1) === ";" && (e = e.substr(0, e.length - 1))) : 0 === f[c].indexOf("r=") && (d = f[c].substring(2),d.charAt(d.length - 1) === ";" && (d = d.substr(0, d.length - 1)));
        if (d) {
            var i = encodeURIComponent(document.referrer);
            h = i === d,h || (h = encodeURIComponent(document.location) === d && i === e)
        }
        if (h && g) {
            NREUM.dprint("NREUM.findStartCookie: startTime = " + g);
            return g
        }
    }
    return undefined
},NREUM.beforeUnload = function(a) {
    if (!NREUM.unloaded) {
        var b = new Date;
        b.setTime(b.getTime() + 6e4),document.cookie = "NREUM=s=" + Number(new Date) + "&r=" + encodeURIComponent(document.location) + "&p=" + encodeURIComponent(document.referrer) + "; expires=" + b.toGMTString() + "; path=/",NREUM.unloaded = !0
    }
},NREUM.onload = function(a) {
    NREUM.mark("onload"),NREUM.autorun && NREUM.done()
},NREUM.domContentLoaded = function(a) {
    NREUM.contentLoadFired || (NREUM.mark("domContent", (new Date).getTime()),NREUM.contentLoadFired = !0)
},NREUM.readyStateChange = function(a) {
    document.readyState === "complete" && NREUM.domContentLoaded()
},NREUM.addEventListener = function(a, b, c) {
    if ("undefined" != typeof window.attachEvent)return window.attachEvent("on" + a, b);
    if (window.addEventListener)return window.addEventListener(a, b, c)
},"undefined" != typeof console && "undefined" != typeof console.log ? NREUM.dprint = function(a) {
    NREUM.logging && console.log(a)
} : NREUM.dprint = function(a) {
},NREUM.init()