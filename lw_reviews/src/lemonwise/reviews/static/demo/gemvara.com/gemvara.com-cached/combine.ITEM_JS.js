SeriesHelper = {show:function(i, c, e, j, a) {
    var l = contextPath + "/Select-Item-From-Series/jewelry/vs/" + i + "/";
    var k = "ots";
    var d = "ringSize";
    var h = "engravingText";
    var b = "engravingFont";
    var f = UrlHelper.urlAddAttribute;
    l = f(l, k, c);
    l = f(l, d, e);
    if (j != undefined && j != null && j != "") {
        l = f(l, h, encodeURIComponent(j));
    }
    if (a != undefined && a != null && a != "") {
        l = f(l, b, encodeURIComponent(a));
    }
    Lightview.showOnLoad({href:l,rel:"ajax",options:{autosize:true,topclose:true,ajax:{onComplete:function() {
    }}}});
    Track.page(l);
}};
docOb("dom:loaded", function() {
    try {
        if (abTestMode.isVersion("d", "A")) {
            ImgHelper.preloadImages([offset,dime]);
            $("ckShowSizeComparison").checked = false;
        }
    } catch(a) {
    }
});
function switchImageView(a, d, c) {
    var b = $("itemImage");
    b.src = a.href;
    b.alt = a.title;
    if (c != undefined && c == true) {
        showSizeComparison(true);
    }
    $("ckShowSizeComparison").checked = false;
    var e = $("sizeComparisonContainer");
    if (d) {
        e.show();
    } else {
        e.hide();
    }
    Track.event("Gallery", "Old Quick View", a.title);
}
function preloadImage(a) {
    a = $(a);
    if (a && a.up("a")) {
        ImgHelper.preloadImage(a.up("a").href);
    }
}
function showCustomize(a, b, c, h) {
    if (typeof customizeHelper != "undefined" && customizeHelper.inPage) {
        TabHelper.showTab($("tab_details1"), "details1");
        customizeHelper.toggleToSpecificLayer(a, b);
    } else {
        var d = null;
        var f = $("cmbRingSize_" + catalogItemId);
        if (f) {
            var e = f.options[f.selectedIndex].value;
            if (e != 0) {
                d = e;
            }
        }
        CustomizeHelper.show(catalogItemId, ots, cert, d, a, b, c, h);
    }
}
function showSendToFriend() {
    if (typeof customizeHelper != "undefined" && customizeHelper.inPage) {
        SendToFriendHelper.show(customizeHelper.catalogItemId, customizeHelper.getOtsValueForUrl(), customizeHelper.getCertValueForUrl(), $("itemTitle").innerHTML, $("itemDescription").innerHTML);
    } else {
        SendToFriendHelper.show(catalogItemId, ots, cert, $("itemTitle").innerHTML, $("itemDescription").innerHTML);
    }
}
function showSeriesSelector() {
    if (typeof customizeHelper != "undefined" && customizeHelper.inPage) {
        var a = customizeHelper.engravingText;
        var d = customizeHelper.engravingFont;
        var c = customizeHelper.getRingSize();
        SeriesHelper.show(customizeHelper.catalogItemId, customizeHelper.getOtsValueForUrl(), c != 0 ? c : null, a, d);
    } else {
        var b = $("cmbRingSize_" + catalogItemId);
        var a = $("engravingText") != null ? $("engravingText").value : null;
        var d = $("engravingFont") != null ? $("engravingFont").value : null;
        var c = null;
        if (b) {
            var c = b.options[b.selectedIndex].value;
            if (c == 0) {
                c = null;
            }
        }
        SeriesHelper.show(catalogItemId, ots, c, a, d);
    }
}
function showSizeComparison(b) {
    var a = $("itemImage");
    if (b) {
        a.src = dime;
        Track.event("Size Comparison", "Product Page", catalogItemId);
    } else {
        a.src = perspective;
    }
}
function addTo(b, a, c) {
    if (!c) {
        c = "Product Page";
    }
    FormHelper.submit(b, true, a, c, b.down("input[name=itemId]").value, CookieHelper.get("pageViews"));
}
function addToCart(a) {
    if (typeof customizeHelper != "undefined" && customizeHelper.inPage) {
        customizeHelper.addToCart();
    } else {
        addTo($("addToCartForm"), "Add to Cart", a);
    }
}
function addToWishList() {
    if (typeof customizeHelper != "undefined" && customizeHelper.inPage) {
        customizeHelper.addToWishList();
    } else {
        addTo($("addToWishListForm"), "Add to Wish List");
    }
}
var MLT = {load:function(b, a) {
    runOnPageLoaded(function() {
        new Ajax.Request("/" + (Browser.isIE6 ? "mlt" : "ajax") + "/jewelry/s/" + b + (a ? "/more-sidebar/" : "/more/"), {method:"get",onSuccess:function(c) {
            runOnDomLoadedIfRequired(MLT.insert.curry(c));
        },onFailure:function(c) {
            $("moreLikeThis").down("div.loading-content").down("h3").update("<span style='color:red'>Error Loading</span>");
        }});
    });
},go:function(d, c, b, a) {
    d = $(d);
    if (!a) {
        a = d.href;
    }
    Track.event("More Like This", c, a, b);
    UrlHelper.goLater(d.href, 0.1);
    return false;
},row:function(e, d) {
    e = $(e);
    var c = SearchHelper.row.curry(e, d),b = e.up("div.tab");
    c();
    if (b) {
        var a = function(f) {
            b.stopObserving("tab:active", a);
            c();
        };
        b.observe("tab:active", a);
    }
},insert:function(a) {
    var e = "moreLikeThis",b = "loading",d = $(e).down("div." + b + "-content"),c = $(e).down("div.loaded-content");
    c.update(a.responseText);
    new Effect.Fade(d, {duration:0.5,fps:75,afterFinish:function() {
        if (!Browser.isIE) {
            c.hide();
            c.removeClassName(b);
            new Effect.Appear(c, {duration:0.4,fps:75,afterFinish:function() {
                c.select("div.tab ul.grid-row").each(MLT.row);
            }});
        } else {
            c.removeClassName(b);
            c.select("div.tab ul.grid-row").each(function(f) {
                MLT.row.defer(f);
            });
        }
    }});
}};
var VID = {show:function(b, a) {
    if (!a) {
        a = "inline";
    }
    var c = {href:b,rel:a,options:{width:150,height:150,autosize:true,topclose:false}};
    Lightview.showOnLoad(c);
},youtube:{hidden:function(a) {
},show:function(a, b) {
    VID.show("/ajax/jewelry/s/" + a + "/video/" + b + "/", "ajax");
    Track.event("Video", "Shown", "Youtube: " + b);
}}};
ItemImg = {active:0,swap:function(c, e) {
    c = $(c);
    if (e == ItemImg.active) {
        return;
    }
    Track.event("Gallery", "Quick View", c.name, e);
    var f = $("productImage"),b = "loading",d = (function(h, i) {
        h.addClassName("loaded");
        f.style.backgroundImage = "url(" + h.href + ")";
        $("productThumbs").select("li.active").invoke("removeClassName", "active");
        h.up("li").addClassName("active");
        f.removeClassName(b);
        ItemImg.active = e;
    }).curry(c);
    if (c.hasClassName("loaded")) {
        d();
    } else {
        f.addClassName(b);
        ItemImg.preload(c, d);
    }
},preload:function(b, c) {
    b = $(b);
    b.onmouseover = function() {
    };
    if (!c) {
        c = (function(d) {
            d.addClassName("loaded");
        }).curry(b);
    }
    ImgHelper.preloadImage(b.href, c);
},gallery:{inprogress:-1,active:0,show:function(b, e) {
    b = $(b);
    var h = (typeof customizeHelper != "undefined" && customizeHelper.inPage) ? customizeHelper.tinySku : tinySku;
    if (Browser.isIE6) {
        if (!b || !b.name) {
            return;
        }
        if (b.name.indexOf("Video") >= 0) {
            VID.youtube.show(h, b.href.substring(b.href.indexOf("=") + 1));
            return;
        }
        ItemImg.swap(b, e);
        return;
    }
    var f = {href:"/ajax/jewelry/s/" + h + "/gallery/" + (e ? "?activeIndex=" + e : ""),rel:"ajax",options:{width:150,height:150,autosize:true}};
    var d = function() {
        document.stopObserving("lightview:opened", d);
        var i = $("addToCartForm").down("select.ring-size-select"),a = $("galleryRingSelector");
        if (i && a) {
            a.selectedIndex = i.selectedIndex;
        }
        if (Browser.isIE7) {
            $("gallerySide").style.zoom = "1";
        }
    };
    if (e) {
        ItemImg.gallery.active = e;
        var c = d;
        d = (function(a) {
            a();
            ItemImg.gallery.swap.delay(0.25, null, e);
        }).curry(c);
    }
    docOb("lightview:opened", d);
    Lightview.showOnLoad(f);
    Track.event("Gallery", "Shown");
},swap:function(b, d) {
    var f = ItemImg.gallery;
    g = $("gallery"),pw = g.up(".popup-wrapper"),lv = g.up(".lv_contentTop");
    if (f.inprogress != -1) {
        return;
    }
    if (!d) {
        d = 0;
    }
    if (!b) {
        b = $("gallerySide").select("ul.thumbnails li a")[d];
    }
    if (d == f.active) {
        return;
    }
    f.inprogress = d;
    Track.event("Gallery", "View", b.name, d);
    var c = (function(s, n, m) {
        if (f.inprogress == n) {
            if (f.active != n) {
                var l = $("iframe" + f.active);
                if (l) {
                    l.src = l.src.replace(/autoplay=1&/g, "");
                }
            }
            var p = $("galleryImg"),r = p.select("div.preview"),k = r[f.active].down("img, iframe"),j = k.width;
            f.active = n;
            $("gallerySide").select("ul.thumbnails li.active").invoke("removeClassName", "active");
            s.addClassName("loaded");
            var o = r[n];
            s.up("li").addClassName("active");
            o.setStyle("position:absolute;left:-9999px;display:block");
            var q = o.down("img, iframe").width,h = Lightview.options.resizeDuration,i = (function(a, t) {
                a.invoke("removeClassName", "active");
                a.invoke("hide");
                t.addClassName("active");
                t.show();
            }).curry(r, o);
            if (q != j) {
                p.removeClassName("resizing");
                pw.fade({duration:h,fps:75,queue:"end",afterFinish:(function(t, u, w, a) {
                    t();
                    w.setStyle("position:relative;left:0px;");
                    lv.style.width = "100%";
                    var v = Lightview.innerDimensions;
                    v.width += u - j;
                    if (v.width < 400) {
                        v.width = 400;
                    }
                    Lightview._resize(v, h);
                    (function() {
                        pw.appear({duration:h,fps:75,queue:"end",afterFinish:function(x) {
                            lv.removeClassName("resizing");
                            p.addClassName("resizing");
                            f.inprogress = -1;
                        }});
                    }).delay(h + 0.25);
                }).curry(i, q, o)});
            } else {
                i();
                o.setStyle("position:relative;left:0px;");
                p.addClassName("resizing");
                lv.removeClassName("resizing");
                f.inprogress = -1;
            }
        }
    }).curry(b, d);
    lv.addClassName("resizing");
    if (b.hasClassName("loaded") || b.rel.indexOf("video") >= 0) {
        c();
    } else {
        var e = $("galleryImg").select("div.active");
        e.invoke("removeClassName", "active");
        e.invoke("hide");
        ItemImg.preload(b, c);
    }
}}};