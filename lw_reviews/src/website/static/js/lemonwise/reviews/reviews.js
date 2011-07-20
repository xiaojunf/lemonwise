var lemonwise = {};
var lw = jQuery.noConflict();

lemonwise.replyOnClick = function(e) {
    event.stopPropagation();
    e.preventDefault();

    if (lw(this).closest('li').find('div.reply-form').css('display') == 'block') {
        lw(this).closest('li').find('div.reply-form').slideUp('slow');
    } else {
        lw(this).closest('li').find('div.reply-form').slideDown('slow');
    }
};

lemonwise.helpfulOnClick = function(e) {
    event.stopPropagation();
    e.preventDefault();

    if (!lw(this).closest('footer.helpful').find('a.selected').length) {
        var form = lw(this).closest('form');
        var url = lw(form).attr('action');

        if (lw(this).is('.thumbs.up')) {
            url += '?helpful=True';
        } else {
            url += '?helpful=False';
        }

        lw.ajax({
            type: 'POST',
            url: url,
            data: lw(form).serialize(),
            context: this,
            success: function(data, status, xhr) {
                lw(this).addClass('selected');
            }
        });
    }
};

lemonwise.postCommentOnClick = function(e) {
    event.stopPropagation();
    e.preventDefault();

    if (lw(this).prevAll('input[name="name"]').val() == '') {
        alert('Please enter your name to leave a comment');
        return false;
    }

    if (lw(this).prevAll('textarea[name="message"]').val() == '') {
        alert('Please enter your comment');
        return false;
    }

    var form = lw(this).closest('form');

    lw.ajax({
        type: 'POST',
        url: lw(form).attr('action'),
        data: lw(form).serialize(),
        dataType: 'json',
        context: form,
        success: function(data, status, xhr) {
            lw(this).find('input[name="name"]').val('');
            lw(this).find('textarea[name="message"]').val('');
            lw(this).parent().prev('ul').prepend(data.html);
            lw(this).parent().prev('ul').find('li:first-child').slideDown('slow', function() {
                lemonwise.initPostComment();
                lemonwise.initReply();
            });

            if (lw(this).parent().hasClass('reply-form')) {
                lw(this).parent().slideUp('slow');
            }
        }
    });
};

lemonwise.initReply = function() {
    lw('a[data-lemonwise-bind="replyComment"]').unbind('click', lemonwise.replyOnClick);
    lw('a[data-lemonwise-bind="replyComment"]').bind('click', lemonwise.replyOnClick);
};

lemonwise.initHelpful = function() {
    lw('footer.helpful a').unbind('click', lemonwise.helpfulOnClick);
    lw('footer.helpful a').bind('click', lemonwise.helpfulOnClick);
};

lemonwise.initPostComment = function() {
    lw('a[data-lemonwise-bind="postComment"]').unbind('click', lemonwise.postCommentOnClick);
    lw('a[data-lemonwise-bind="postComment"]').bind('click', lemonwise.postCommentOnClick);
};

lw(document).ready(function () {
    lemonwise.initReply();
    lemonwise.initHelpful();
    lemonwise.initPostComment();

});