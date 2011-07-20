if (typeof Array.prototype.splice === 'undefined') {
    Array.prototype.splice = function(a, c) {
        var i = 0,e = arguments,d = this.copy(),f = a;
        if (!c) {
            c = this.length - a;
        }
        for (i; i < e.length - 2; i++) {
            this[a + i] = e[i + 2];
        }
        for (a; a < this.length - c; a++) {
            this[a + e.length - 2] = d[a - c];
        }
        this.length -= c - e.length + 2;
        return d.slice(f, f + c);
    };
}
function hcArrayStorage() {
    this.idx = 0;
    this.nArr = [];
    this.vArr = [];
}
hcArrayStorage.prototype.add = function(n, v, unescD) {
    if (typeof(unescD) == 'undefined') {
        unescD = false;
    }
    if (typeof(v) == 'undefined') {
        var temp = n.split('=');
        n = temp[0];
        v = temp[1];
    }
    if (unescD) {
        this.nArr[this.idx] = unescape(n);
        this.vArr[this.idx] = unescape(v);
    } else {
        this.nArr[this.idx] = n;
        this.vArr[this.idx] = v;
    }
    this.idx++;
};
hcArrayStorage.prototype.size = function() {
    return this.idx;
};
hcArrayStorage.prototype.get = function(i) {
    if (typeof(this.nArr[i]) == 'undefined') {
        return'';
    }
    var tmp = escape(this.nArr[i]) + '=' + escape(this.vArr[i]);
    tmp = tmp.replace(/\+/g, "%2B");
    return tmp;
};
hcArrayStorage.prototype.getName = function(i) {
    return this.nArr[i];
};
hcArrayStorage.prototype.getValue = function(i) {
    return this.vArr[i];
};
hcArrayStorage.prototype.getValueEsc = function(i) {
    return escape(this.vArr[i]);
};
hcArrayStorage.prototype.getByName = function(n) {
    for (var i = 0; i < this.idx; i++) {
        if (this.getName(i) == n) {
            return i;
        }
    }
    return-1;
};
hcArrayStorage.prototype.remove = function(i) {
    if (typeof(i) == 'undefined' || i == null || typeof(this.nArr[i]) == 'undefined') {
        return;
    }
    this.nArr.splice(i, 1);
    this.vArr.splice(i, 1);
    this.idx--;
};
hcArrayStorage.prototype.paramLength = function(i) {
    var url = '&' + this.get(i);
    return url.length;
};
hcArrayStorage.prototype.fullLength = function() {
    var length = 0;
    for (var i = 0; i < this.idx; i++) {
        length += this.paramLength(i);
    }
    return length;
};
hcArrayStorage.prototype.getMaxLengthItem = function() {
    var max = 0;
    var maxItemId = -1;
    for (var i = 0; i < this.idx; i++) {
        if (this.paramLength(i) > max) {
            max = this.paramLength(i);
            maxItemId = i;
        }
    }
    return maxItemId;
};
hcArrayStorage.prototype.clone = function() {
    var cObj = new hcArrayStorage();
    cObj.idx = this.idx;
    for (var i = 0; i < this.idx; i++) {
        cObj.nArr[i] = this.nArr[i];
        cObj.vArr[i] = this.vArr[i];
    }
    return cObj;
};
function lpRequest(protocolVer, Url, params, Callback, requireConfirm, maxretries, prunId, lpjson, enc, browser, postAutoConfirm, spImmediateCleanup, partial, part, outOf, forceget, forcePost, encodingBlankUrl, minPost, minPostMaxGets, allowTruncate) {
    this.headLoc = document.getElementsByTagName("head").item(0);
    this.timeStamp = new Date();
    this.callId = this.getCID();
    this.protocolVer = protocolVer;
    this.scriptId = 'lpScriptId' + this.callId;
    this.callbackFunc = Callback;
    this.requireConfirm = requireConfirm;
    this.spImmediateCleanup = spImmediateCleanup;
    this.postAutoConfirm = postAutoConfirm;
    this.params = params;
    this.BaseUrl = Url;
    this.fullUrl = '';
    if (typeof(enc) != 'undefined' && enc != '' && enc != null) {
        this.dataEncoding = enc.toUpperCase();
    } else {
        this.dataEncoding = "UTF-8";
    }
    this.retries = 0;
    this.confirmed = false;
    this.usedget = true;
    this.usedSpecialPost = false;
    this.maxretries = maxretries;
    this.prunId = prunId;
    this.lpjson = lpjson;
    this.browser = browser;
    this.spImmediateCleanup = true;
    if (typeof(partial) == 'undefined') {
        partial = false;
    }
    this.partial = partial;
    if (typeof(part) == 'undefined') {
        part = 0;
    }
    this.part = part;
    if (typeof(outOf) == 'undefined') {
        outOf = 0;
    }
    this.outOf = outOf;
    this.forceget = forceget;
    this.forcePost = forcePost;
    this.encodingBlankUrl = encodingBlankUrl;
    this.minimizePost = minPost;
    this.minimizePostMaxGets = minPostMaxGets;
    this.allowTruncate = allowTruncate;
}
lpRequest.prototype.getCID = function() {
    var sKey = lpConnLib.getC('HumanClickKEY');
    var i = 999999999999;
    if (sKey == null) {
        sKey = Math.round(Math.random() * i);
    }
    return sKey + '-' + Math.round(Math.random() * i);
};
lpRequest.prototype.BuildBaseCallUrl = function() {
    var url = this.BaseUrl;
    if (url.indexOf('?') == -1) {
        url += '?';
    } else {
        url += '&';
    }
    url += 'lpCallId=' + this.callId;
    url += '&protV=' + this.protocolVer;
    url += '&' + this.prunId + this.lpjson;
    return url;
};
lpRequest.prototype.BuildCallUrl = function(type, maxLn, nolog) {
    var cUrl = this.BuildBaseCallUrl();
    var urlLn = cUrl.length;
    if (type == 'get') {
        if (this.params.size() > 0) {
            for (var i = 0; i < this.params.size(); i++) {
                cUrl += '&' + this.params.get(i);
            }
        }
        urlLn = cUrl.length;
        if (urlLn > maxLn) {
            if (!nolog) {
                lpConnLib.log('BuildCallUrl Cut length:' + urlLn + ' m=' + maxLn, 'WARN', 'EMT');
            }
            cUrl = cUrl.substring(0, maxLn);
        }
    }
    this.fullUrl = cUrl;
    return urlLn;
};
lpRequest.prototype.MakeCallByScript = function() {
    this.scriptObj = document.createElement('script');
    this.scriptObj.setAttribute('type', 'text/javascript');
    this.scriptObj.setAttribute('charset', this.dataEncoding);
    this.scriptObj.setAttribute('src', this.fullUrl);
    this.scriptObj.setAttribute('id', this.scriptId);
    this.headLoc.appendChild(this.scriptObj);
};
lpRequest.prototype.removeScriptTag = function() {
    try {
        this.headLoc.removeChild(this.scriptObj);
    } catch(e) {
        lpConnLib.log('removeScript FAILED:' + e, 'ERROR', 'EMT');
    }
};
lpRequest.prototype.clone = function() {
    var cRq = new lpRequest();
    for (var p in this) {
        if (typeof(this[p]) != 'undefined') {
            if (typeof(this[p]) != 'object') {
                cRq[p] = this[p];
            } else if (typeof(this[p]) != 'undefined' && this[p] != null && this[p].constructor == hcArrayStorage) {
                cRq[p] = this[p].clone();
            } else {
                cRq[p] = this[p];
            }
        }
    }
    return cRq;
};
function lpConnectionLibrary() {
    this.protocolVer = 20;
    this.garbagePeriod = 10;
    this.gcT = 0;
    this.callTimeoutPeriod = 3 * this.garbagePeriod;
    this.maxurllengthMZ = 2083;
    this.maxurllengthIE = 2083;
    this.postDeleteIfrDelay = 3;
    this.iframeName = 'lpIframeContainer-' + Math.round(1000 * Math.random());
    this.onPostAutoConfirm = true;
    this.queue = [];
    this.partialQueue = [];
    this.fullForPartialQueue = {};
    this.browser = this.BrowserSniff();
    this.maxurlgetlength = 2083;
    this.callCounter = 0;
    this.garbageCollectCounter = 0;
    this.forcedGet = 0;
    this.reconfirmedCalls = 0;
    this.resendCounter = 0;
    this.partialCounter = 0;
    this.lpExecuteErrors = 0;
    this.lpCallbackCnt = 0;
    this.lpjson = 1;
    this.prunId = 'lpjson=';
    this.DebugDisplay = false;
    this.postParams = [];
    this.spPostIframesFree = [];
    this.spPostIframesBusy = [];
}
lpConnectionLibrary.prototype.SortQueue = function(a, b) {
    if (a.confirmed == b.confirmed) {
        return a.timeStamp.getTime() - b.timeStamp.getTime();
    }
    if (a.confirmed && !b.confirmed) {
        return-1;
    }
    if (!a.confirmed && b.confirmed) {
        return 1;
    }
    return 0;
};
lpConnectionLibrary.prototype.confirmConnection = function(idList) {
    var tempList = ',' + idList + ',';
    for (var i = 0; i < this.queue.length; i++) {
        var myid = ',' + this.queue[i].callId + ',';
        if (!this.queue[i].confirmed && tempList.indexOf(myid) > -1) {
            this.queue[i].confirmed = true;
        }
    }
};
lpConnectionLibrary.prototype.getRequestForCallId = function(callId) {
    for (var i = 0; i < this.queue.length; i++) {
        if (callId == this.queue[i].callId) {
            return this.queue[i];
        }
    }
    return null;
};
lpConnectionLibrary.prototype.addToQueue = function(Url, params, Callback, requireConfirm, maxretries, forceget, onPostAutoConfirm, lpjson, dataEncoding, forcePost, specialPost, spImmediateCleanup, encodingBlankUrl, minimizePost, minimizePostMaxGets, allowTruncate) {
    var callType = '';
    var postAutoConfirm = false;
    if (typeof(lpjson) != 'undefined') {
        this.lpjson = lpjson;
    }
    if (typeof(onPostAutoConfirm) != 'undefined') {
        postAutoConfirm = onPostAutoConfirm;
    } else {
        postAutoConfirm = this.onPostAutoConfirm;
    }
    if (typeof(encodingBlankUrl) == 'undefined') {
        if (typeof(lpMTagConfig) != 'undefined') {
            encodingBlankUrl = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + '/hcp/asp/blankenc.asp';
        } else if (typeof(lpChatConfig) != 'undefined') {
            encodingBlankUrl = lpChatConfig.lpProtocol + '://' + lpChatConfig.lpServer + '/hcp/asp/blankenc.asp';
        }
    }
    this.encodingBlankUrl = encodingBlankUrl;
    if (typeof(spImmediateCleanup) == 'undefined') {
        spImmediateCleanup = true;
    }
    var request = new lpRequest(this.protocolVer, Url, params, Callback, requireConfirm, maxretries, this.prunId, this.lpjson, dataEncoding, this.browser, postAutoConfirm, spImmediateCleanup, undefined, 0, 0, forceget, forcePost, encodingBlankUrl, minimizePost, minimizePostMaxGets, allowTruncate);
    if (typeof(lpMTagDebug) != 'undefined' && typeof(lpMTagDebug.Display) != 'undefined') {
        this.DebugDisplay = true;
    }
    if (forceget) {
        this.forcedGet++;
    }
    var partial = '';
    var urlLength = request.BuildCallUrl('get', this.maxurlgetlength, true);
    if (!forcePost && (urlLength < this.maxurlgetlength || forceget)) {
        callType = this.makeTheCall(request, 'get', requireConfirm);
    } else {
        if (typeof(minimizePost) == 'undefined') {
            if (typeof(lpMTagConfig.minimizePost) == 'undefined') {
                minimizePost = false;
            } else {
                minimizePost = lpMTagConfig.minimizePost;
            }
        }
        var minPostStatus = false;
        if (!forcePost && minimizePost) {
            if (typeof(minimizePostMaxGets) == 'undefined') {
                if (typeof(lpMTagConfig.minimizePostMaxGets) == 'undefined') {
                    minimizePostMaxGets = 3;
                } else {
                    minimizePostMaxGets = lpMTagConfig.minimizePostMaxGets;
                }
            }
            if (typeof(allowTruncate) == 'undefined') {
                if (typeof(lpMTagConfig.allowTruncate) == 'undefined') {
                    allowTruncate = false;
                } else {
                    allowTruncate = lpMTagConfig.allowTruncate;
                }
            }
            var origRequest = request.clone();
            this.splitRequestIntoGets(request, origRequest, minimizePostMaxGets, allowTruncate, specialPost, postAutoConfirm, spImmediateCleanup, minimizePostMaxGets, requireConfirm);
            minPostStatus = true;
        }
        if (!minPostStatus) {
            if (specialPost) {
                callType = this.makeTheCall(request, 'sp-post', !postAutoConfirm, spImmediateCleanup);
            } else {
                callType = this.makeTheCall(request, 'post', !postAutoConfirm);
            }
        }
    }
    return callType;
};
lpConnectionLibrary.prototype.makeTheCall = function(r, pr) {
    pr = pr.toUpperCase();
    var ret,qsize;
    if (pr == 'GET') {
        r.BuildCallUrl('get', this.maxurlgetlength);
        qsize = this.queue.length;
        this.queue[qsize] = r;
        this.queue[qsize].MakeCallByScript();
        if (!r.requireConfirm) {
            this.queue[qsize].confirmed = true;
        }
        ret = 'GET';
    } else if (pr == 'POST') {
        r.BuildCallUrl('post', this.maxurlgetlength);
        qsize = this.queue.length;
        this.queue[qsize] = r;
        this.queue[qsize].MakeCallByIframe(this.browser);
        if (r.postAutoConfirm) {
            this.queue[qsize].confirmed = true;
        }
        ret = 'POST';
    } else if (pr == 'SP-POST') {
        r.BuildCallUrl('post', this.maxurlgetlength);
        qsize = this.queue.length;
        this.queue[qsize].spImmediateCleanup = r.spImmediateCleanup;
        this.specialPostHandler(r.callId);
        if (r.postAutoConfirm) {
            this.queue[qsize].confirmed = true;
        }
        ret = 'POST';
    }
    if (this.DebugDisplay) {
        var cmd = '';
        try {
            cmd = r.params.getValue(r.params.getByName('cmd'));
            if (typeof(cmd) == 'undefined') {
                cmd = r.fullUrl.match(/cmd=.*?&/).toString();
                if (cmd != null && cmd != 'null') {
                    cmd = cmd.replace(/&/g, '');
                }
            }
            cmd = '<strong><span style="color:rgb(255,153,0);">' + cmd + '</span></strong>';
        } catch(e) {
        }
        lpConnLib.log('Making ' + pr + ' Call id=' + r.callId + ' ' + cmd, 'DEBUG', 'EMT');
    }
    this.callCounter++;
    return ret;
};
lpConnectionLibrary.prototype.hasNonLatinChars = function(params) {
    for (var i = 0; i < params.size(); i++) {
        if (params.get(i).indexOf("%u") != -1) {
            return true;
        }
    }
    return false;
};
lpConnectionLibrary.prototype.BrowserSniff = function() {
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("safari") != -1) {
        return'SAFARI';
    }
    if (document.all) {
        var is_opera = (agt.indexOf("opera") != -1);
        if (is_opera) {
            return"OPR";
        } else {
            return"IE";
        }
    }
    if (document.getElementById) {
        var is_ff = (agt.indexOf("firefox") != -1);
        if (is_ff) {
            return"FF";
        }
        return"MOZ";
    }
    return"MOZ";
};
lpConnectionLibrary.prototype.GetCallbackFunc = function(usrCallId) {
    var qSize = this.queue.length;
    for (var i = 0; i < qSize; i++) {
        if (this.queue[i].callId == usrCallId) {
            return this.queue[i].callbackFunc;
        }
    }
    return null;
};
lpConnectionLibrary.prototype.CleanUpBusySpecialPost = function(callID) {
    if (typeof(callID) == 'undefined') {
        callID = null;
    }
    for (var i = 0; i < this.spPostIframesBusy.length; i++) {
        if ((this.spPostIframesBusy[i]['spImmediateCleanup'] && this.spPostIframesBusy[i]['callMade']) || this.spPostIframesBusy[i]['callID'] == callID) {
            this.releaseIframe(this.spPostIframesBusy[i]['callID']);
        }
    }
};
lpConnectionLibrary.prototype.gc = function() {
    lpConnLib.log('GC', 'OK', 'EMT');
    this.queue.sort(this.SortQueue);
    var confirmedCnt = 0;
    var i;
    for (i = 0; i < this.queue.length; i++) {
        if (this.queue[i].confirmed) {
            if (this.queue[i].usedget) {
                this.queue[i].removeScriptTag();
            }
            confirmedCnt++;
        }
    }
    this.queue.splice(0, confirmedCnt);
    this.garbageCollectCounter++;
    this.CleanUpBusySpecialPost();
    var now = new Date().getTime();
    for (i = 0; i < this.queue.length; i++) {
        if (!this.queue[i].confirmed && (now - this.queue[i].timeStamp.getTime()) > this.callTimeoutPeriod * 1000) {
            if (this.queue[i].retries < this.queue[i].maxretries) {
                this.queue[i].retries++;
                this.callCounter++;
                this.reconfirmedCalls++;
                lpConnLib.log('Retry ' + this.queue[i].retries + '/' + this.queue[i].maxretries + ' cId=' + this.queue[i].callId, 'DEBUG', 'EMT');
                this.queue[i].timeStamp = new Date();
                if (this.queue[i].usedget) {
                    this.queue[i].MakeCallByScript();
                } else {
                    if (this.usedSpecialPost) {
                        this.CleanUpBusySpecialPost(this.queue[i].callId);
                        this.specialPostHandler(this.queue[i].callId);
                    } else {
                        this.queue[i].MakeCallByIframe(this.browser);
                    }
                }
            } else {
                this.queue[i].confirmed = true;
                lpConnLib.log('Timeout for cId=' + this.queue[i].callId, 'DEBUG', 'EMT');
                var lpDataObj = {"ResultSet":{"lpCallId":this.queue[i].callId,"lpCallError":"TIMEOUT"}};
                this.UsrCFn(lpDataObj);
            }
        }
    }
};
lpConnectionLibrary.prototype.Process = function(d) {
    if (d == null) {
        lpConnLib.log('Cback No data', 'ERROR', 'EMT');
        return;
    }
    this.lpCallbackCnt++;
    var dRS = d.ResultSet;
    d.ServiceInfo = {};
    var dSI = d.ServiceInfo;
    if (dRS.lpCallId == 0 || dRS.lpCallId == null || dRS.lpCallId == '') {
        lpConnLib.log('Cback No Call ID', 'ERROR', 'EMT');
        return;
    }
    dSI.requestType = 'REGULAR';
    dSI.resendCall = false;
    dSI.origCallId = dRS.lpCallId;
    if (typeof(dRS.lpData) != 'undefined' && typeof(dRS.lpData) == 'object' && typeof(dRS.lpData[0]) != 'undefined') {
        if (typeof(dRS.lpData[0].TYPE) != 'undefined') {
            dSI.requestType = dRS.lpData[0].TYPE;
        }
        if (typeof(dRS.lpData[0].RESEND) != 'undefined') {
            dSI.resendCall = dRS.lpData[0].RESEND;
        }
    }
    if (dSI.resendCall) {
        this.resendCounter++;
    }
    if (dSI.requestType == 'PARTIAL REQUEST') {
        dRS.lpCallId = dRS.lpCallId + '!' + dRS.lpData[0].PART;
    }
    lpConnLib.log('Cback cId=' + dRS.lpCallId, 'DEBUG', 'EMT');
    if (typeof(dRS.lpCallConfirm) == 'undefined' || dRS.lpCallConfirm == '') {
        dRS.lpCallConfirm = dRS.lpCallId;
    } else {
        dRS.lpCallConfirm += ',' + dRS.lpCallId;
    }
    var req;
    if (dSI.requestType == 'PARTIAL REQUEST' && dSI.resendCall) {
        req = this.fullForPartialQueue[dSI.origCallId];
        delete this.fullForPartialQueue[dSI.origCallId];
        lpConnLib.log('CId=' + dRS.lpCallId + ' Deleted - fullForPartialQueue[' + dSI.origCallId + ']', 'DEBUG', 'EMT');
    } else {
        req = this.getRequestForCallId(dRS.lpCallId);
        if (req != null && req.partial) {
            req = this.fullForPartialQueue[dSI.origCallId];
        }
    }
    if (dSI.requestType != 'PARTIAL REQUEST') {
        if (this.fullForPartialQueue[dSI.origCallId]) {
            delete this.fullForPartialQueue[dSI.origCallId];
            lpConnLib.log('CId=' + dRS.lpCallId + ' Deleted fullForPartialQueue[' + dSI.origCallId + ']', 'DEBUG', 'EMT');
        }
    }
    if (req == null) {
        lpConnLib.log('REQ is NULL callId=' + dSI.origCallId, 'ERROR', 'EMT');
    }
    this.confirmConnection(dRS.lpCallConfirm);
    if (dSI.requestType == 'PARTIAL REQUEST') {
        var callNum;
        var outOfcalls;
        if (typeof(dRS.lpData) != 'undefined' && typeof(dRS.lpData) == 'object') {
            if (typeof(dRS.lpData[0].PART) != 'undefined') {
                callNum = dRS.lpData[0].PART;
            }
            if (typeof(dRS.lpData[0].OUTOF) != 'undefined') {
                outOfcalls = dRS.lpData[0].OUTOF;
            }
        }
        if (dSI.resendCall) {
            for (var i = (callNum + 1); i <= outOfcalls; i++) {
                var cid = dSI.origCallId + '!' + i;
                delete this.partialQueue[cid];
            }
        } else {
            try {
                var ncId = dSI.origCallId + '!' + (callNum + 1);
                lpConnLib.log('P Call Response recieved  - ' + dRS.lpCallId + ' part=' + callNum + ' outof=' + outOfcalls, 'DEBUG', 'EMT');
                var r = this.partialQueue[ncId];
                if (r != null) {
                    delete this.partialQueue[ncId];
                    if (r.part == r.outOf) {
                        r.callId = this.spPartFromStr(r.callId);
                    }
                    this.makeTheCall(r, 'get');
                } else {
                    if (typeof(dbg) != 'undefined' && dbg.Display) {
                        dbg.Display('P Call NOT found for id=' + ncId, 'ERROR', 'EMT');
                    }
                }
            } catch(e) {
                if (typeof(dbg) != 'undefined' && dbg.Display) {
                    dbg.Display('P Call Proces error for id=' + dRS.lpCallId + ' exception=' + e, 'ERROR', 'EMT');
                }
            }
            return;
        }
    }
    if (typeof(dRS.lpJS_Execute) != 'undefined') {
        var d_msg = [];
        for (var MTagI = 0; MTagI < dRS.lpJS_Execute.length; MTagI++) {
            var no_err_flag = true;
            var err_msg = '';
            var code_id = dRS.lpJS_Execute[MTagI].code_id;
            try {
                eval(dRS.lpJS_Execute[MTagI].js_code);
                if (typeof(lpMTag) != 'undefined' && typeof(lpMTag.tmpCode) != 'undefined' && lpMTag.tmpCode != '') {
                    eval(lpMTag.tmpCode);
                }
            } catch(hcExecError) {
                this.lpExecuteErrors++;
                no_err_flag = false;
                err_msg = hcExecError;
            }
            if (typeof(lpMTag) != 'undefined') {
                lpMTag.tmpCode = '';
            }
            if (this.DebugDisplay) {
                if (no_err_flag) {
                    d_msg[d_msg.length] = 'OK Executed snippet=<strong>' + code_id + '</strong><!!>' + 'EXEC-OK';
                } else {
                    d_msg[d_msg.length] = 'ERROR Executing snippet=<strong>' + code_id + '</strong> &nbsp #' + err_msg + '#' + '<!!>' + 'ERROR';
                }
            }
        }
        if (this.DebugDisplay) {
            lpMTagDebug.DisplayArray(d_msg, 'EMT');
        }
    }
    if (typeof(dRS.lpCallError) != 'undefined') {
        lpConnLib.log('ERR Recieved=' + dRS.lpCallError + ' &nbsp # CallID = ' + dRS.lpCallId + '#', 'ERROR', 'EMT');
    }
    this.UsrCFn(d, req);
};
lpConnectionLibrary.prototype.spPartFromStr = function(str) {
    var temp = str.split('!');
    return temp[0];
};
lpConnectionLibrary.prototype.UsrCFn = function(d, r) {
    var userCallbackFunc = this.GetCallbackFunc(d.ResultSet.lpCallId);
    if (userCallbackFunc != '' && userCallbackFunc != null) {
        var no_err_flag = true;
        var err_msg = '';
        try {
            userCallbackFunc(d, r);
        } catch(hcExecError) {
            no_err_flag = false;
            err_msg = hcExecError;
        }
        if (no_err_flag) {
            lpConnLib.log('OK Exec User function - ' + d.ResultSet.lpCallId, 'EXEC-OK', 'EMT');
        } else {
            lpConnLib.log('ERROR Exec User function=' + userCallbackFunc + ' &nbsp #' + err_msg + '#', 'ERROR', 'EMT');
        }
    }
};
lpConnectionLibrary.prototype.getC = function(n) {
    var c = document.cookie;
    var start = c.indexOf(n + "=");
    if (typeof(n) == 'undefined' || start == -1) {
        return null;
    }
    var len = start + n.length + 1;
    if ((!start) && (n != c.substring(0, n.length))) {
        return null;
    }
    var end = c.indexOf(";", len);
    if (end == -1) {
        end = c.length;
    }
    return unescape(c.substring(len, end));
};
lpConnectionLibrary.prototype.log = function(m, t, s) {
    if (this.DebugDisplay) {
        lpMTagDebug.Display(m, t, s);
    }
};
if (typeof(lpConnLib) == 'undefined') {
    function lpJSLibrary() {
    }

    var lpJSLib = new lpJSLibrary();
    var lpConnLib = new lpConnectionLibrary();
    lpConnLib.gcT = setInterval('lpConnLib.gc()', lpConnLib.garbagePeriod * 1000);
}
function lpChat() {
    this.ver = '1.1';
    this.ErrorValue = {CHAT_NOT_INITIALIZED:{id:1,text:'Chat not initialized.'},CHAT_ALREADY_ENDED:{id:2,text:'Chat already ended'},CANNOT_INITIALIZE_CHAT:{id:3,text:'Cannot initialize chat'},SERVICE_UNAVAILABLE:{id:4,text:'Chat is unavailable.'},API_NOT_ALLOWED:{id:5,text:'API is not allowed for this account.'},ACCOUNT_EXPIRED:{id:6,text:'Account has expired.'},INCORRECT_CHATKEY:{id:7,text:'Chat key is incorrect.'},INVALID_APP_KEY:{id:8,text:'Invalid application key.'},API_ADAPTER_NOT_INSTALLED:{id:9,text:'API Adapter not installed.'}};
    this.LineType = {VISITOR:0,AGENT:1,SYSTEM:2,URL:3,HTML:4};
    this.STATE = {'2':{id:2,text:'In chat'},'4':{id:4,text:'Waiting for chat'},'6':{id:6,text:'Chat ended'}};
    var init = lpChatConfig;
    this.apiKey = init.apiKey;
    this.lpServer = init.lpServer;
    this.lpNumber = init.lpNumber;
    this.lpProtocol = init.lpProtocol;
    this.ssoKey = init.ssoKey;
    this.skill = init.skill;
    this.agent = init.agent;
    this.baseUrl = this.lpProtocol + '://' + this.lpServer + '/hc/' + this.lpNumber + '/';
    for (var name in init) {
        this[name] = init[name];
    }
    this.isSafari2OrBelow = false;
    this.isSafari3orUp = false;
    var agt = navigator.userAgent;
    var awk = agt.indexOf('AppleWebKit/');
    if (awk != -1) {
        this.isSafari3orUp = agt.charAt(awk + 12) >= '5';
    }
    this.initVars();
    this.lastReceivedEvent = -1;
    this.requestConfig();
}
lpChat.prototype.createLine = function(text, by, type, time) {
    return{'text':text,'by':by,'type':type,'time':time};
};
lpChat.prototype.initVars = function() {
    this.visitorEventsPollRate = 2000;
    this.sessionkey = -1;
    this.state = -1;
    this.inChat = false;
    this.chatEnded = false;
    this.stopComm = false;
    this.chatLines = new Array();
    this.visitorTitle = 'you:';
    this.requests = new Array();
    this.callInProgress = false;
    this.veTimer = null;
    this.isNonUTF8orENGencoding = false;
    if (typeof(lpChatConfig.charSet) != 'undefined') {
        this.isNonUTF8orENGencoding = (lpChatConfig.charSet.toUpperCase() != 'UTF8' && lpChatConfig.charSet.toUpperCase() != 'ISO-8859-1');
    }
    this.baseUrl = lpChatConfig.lpProtocol + '://' + this.lpServer + '/hc/' + this.lpNumber + '/';
    this.failCounter = 0;
};
lpChat.prototype.addLine = function(text) {
    if (!this.inChat)return false;
    if (this.stopComm)return false;
    if (text == null || text == '')return false;
    var line = this.createLine(text, this.visitorTitle, this.LineType.VISITOR, this.jsGetDate());
    var linesSize = this.chatLines.length;
    this.chatLines[linesSize] = line;
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'visitorSays');
    this.addChatParameters(vaParams);
    vaParams.add('text', text);
    this.addRequestToQueue(vaParams);
};
lpChat.prototype.setVisitorTyping = function(isTyping) {
    var repCommand = 'visitorTyping ' + (isTyping ? 1 : 0);
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'visitorRepCommand');
    vaParams.add('params', repCommand);
    this.sendVisitorCommand(vaParams);
};
lpChat.prototype.setCustomVariable = function(varName, varValue) {
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'visitorSetUDE');
    vaParams.add('cvn', varName);
    vaParams.add('val', varValue);
    this.sendVisitorCommand(vaParams);
};
lpChat.prototype.endChat = function() {
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'windowUnloaded');
    this.sendVisitorCommand(vaParams);
    this.stopChatComm();
};
lpChat.prototype.requestTranscriptEmail = function(email) {
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'file');
    vaParams.add('file', 'emailRequest');
    vaParams.add('email', email);
    this.sendVisitorCommand(vaParams);
};
lpChat.prototype.getVisitorName = function() {
    return this.visitorTitle;
};
lpChat.prototype.setVisitorName = function(name) {
    this.setCustomVariable('identifier', name);
};
lpChat.prototype.getAgentName = function() {
    if (typeof(this.agent) == 'undefined')return null; else return this.agent;
};
lpChat.prototype.getState = function() {
    if (typeof(this.STATE[this.state]) != 'undefined') {
        return this.STATE[this.state];
    } else {
        return{id:this.state};
    }
};
lpChat.prototype.getLines = function() {
    return this.chatLines;
};
lpChat.prototype.hasPendingRequests = function() {
    return this.requests.length > 0;
};
lpChat.prototype.requestConfig = function() {
    var vaParams = new hcArrayStorage();
    vaParams.add('site', this.lpNumber);
    vaParams.add('cmd', 'requestConfig');
    var that = this;
    this.addRequestToQueue(vaParams);
};
lpChat.prototype.requestChat = function() {
    if (this.sessionkey != -1) {
        this.lastReceivedEvent = -1;
    }
    this.initVars();
    var vaParams = new hcArrayStorage();
    vaParams.add('cmd', 'file');
    vaParams.add('file', 'visitorWantsToChat');
    vaParams.add("appKey", this.apiKey);
    vaParams.add("site", this.lpNumber);
    this.ssoKey = lpChatConfig.ssoKey;
    if (typeof(this.ssoKey) != 'undefined' && this.ssoKey != null && this.ssoKey != '')vaParams.add("ssoKey", this.ssoKey);
    if (this.invitation) {
        vaParams.add("referrer", '(engage) ' + document.location);
        this.invitation = false;
    } else {
        vaParams.add("referrer", document.location);
    }
    this.agent = lpChatConfig.agent;
    if (typeof(this.agent) != 'undefined' && this.agent != null && this.agent != '')vaParams.add(lpChatConfig.sessVar + lpChatConfig.operatorUDE, this.agent);
    this.skill = lpChatConfig.skill;
    if (typeof(this.skill) != 'undefined' && this.skill != null && this.skill != '')vaParams.add(lpChatConfig.sessVar + lpChatConfig.skillUDE, this.skill);
    this.addRequestToQueue(vaParams);
};
lpChat.prototype.resumeChat = function(chatkey) {
    this.sessionkey = chatkey;
    this.startChatSequence();
};
lpChat.prototype.startChatSequence = function() {
    var vaParams = new hcArrayStorage();
    vaParams.add("cmd", "visitorWantsToChat");
    vaParams.add("isOn", "false");
    this.addChatParameters(vaParams);
    this.addRequestToQueue(vaParams);
};
lpChat.prototype.addChatParameters = function(reqParams) {
    reqParams.add("appKey", this.apiKey);
    reqParams.add("site", this.lpNumber);
    var name = lpChatConfig.useKeyParam ? lpChatConfig.sessionKeyParam : lpChatConfig.sessionIDParam;
    reqParams.add(name, this.sessionkey);
};
lpChat.prototype.sendVisitorEvents = function() {
    clearTimeout(this.veTimer);
    this.veTimer = null;
    if (this.stopComm)return;
    var veParams = new hcArrayStorage();
    veParams.add("cmd", "visitorEvents");
    this.addChatParameters(veParams);
    this.addRequestToQueue(veParams);
};
lpChat.prototype.sendVisitorCommand = function(reqParams) {
    if (this.stopComm) {
        if (typeof(this['onError']) == 'function') {
            if (this.chatEnded) {
                this.onError(this.ErrorValue.CHAT_ALREADY_ENDED);
            } else {
                this.onError(this.ErrorValue.CHAT_NOT_INITIALIZED);
            }
        }
        return;
    }
    this.addChatParameters(reqParams);
    this.addRequestToQueue(reqParams);
};
lpChat.prototype.handleEvents = function(lpDataObj) {
    var size = lpDataObj.ResultSet.lpData.length;
    for (var eI = 0; eI < size; eI++) {
        var eventData = lpDataObj.ResultSet.lpData[eI];
        if (typeof(eventData) == 'undefined')continue;
        this.lastReceivedEvent = eventData.eSeq;
        if (eventData.eName == 'sessionkey') {
            this.sessionkey = eventData.params[0];
            this.startChatSequence();
            if (typeof(this['onInit']) == 'function')this.onInit();
        } else if (eventData.eName == 'addLine') {
            var line = this.createLine(eventData.params[0], eventData.params[1], eventData.params[2], eventData.params[3]);
            var linesSize = this.chatLines.length;
            this.chatLines[linesSize] = line;
            linesSize++;
            if (typeof(this['onLine']) == 'function')this.onLine(line);
        } else if (eventData.eName == 'repTyping') {
            var isType = eventData.params[0] == '1';
            if (typeof(this['onAgentTyping']) == 'function')this.onAgentTyping(isType);
        } else if (eventData.eName == 'urlPush') {
            var pushurl = eventData.params[0];
            if (typeof(this['onUrlPush']) == 'function' && pushurl != '')this.onUrlPush(pushurl);
        } else if (eventData.eName == 'startChat') {
            this.agent = eventData.params[1];
            this.inChat = true;
            if (typeof(this['onStart']) == 'function')this.onStart(eventData.params[0], eventData.params[1]);
        } else if (eventData.eName == 'visitorState') {
            this.state = eventData.params[0];
            this.inChat = this.state == 2;
            if (typeof(this['onState']) == 'function') {
                if (typeof(this.STATE[eventData.params[0]]) != 'undefined') {
                    this.onState(this.STATE[eventData.params[0]]);
                } else {
                    this.onState({id:eventData.params[0]});
                }
            }
        } else if (eventData.eName == 'stopChat') {
            var reasonID = eventData.params[0];
            var reasonText = eventData.params[1];
            this.stopChatComm();
            if (typeof(this['onStop']) == 'function')this.onStop(reasonID, reasonText);
        } else if (eventData.eName == 'visitorSet') {
            if (eventData.params[0] == 'visitorTitle') {
                this.visitorTitle = eventData.params[1];
            } else if (eventData.params[0] == 'agentName') {
                this.agent = eventData.params[1];
            }
        } else if (eventData.eName == 'availability') {
            if (eventData.params[0] == 'offline') {
                if (typeof(this['onError']) == 'function') {
                    this.onError(this.ErrorValue.CANNOT_INITIALIZE_CHAT);
                }
                this.chatEnded = true;
            }
        } else if (eventData.eName == 'resume') {
            if (typeof(this['onResume']) == 'function') {
                this.onResume();
            }
        } else if (eventData.eName == 'redirect') {
            var url = eventData.params[0] + '&appKey=' + this.apiKey;
            this.directSendRequest(url);
        } else if (eventData.eName == 'apiNotAllowed') {
            if (typeof(this['onError']) == 'function') {
                this.onError(this.ErrorValue.API_NOT_ALLOWED);
            }
            this.chatEnded = true;
        } else if (eventData.eName == 'apiAdapterIsMissing') {
            if (typeof(this['onError']) == 'function') {
                this.onError(this.ErrorValue.API_ADAPTER_NOT_INSTALLED);
            }
            this.chatEnded = true;
        } else if (eventData.eName == 'invalidAppKey') {
            if (typeof(this['onError']) == 'function') {
                this.onError(this.ErrorValue.INVALID_APP_KEY);
            }
            this.chatEnded = true;
        } else if (eventData.eName == 'accountExpired') {
            if (typeof(this['onError']) == 'function') {
                this.onError(this.ErrorValue.ACCOUNT_EXPIRED);
            }
            this.chatEnded = true;
        }
    }
};
lpChat.prototype.stopChatComm = function() {
    this.inChat = false;
    this.chatEnded = true;
    this.stopComm = true;
};
lpChat.prototype.handleResponse = function(lpDataObj) {
    try {
        if (typeof(lpDataObj.ResultSet.lpCallError) == 'undefined') {
            this.handleEvents(lpDataObj);
            this.requests.shift();
            if (this.requests.length == 0) {
                this.callInProgress = false;
                if (!this.chatEnded && this.sessionkey != -1 && this.veTimer == null) {
                    var that = this;
                    this.veTimer = setTimeout(function() {
                        that.sendVisitorEvents();
                    }, this.visitorEventsPollRate);
                }
            } else {
                this.sendRequestFromQueue();
            }
            this.failCounter = 0;
        } else {
            this.handleErrorResponse(lpDataObj);
            if (!this.stopComm) {
                var that = this;
                setTimeout(function() {
                    that.sendRequestFromQueue();
                }, this.visitorEventsPollRate);
            }
        }
    } catch(e) {
        this.reportError(e, 'handleResponse()');
    }
};
lpChat.prototype.handleErrorResponse = function(lpDataObj) {
    if (typeof(lpDataObj.ResultSet.lpCallError) == 'undefined')return;
    var errorMsg = lpDataObj.ResultSet.lpCallError;
    if (typeof(console) != 'undefined')console.log('handleErrorResponse: ' + errorMsg);
    if (errorMsg == 'BUSY' || errorMsg == 'TIMEOUT') {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.SERVICE_UNAVAILABLE);
        }
        if (this.failCounter++ > lpChatConfig.maxRetries) {
            this.stopChatComm();
        }
    } else if (errorMsg == 'VISITORNOTFOUND') {
        if (typeof(this['onError']) == 'function') {
            if (this.chatEnded) {
                this.onError(this.ErrorValue.CHAT_ALREADY_ENDED);
            } else {
                this.onError(this.ErrorValue.CHAT_NOT_INITIALIZED);
            }
        }
        this.stopChatComm();
    } else if (errorMsg.indexOf('Chat key') == 0) {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.INCORRECT_CHATKEY);
        }
        this.stopChatComm();
    } else if (errorMsg == 'API_NOT_ALLOWED') {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.API_NOT_ALLOWED);
        }
        this.stopChatComm();
    } else if (errorMsg == 'INVALID_APP_KEY') {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.INVALID_APP_KEY);
        }
        this.stopChatComm();
    } else if (errorMsg == 'API_ADAPTER_NOT_INSTALLED') {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.API_ADAPTER_NOT_INSTALLED);
        }
        this.stopChatComm();
    } else if (errorMsg == 'ACCOUNT_EXPIRED') {
        if (typeof(this['onError']) == 'function') {
            this.onError(this.ErrorValue.ACCOUNT_EXPIRED);
        }
        this.stopChatComm();
    }
};
lpChat.prototype.addRequestToQueue = function(params) {
    this.requests.push(params);
    if (!this.callInProgress) {
        this.callInProgress = true;
        this.sendRequestFromQueue();
    }
};
lpChat.prototype.sendRequestFromQueue = function() {
    if (this.requests.length == 0)return;
    var rParams = this.requests[0];
    var forcePost = false;
    var forceGet = true;
    if (rParams.getValue(0) == 'visitorSays') {
        forceGet = false;
        forcePost = this.isSafari2OrBelow && lpConnLib.hasNonLatinChars(rParams);
    }
    if (rParams.size() > 0 && rParams.getName(rParams.size() - 1) != 'se') {
        rParams.add('se', this.lastReceivedEvent + 1);
    }
    var that = this;
    lpConnLib.addToQueue(this.baseUrl, rParams, function(d) {
        that.handleResponse(d);
    }, true, -1, forceGet, false, 4, lpChatConfig.charSet, forcePost, (this.isSafari3orUp || this.isNonUTF8orENGencoding), false);
};
lpChat.prototype.reportError = function(e, mymsg) {
    if (typeof(console) != 'undefined') {
        console.log(e + ' ' + mymsg);
    }
    var msg = 'reportErrorChat: ' + e.name + ' : ' + e.message + ' : ' + mymsg;
    lpConnLib.reportError(this.baseUrl, msg, 'CHAT_FRAME', this.lpNumber);
};
lpChat.prototype.jsGetDate = function() {
    var d = new Date();
    return d.getTime();
};
lpChat.prototype.chatAvailability = function(paramsObj) {
    var params = new hcArrayStorage();
    params.add('cmd', 'chatAvailability');
    params.add('appKey', this.apiKey);
    params.add('site', this.lpNumber);
    if (typeof(paramsObj) != 'undefined') {
        if (typeof(paramsObj.agent) != 'undefined' && paramsObj.agent != '')params.add('agent', paramsObj.agent);
        if (typeof(paramsObj.skill) != 'undefined' && paramsObj.skill != '')params.add('skill', paramsObj.skill);
        if (typeof(paramsObj.queue) != 'undefined' && paramsObj.queue != '')params.add('queue', paramsObj.queue);
        if (typeof(paramsObj.maxWaitTime) != 'undefined' && paramsObj.maxWaitTime != '')params.add('maxWaitTime', paramsObj.maxWaitTime);
    }
    var that = this;
    lpConnLib.addToQueue(this.baseUrl, params, function(d) {
        that.handleAvailability(d);
    }, true, -1, true, false, 4, lpChatConfig.charSet, false, false, false);
};
lpChat.prototype.handleAvailability = function(lpDataObj) {
    try {
        if (typeof(lpDataObj.ResultSet.lpCallError) != 'undefined') {
            this.handleErrorResponse(lpDataObj);
        } else {
            if (lpDataObj.ResultSet.lpData.length > 0) {
                var obj = lpDataObj.ResultSet.lpData[0];
                if (typeof(obj.error) != 'undefined' && typeof(this['onError']) == 'function') {
                    this.onError(obj);
                } else if (typeof(this['onAvailability']) == 'function') {
                    this.onAvailability(obj);
                }
            }
        }
    } catch(e) {
        this.reportError(e, 'handleAvailability()');
    }
};
lpChat.prototype.requestChatFromInvite = function() {
    this.invitation = true;
    this.requestChat();
};
lpChat.prototype.requestChatFromDynButton = function(dbUrl) {
    this.directSendRequest(dbUrl);
};
lpChat.prototype.directSendRequest = function(url) {
    var that = this;
    lpConnLib.addToQueue(url, new hcArrayStorage(), function(d) {
        that.handleResponse(d);
    }, true, -1, true, false, 4, lpChatConfig.charSet, false, false, false);
};
if (typeof(lpChatConfig) != null && typeof(lpChatConfig.onLoad) == 'function') {
    lpChatConfig.onLoad();
}