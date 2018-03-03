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
    }
    $('a.scrollto').on('click', function(e){
        var target = this.hash;
        e.preventDefault();
        if(typeof window.ga === "function"){
            ga('send', 'event', 'Top Link Clicked', $(this).html(), $(this).html());
        }
        $('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });
});