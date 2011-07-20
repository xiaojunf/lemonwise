var lemonwise_write = {}
var lw = jQuery.noConflict();

function setThumbValue(elementname,value){
//    window.setTimeout(function(){document.location.href="#";}, 400);
	document.write_review.elements[elementname].value=value;
    if(elementname=='would_recommend'){
     lw('div.write-overall-widget > label').hide();
    }
};

function showInfoBar(caption){
	hideInfoBar();
	lw(document.body).append("<div id=infoBar><table width=100%><tr nowrap id=infoContent><td width=30></td><td align=center><h2>" + caption + "</h2></td><td width=60 align=center><div id=infoClose><h2>[close]</h2></div></td></tr></table></div>");
	lw("#infoClose").click(hideInfoBar);
	lw("#infoClose").css("border-color","#ffffff");
	lw("#infoClose").css("border","7");
	lw("#infoClose").css("cursor","hand");
	lw("#infoBar").hide();
	lw("#infoContent").css("font-weight","bold");
	lw("#infoContent").css("font","20px Arial,Verdana,sans-serif;");
	lw("#infoContent").css("color","blue");
	lw("#infoBar").css("background-color","#DBDDDE");
	lw("#infoBar").css("position","absolute");
    lw(window).resize(info_position);
    lw(window).scroll(info_position);
	info_position();
	lw("#infoBar").slideDown(400); //i like sliding in more than fade in this case. i think it catches the users attention more effectively
	lw("#infoBar").fadeIn(800); //if you like this more remark the previous line

};
function hideInfoBar(){
	lw("#infoBar").fadeOut(400);
	lw("#infoBar").remove();
};

function info_position() {
	var scrollPosition = lw(window).scrollTop();
	lw("#infoBar").css("top",scrollPosition +"px");
	lw("#infoContent").css("height","45px");
	lw("#infoBar").css("left","0px");
	lw("#infoBar").css("width",lw(window).width());
};

lemonwise_write.postReviewOnClick = function(e){
    event.stopPropagation();
    e.preventDefault();
    var form = lw(this).closest('form');
    lw(form).submit();

};

lemonwise_write.submitAjaxForm = function(form){
     lw.ajax({
            type: 'POST',
            url: lw(form).attr('action'),
            data: lw(form).serialize(),
            dataType: 'json',
            context: form,
            success: function(data, status, xhr){


                lw('div.write-a-review-panel').slideUp('slow');
                lw('div.review-browser-panel > section > div > ul').prepend(data.html);
                lw('div.review-browser-panel > section > div > ul').find('li:first-child').slideDown('slow', function() {
                    lemonwise_write.initPostReview();
                    lemonwise.initHelpful();
                    lemonwise_write.initThumbs();
                    lemonwise_write.initWrite();
                    lemonwise.initPostComment();
                    lemonwise.initReply();
                });

                showInfoBar('Successfully!   Thanks for leaving the review!');
                lw("#infoBar").fadeOut(12000);
                lw(':input','#write_review').not(':button, :submit, :reset').not(lw('input[name$="_id"]')).not(lw('input[name="csrfmiddlewaretoken"]')).val('').removeAttr('checked').removeAttr('selected');
                lw('div[id^="write-a-review-"]').slider("value",0);
                lw('div.write-overall-widget a.thumbs').removeClass('selected');
                lw('ul.write-thumbs a.thumbs').removeClass('selected');
                lemonwise_write.refreshGlance();

            }
        })
};

lemonwise_write.refreshGlance = function(){
    var product_id=lw('div.write-a-review-panel input[name="product_id"]').val();
    var url='/api/reviews/'.concat(product_id).concat('/glance/');
    lw.get(url,function(data){
        lw('#lemonwise-reviews > div.glance-panel').replaceWith(data.html);
        var reviews_overall = lw('div.review-browser-panel > section > header > div > h4');
        reviews_overall.html(reviews_overall.html().split("of")[0]+" of "+data.review_count);
        lemonwise_write.initWrite();
        window.setTimeout(function(){document.location.href='#review_browser_panel';}, 400);
    })
};

lemonwise_write.thumbsOnClick = function(e){
    event.stopPropagation();
    e.preventDefault();
     if (!lw(this).hasClass('selected')) {
            lw(this).addClass('selected');
	    	if(lw(this).hasClass('up')){
            	lw(this).next().removeClass('selected');
			}
			else {
				lw(this).prev().removeClass('selected');
			}

        }

};

lemonwise_write.writeOnClick = function(e){
    event.stopPropagation();
    e.preventDefault();
    var lw = jQuery.noConflict();
    if (lw('div.write-a-review-panel').css('display') == 'block') {
            lw('div.write-a-review-panel').slideUp('slow');
        }
    else {
            lw('div.write-a-review-panel').slideDown('slow');
        }
};


lemonwise_write.initPostReview = function(){
    lw('a[data-lemonwise-bind="postReview"]').unbind('click',lemonwise_write.postReviewOnClick);
    lw('a[data-lemonwise-bind="postReview"]').bind('click',lemonwise_write.postReviewOnClick);
};

lemonwise_write.initThumbs = function(){
    lw('a.thumbs').unbind('click',lemonwise_write.thumbsOnClick);
    lw('a.thumbs').bind('click',lemonwise_write.thumbsOnClick);
};

lemonwise_write.initWrite = function(){
    lw('#write-review').unbind('click',lemonwise_write.writeOnClick);
    lw('#write-review').bind('click',lemonwise_write.writeOnClick);
};

lw(document).ready(function () {
//    lw('label.error').css("color","red");
    lemonwise_write.initWrite();
    lemonwise_write.initPostReview();
    lemonwise_write.initThumbs();
    lw('#write_review').validate({

        submitHandler: function(form){
            lemonwise_write.submitAjaxForm(form);
        }

    });

});


 
