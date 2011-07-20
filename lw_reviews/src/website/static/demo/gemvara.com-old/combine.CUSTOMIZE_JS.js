if (typeof Effect == "undefined") {
    throw ("You must have the script.aculo.us library to use this accordion");
}
var Accordion = Class.create({initialize:function(c, a) {
    if (!$(c)) {
        throw ("Attempted to initalize accordion with id: " + c + " which was not found.");
    }
    this.accordion = $(c);
    this.options = {toggleClass:"accordion-toggle",toggleActive:"accordion-toggle-active",contentClass:"accordion-content"};
    this.contents = this.accordion.select("div." + this.options.contentClass);
    this.isAnimating = false;
    this.maxHeight = 0;
    this.current = a ? this.contents[a - 1] : this.contents[0];
    this.toExpand = null;
    this.checkMaxHeight();
    this.initialHide();
    this.attachInitialMaxHeight();
    var b = this.clickHandler.bindAsEventListener(this);
    this.accordion.observe("click", b);
},expand:function(b) {
    this.toExpand = b.next("div." + this.options.contentClass);
    if (this.current != this.toExpand) {
        this.toExpand.show();
        this.animate();
        try {
            var a = b.id;
            a = a.substring(0, a.indexOf("_"));
            if (!CustomizeHelper.getThis().inPage && CustomizeHelper.getThis().virtualPageUrl) {
                var c = CustomizeHelper.getThis().virtualPageUrl;
                Track.page(c + a);
            }
            Track.event("Accordion", a);
        } catch(d) {
            Track.error(d);
        }
    }
},checkMaxHeight:function() {
    for (var a = 0; a < this.contents.length; a++) {
        if (this.contents[a].getHeight() > this.maxHeight) {
            this.maxHeight = this.contents[a].getHeight();
        }
    }
},attachInitialMaxHeight:function() {
    this.current.previous("div." + this.options.toggleClass).addClassName(this.options.toggleActive);
    if (this.current.getHeight() != this.maxHeight) {
        this.current.setStyle({height:this.maxHeight + "px"});
    }
},clickHandler:function(b) {
    var a = b.element();
    if (!this.isAnimating) {
        if (a.hasClassName(this.options.toggleClass)) {
            this.expand(a);
        } else {
            a = a.up("." + this.options.toggleClass);
            if (a != null && a != undefined) {
                this.expand(a);
            }
        }
    }
},initialHide:function() {
    for (var a = 0; a < this.contents.length; a++) {
        if (this.contents[a] != this.current) {
            this.contents[a].hide();
            this.contents[a].setStyle({height:0});
        }
    }
},animate:function() {
    var c = [],a = {sync:true,scaleFrom:0,scaleContent:false,transition:Effect.Transitions.sinoidal,scaleMode:{originalHeight:this.maxHeight,originalWidth:this.accordion.getWidth()},scaleX:false,scaleY:true};
    c.push(new Effect.Scale(this.toExpand, 100, a));
    a = {sync:true,scaleContent:false,transition:Effect.Transitions.sinoidal,scaleX:false,scaleY:true};
    c.push(new Effect.Scale(this.current, 0, a));
    var b = 0.75;
    new Effect.Parallel(c, {duration:b,fps:35,queue:{position:"end",scope:"accordion"},beforeStart:function() {
        var d = this.options.toggleActive,e = "div." + this.options.toggleClass;
        this.isAnimating = true;
        this.current.previous(e).removeClassName(d);
        this.toExpand.previous(e).addClassName(d);
    }.bind(this),afterFinish:function() {
        this.current.hide();
        this.toExpand.setStyle({height:this.maxHeight + "px"});
        this.current = this.toExpand;
        this.isAnimating = false;
    }.bind(this)});
}});
Base64Helper = {decode:function(e) {
    var c = "",m,k,h = "",l,j,g,f = "",d = 0;
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var a = /[^A-Za-z0-9\+\/\=]/g;
    if (a.exec(e)) {
        alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
    }
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do{
        l = b.indexOf(e.charAt(d++));
        j = b.indexOf(e.charAt(d++));
        g = b.indexOf(e.charAt(d++));
        f = b.indexOf(e.charAt(d++));
        m = (l << 2) | (j >> 4);
        k = ((j & 15) << 4) | (g >> 2);
        h = ((g & 3) << 6) | f;
        c = c + String.fromCharCode(m);
        if (g != 64) {
            c = c + String.fromCharCode(k);
        }
        if (f != 64) {
            c = c + String.fromCharCode(h);
        }
        m = k = h = "";
        l = j = g = f = "";
    } while (d < e.length);
    return unescape(c);
}};