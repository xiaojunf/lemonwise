$(function() {
    $( "#write-a-review-width-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-width-amount" ).val( ui.value );
        }
    });
    $( "#write-a-review-width-amount" ).val($( "#write-a-review-width-slider" ).slider( "value" ) );
});

$(function() {
    $( "#write-a-review-bridge-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-bridge-amount" ).val( ui.value );
        }
    });
    $( "#write-a-review-bridge-amount" ).val($( "#write-a-review-bridge-slider" ).slider( "value" ) );
});

$(function() {
    $( "#write-a-review-temple-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-temple-amount" ).val(ui.value );
        }
    });
    $( "#write-a-review-temple-amount" ).val( $( "#write-a-review-temple-slider" ).slider( "value" ) );
});

$(function() {
    $( "#write-a-review-color-slider" ).slider({
        value: 0,
        min: -100,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#write-a-review-color-amount" ).val(ui.value );
        }
    });
    $( "#write-a-review-color-amount" ).val( $( "#write-a-review-color-slider" ).slider( "value" ) );
});
