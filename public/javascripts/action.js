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
let currentTag = 'website';

function selectNavButton(buttonID, targetID) {
    $('.jack-nav a.active').removeClass('active')
    $('#' + buttonID).addClass('active');
    $('html, body').animate({
        scrollTop: $('#' + targetID).offset().top
    }, 400);
    //alert(buttonID + '\n' + targetID);
}


function selectMenuButton(buttonID) {
    $('.jack-menu a.active').removeClass('active');
    $('#' + buttonID).addClass('active');
    /* $('.jack-menu').transition('fade up');*/


    currentTag = buttonID;
    for (var i = 1; i < 7; i++) {
        $('#work-img-' + i).attr("src", "/images/work-preview/" + buttonID + '-0' + i + ".jpg");
        // if (i===3){
        //    alert("/images/" + buttonID + '-img-0' + (i + 1) + ".jpg");
        // }
    }
}


function selectWorkImage(imgTag) {
    //$('#'+imgTag);
    //alert('JACK IN THE BOX');
    var holder_width = $('div#img-detail-holder').width();

    $('#img-detail').css('max-width', (holder_width - 40) + 'px');
    //$('#img-detail').css('margin', '0px');
    //var img_width = $('#img-detail').width()
    //alert(img_width);
    $('div#img-detail-holder').modal('show');

}

const selectWorkDetail = (index) => {
    //alert(currentTag);
    //alert('FUCK - ' + '/images/' + currentTag + '-tag-detail-0' + index + '.jpg');
    $('#work-detail-img').attr('src', '/images/work-detail/' + currentTag + '-0' + index + '.jpg');
};
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
