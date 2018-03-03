// function selectHome() {
//     $('.jack-nav a.active').removeClass('active');
//     $('#home-tag').addClass('active');
// }
//
// function selectMessage() {
//     $('.jack-nav a.active').removeClass('active');
//     $('#message-tag').addClass('active');
// }
//
// function selectFriends() {
//     $('.jack-nav a.active').removeClass('active');
//     $('#friends-tag').addClass('active');
// }


/*function selectNavButton(buttonID) {
    $('.jack-nav a.active').removeClass('active');
    $('#'+buttonID).addClass('active');
}*/

function selectNavButton(buttonID, targetID) {
    $('.jack-nav a.active').removeClass('active')
    $('#' + buttonID).addClass('active');
    $('html, body').animate({
        scrollTop: $('#' + targetID).offset().top
    }, 400);
    //alert(buttonID + '\n' + targetID);
}


function selectMenuButton(buttonID) {
    $('.jack-menu a.active').removeClass('active')
    $('#' + buttonID).addClass('active');
   /* $('.jack-menu').transition('fade up');*/
    if (buttonID === 'app-tag') {
        for (var i = 0; i < 6; i++) {
            $('#work-img-' + (i + 1)).attr("src", "/images/app-img0" + (i + 1) + ".jpg");
        }
    }
    if (buttonID === 'website-tag') {
        for (var i = 0; i < 6; i++) {
            $('#work-img-' + (i + 1)).attr("src", "/images/pic0" + (i + 1) + ".jpg");
        }
    }
    if (buttonID === 'graphic-tag') {
        for (var i = 0; i < 6; i++) {
            $('#work-img-' + (i + 1)).attr("src", "/images/pic0" + (i + 1) + ".jpg");
        }

    }
    if (buttonID === 'photography-tag') {
        for (var i = 0; i < 6; i++) {
            $('#work-img-' + (i + 1)).attr("src", "/images/app-img0" + (i + 1) + ".jpg");
        }

    }
    if (buttonID === 'arts-tag') {
        for (var i = 0; i < 6; i++) {
            $('#work-img-' + (i + 1)).attr("src", "/images/pic0" + (i + 1) + ".jpg");
        }

    }

}


function selectWorkImage(imgTag) {
    //$('#'+imgTag);
    //alert('JACK IN THE BOX');
    var holder_width = $('div#img-detail-holder').width();

    $('#img-detail').css('max-width', (holder_width-40)+'px');
    //$('#img-detail').css('margin', '0px');
    //var img_width = $('#img-detail').width()
    //alert(img_width);
    $('div#img-detail-holder').modal('show');

}

// function didHitGetStarted() {
//     $('js-gtco-nav-toggle').removeClass('active');
//     $('html，body').animate({
//         scrollTop: $('#jk-contact').offset().top
//     }, 1000);
// }

/*
jQuery(document).ready(function($) {
    $('body').scrollspy({ target: '#header', offset: 400});
    if ($(".scroll-header")[0]){
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('#header').addClass('navbar-fixed-top');
            }
            else {
                $('#header').removeClass('navbar-fixed-top');
            }
        });
    }*/
