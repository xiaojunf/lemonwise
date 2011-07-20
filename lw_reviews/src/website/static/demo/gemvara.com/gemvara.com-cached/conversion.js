(function() {
    var e = null;

    function f(a) {
        return a != e ? escape(a.toString()) : ""
    }

    function h(a, b) {
        var g = f(b);
        if (g != "") {
            var c = f(a);
            if (c != "")return"&".concat(c, "=", g)
        }
        return""
    }

    function j(a) {
        var b = typeof a;
        return a == e || b == "object" || b == "function" ? e : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function k(a) {
        var b;
        a = a.google_custom_params;
        if (!a || typeof a != "object" || a instanceof Array)b = ""; else {
            var g = [];
            for (b in a) {
                var c = a[b];
                if (c instanceof Array) {
                    for (var d = [],i = 0; i < c.length; ++i) {
                        var p = j(c[i]);
                        p != e && d.push(p)
                    }
                    c = d.length == 0 ? e : d.join(",")
                } else c = j(c);
                (d = j(b)) && c != e && g.push(d + "=" + c)
            }
            b = g.join(";")
        }
        return b == "" ? "" : "&".concat("data=", encodeURIComponent(b))
    }

    function l(a) {
        return typeof a != "number" && typeof a != "string" ? "" : f(a.toString())
    }

    function m(a) {
        if (!a)return"";
        a = a.google_conversion_items;
        if (!a)return"";
        for (var b = [],g = 0,c = a.length; g < c; g++) {
            var d = a[g],i = [];
            d && (i.push(l(d.value)),i.push(l(d.quantity)),i.push(l(d.item_id)),i.push(l(d.adwords_grouping)),i.push(l(d.sku)),b.push("(" + i.join("*") + ")"))
        }
        return b.length > 0 ? "&item=" + b.join("") : ""
    }

    function n(a, b, g) {
        var c = [];
        if (a) {
            var d = a.screen;
            d && (c.push(h("u_h", d.height)),c.push(h("u_w", d.width)),c.push(h("u_ah", d.availHeight)),c.push(h("u_aw", d.availWidth)),c.push(h("u_cd", d.colorDepth)));
            a.history && c.push(h("u_his", a.history.length))
        }
        g && typeof g.getTimezoneOffset == "function" && c.push(h("u_tz", -g.getTimezoneOffset()));
        b && (typeof b.javaEnabled == "function" && c.push(h("u_java", b.javaEnabled())),b.plugins && c.push(h("u_nplug", b.plugins.length)),b.mimeTypes && c.push(h("u_nmime", b.mimeTypes.length)));
        return c.join("")
    }

    function o(a, b) {
        var g = "";
        if (b) {
            var c = b.referrer;
            if (a && a.top && b.location && a.top.location == b.location)g += h("ref", c != e ? c.toString().substring(0, 256) : ""),c = b.location;
            g += h("url", c != e ? c.toString().substring(0, 256) : "")
        }
        return g
    }

    function q(a) {
        return a && a.location && a.location.protocol && a.location.protocol.toString().toLowerCase() == "https:" ? "https:" : "http:"
    }

    function r(a) {
        return a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com"
    }

    function s(a) {
        var b = navigator,g = document,c = "/?";
        a.google_conversion_type == "landing" && (c = "/extclk?");
        var c = q(a) + "//" + r(a) + "/pagead/" + [a.google_remarketing_only ? "viewthroughconversion/" : "conversion/",f(a.google_conversion_id),c,"random=",f(a.google_conversion_time)].join(""),d;
        a:{
            d = a.google_conversion_language;
            if (d != e) {
                d = d.toString();
                if (2 == d.length) {
                    d = h("hl", d);
                    break a
                }
                if (5 == d.length) {
                    d = h("hl", d.substring(0, 2)) + h("gl", d.substring(3, 5));
                    break a
                }
            }
            d = ""
        }
        c += [h("cv", a.google_conversion_js_version),h("fst",
            a.google_conversion_first_time),h("num", a.google_conversion_snippets),h("fmt", a.google_conversion_format),h("value", a.google_conversion_value),h("label", a.google_conversion_label),h("oid", a.google_conversion_order_id),h("bg", a.google_conversion_color),d,h("guid", "ON"),h("disvt", a.google_disable_viewthrough),m(a),n(a, b, a.google_conversion_date),o(a, g),k(a)].join("");
        return c
    }

    function t() {
        var a = u,b = s(a),g = function(a, b, g) {
            return'<img height="' + g + '" width="' + b + '" border="0" src="' + a + '" />'
        };
        return a.google_conversion_format == 0 && a.google_conversion_domain == e ? '<a href="' + (q(a) + "//services.google.com/sitestats/" + ({ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a.google_conversion_language] ? a.google_conversion_language +
            ".html" : "en_US.html") + "?cid=" + f(a.google_conversion_id)) + '" target="_blank">' + g(b, 135, 27) + "</a>" : a.google_conversion_snippets > 1 || a.google_conversion_format == 3 ? g(b, 1, 1) : '<iframe name="google_conversion_frame" width="' + (a.google_conversion_format == 2 ? 200 : 300) + '" height="' + (a.google_conversion_format == 2 ? 26 : 13) + '" src="' + b + '" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">' + g(b.replace(/\?random=/, "?frame=0&random="), 1, 1) + "</iframe>"
    }

    function v() {
        var a = u;
        if (a.google_conversion_type == "landing" || !a.google_conversion_id)return!1;
        if (a.google_remarketing_only && a.google_disable_viewthrough)return!1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        typeof a.google_conversion_snippets == "number" && a.google_conversion_snippets > 0 ? a.google_conversion_snippets += 1 : a.google_conversion_snippets = 1;
        typeof a.google_conversion_first_time != "number" && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version = "6";
        a.google_conversion_format != 0 && a.google_conversion_format != 1 && a.google_conversion_format != 2 && a.google_conversion_format != 3 && (a.google_conversion_format = 1);
        return!0
    }

    ;
    var u = window;
    if (u)if (/[\?&;]google_debug/.exec(document.URL) != e) {
        var w = document.getElementsByTagName("head")[0];
        w || (w = document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(w, document.getElementsByTagName("body")[0]));
        var x = document.createElement("script");
        x.src = q(window) + "//" + r(window) + "/pagead/conversion_debug_overlay.js";
        w.appendChild(x)
    } else {
        try {
            v() && document.write(t())
        } catch(y) {
        }
        var z = u;
        z.google_conversion_date = e;
        z.google_conversion_time = e;
        z.google_conversion_js_version = e;
        z.google_conversion_id =
            e;
        z.google_conversion_value = e;
        z.google_conversion_label = e;
        z.google_conversion_language = e;
        z.google_conversion_format = e;
        z.google_conversion_color = e;
        z.google_conversion_type = e;
        z.google_conversion_order_id = e;
        z.google_conversion_items = e;
        z.google_custom_params = e;
        z.google_conversion_domain = e;
        z.google_disable_viewthrough = e;
        z.google_remarketing_only = e
    }
    ;
})();
