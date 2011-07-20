var __cvo = {account:"gemvara",server:"sp1.convertro.com"};
var $CVO = [];
$CVO.trackEvent = function(c, b, a) {
    if (c == null) {
    } else {
        if (a == null) {
            a = 1;
            if (b == null) {
                b = "{type}-{userid}"
            }
        }
    }
    $CVO.push(["trackEvent",{type:c,id:b,amount:a}])
};
$CVO.trackUser = function(a, b) {
    b = b || {};
    if (a == null) {
    }
    b.id = a;
    $CVO.push(["trackUser",b])
};
function __cvo_get_site() {
    if ("sitemap" in __cvo) {
        var d = __cvo.sitemap;
        var c = [document.domain];
        while (c[c.length - 1].match(/^[^.]+\./)) {
            c[c.length] = c[c.length - 1].replace(/[^.]+\./, "")
        }
        for (var b = 0; b < c.length; b++) {
            var a = c[b];
            if (a in d) {
                __cvo.site = d[a];
                return true
            }
        }
        __cvo.site = d.unknown || 0;
        return false
    } else {
        __cvo.site = 0;
        return false
    }
}
function __cvo_run() {
    __cvo_get_site();
    __cvo_info();
    __cvo_core()
}
function __cvo_info() {
    $CVO.server = __cvo.server;
    $CVO.account = __cvo.account;
    $CVO.site = __cvo.site;
    $CVO.atHead = new Date;
    $CVO.atBody = $CVO.atHead
}
function __cvo_core() {
    (function() {
        try {
            var g = /(?:^|;\s)__cvo_server=(.*?)(?:;\s|$)/;
            if ($CVO.tserver = document.cookie.match(g) || navigator.userAgent.match(g)) {
                $CVO.tserver = $CVO.tserver[1]
            }
            var c,b = document.createElement("iframe");
            b.src = 'javascript:"CVO"';
            b.style.position = "absolute";
            b.style.left = "-2000px";
            document.body.insertBefore(b, document.body.firstChild);
            for (var a = 0; a < frames.length; a++) {
                try {
                    c = frames[a];
                    if (c.document.URL == b.src) {
                        break
                    }
                } catch(d) {
                }
            }
            if (c && c.document && c.document.write) {
                c.document.write('<html><head></head><body><script src="' + document.location.protocol + "//" + ($CVO.tserver || $CVO.server) + "/trax/init/" + $CVO.account + "/" + $CVO.site + '"><\/script></body></html>');
                c.document.close()
            }
        } catch(d) {
            $CVO.error = d
        }
    })()
}
function __cvo_overrides() {
    var c = /__cvo_([\w]+)=(.*?)(?:[^\w\.-]|$)/g;
    var a;
    var b = document.cookie + navigator.userAgent;
    while ((a = c.exec(b)) != null) {
        __cvo[a[1]] = a[2]
    }
    return
}
function __cvo_main() {
    __cvo_overrides();
    if (!window.__cvo_started) {
        __cvo_started = true;
        if (__cvo.loader) {
            document.write('<script src="' + document.location.protocol + "//stage.convertro.com/unitag/" + __cvo.account + "/" + __cvo.loader + '.js"><\/script>');
            return false
        }
    } else {
        if (__cvo.loader) {
        } else {
            return false
        }
    }
    __cvo_run();
    return true
}
if (__cvo_main()) {
    $CVO.push(["trackPage"])
}
;