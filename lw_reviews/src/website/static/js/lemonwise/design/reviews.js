$(function() {
    $( "#overall-width-slider" ).slider({
        disabled: true,
        value: -33,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#overall-width-amount" ).val( "$" + ui.value );
        }
    });
    $( "#overall-width-amount" ).val( "$" + $( "#overall-width-slider" ).slider( "value" ) );
});

$(function() {
    $( "#overall-bridge-slider" ).slider({
        disabled: true,
        value: -7,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#overall-bridge-amount" ).val( "$" + ui.value );
        }
    });
    $( "#overall-bridge-amount" ).val( "$" + $( "#overall-bridge-slider" ).slider( "bridge-value" ) );
});

$(function() {
    $( "#overall-temple-slider" ).slider({
        disabled: true,
        value: 7,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#overall-temple-amount" ).val( "$" + ui.value );
        }
    });
    $( "#overall-temple-amount" ).val( "$" + $( "#overall-temple-slider" ).slider( "temple-value" ) );
});

$(function() {
    $( "#overall-color-slider" ).slider({
        disabled: true,
        value: -7,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#overall-color-amount" ).val( "$" + ui.value );
        }
    });
    $( "#overall-color-amount" ).val( "$" + $( "#overall-color-slider" ).slider( "color-value" ) );
});








$(function() {
    $( "#thumbs-up-width-slider" ).slider({
        disabled: true,
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-up-width-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-up-width-amount" ).val( "$" + $( "#thumbs-up-width-slider" ).slider( "width-value" ) );
});

$(function() {
    $( "#thumbs-up-bridge-slider" ).slider({
        disabled: true,
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-up-bridge-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-up-bridge-amount" ).val( "$" + $( "#thumbs-up-bridge-slider" ).slider( "bridge-value" ) );
});

$(function() {
    $( "#thumbs-up-temple-slider" ).slider({
        disabled: true,
        value: 50,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-up-temple-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-up-temple-amount" ).val( "$" + $( "#thumbs-up-temple-slider" ).slider( "temple-value" ) );
});

$(function() {
    $( "#thumbs-up-color-slider" ).slider({
        disabled: true,
        value: 100,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-up-color-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-up-color-amount" ).val( "$" + $( "#thumbs-up-color-slider" ).slider( "color-value" ) );
});








$(function() {
    $( "#thumbs-down-width-slider" ).slider({
        disabled: true,
        value: 50,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-down-width-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-down-width-amount" ).val( "$" + $( "#thumbs-down-width-slider" ).slider( "width-value" ) );
});

$(function() {
    $( "#thumbs-down-bridge-slider" ).slider({
        disabled: true,
        value: -50,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-down-bridge-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-down-bridge-amount" ).val( "$" + $( "#thumbs-down-bridge-slider" ).slider( "bridge-value" ) );
});

$(function() {
    $( "#thumbs-down-temple-slider" ).slider({
        disabled: true,
        value: -100,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-down-temple-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-down-temple-amount" ).val( "$" + $( "#thumbs-down-temple-slider" ).slider( "temple-value" ) );
});

$(function() {
    $( "#thumbs-down-color-slider" ).slider({
        disabled: true,
        value: -100,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#thumbs-down-color-amount" ).val( "$" + ui.value );
        }
    });
    $( "#thumbs-down-color-amount" ).val( "$" + $( "#thumbs-down-color-slider" ).slider( "color-value" ) );
});







$(function() {
    $( "#review-1-width-slider" ).slider({
        disabled: true,
        value: 50,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#review-1-width-amount" ).val( "$" + ui.value );
        }
    });
    $( "#review-1-width-amount" ).val( "$" + $( "#review-1-width-slider" ).slider( "width-value" ) );
});

$(function() {
    $( "#review-1-bridge-slider" ).slider({
        disabled: true,
        value: -50,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#review-1-bridge-amount" ).val( "$" + ui.value );
        }
    });
    $( "#review-1-bridge-amount" ).val( "$" + $( "#review-1-bridge-slider" ).slider( "bridge-value" ) );
});

$(function() {
    $( "#review-1-temple-slider" ).slider({
        disabled: true,
        value: -100,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#review-1-temple-amount" ).val( "$" + ui.value );
        }
    });
    $( "#review-1-temple-amount" ).val( "$" + $( "#review-1-temple-slider" ).slider( "temple-value" ) );
});

$(function() {
    $( "#review-1-color-slider" ).slider({
        disabled: true,
        value: -100,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#review-1-color-amount" ).val( "$" + ui.value );
        }
    });
    $( "#review-1-color-amount" ).val( "$" + $( "#review-1-color-slider" ).slider( "color-value" ) );
});






$(function() {
    $( "#write-a-review-width-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-width-amount" ).val( "$" + ui.value );
        }
    });
    $( "#write-a-review-width-amount" ).val( "$" + $( "#write-a-review-width-slider" ).slider( "width-value" ) );
});

$(function() {
    $( "#write-a-review-bridge-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-bridge-amount" ).val( "$" + ui.value );
        }
    });
    $( "#write-a-review-bridge-amount" ).val( "$" + $( "#write-a-review-bridge-slider" ).slider( "bridge-value" ) );
});

$(function() {
    $( "#write-a-review-temple-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-temple-amount" ).val( "$" + ui.value );
        }
    });
    $( "#write-a-review-temple-amount" ).val( "$" + $( "#write-a-review-temple-slider" ).slider( "temple-value" ) );
});

$(function() {
    $( "#write-a-review-color-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-color-amount" ).val( "$" + ui.value );
        }
    });
    $( "#write-a-review-color-amount" ).val( "$" + $( "#write-a-review-color-slider" ).slider( "color-value" ) );
});
