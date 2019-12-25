$(document).ready(function(){

    $(".navbar ul li a").click(function(e){

        e.preventDefault();

        var navOffset = $('.navbar').height()+50;

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - navOffset
            }, 1000, function(){

            
            });
    });

    $('body').scrollspy({offset: 500});

    AOS.init({
        offset: 120,
        duration: 600,
        repeat: false,
        once: true
    });
});