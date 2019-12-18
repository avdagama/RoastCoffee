$(document).ready(function(){
    $(".navbar ul li a").click(function(e){

        e.preventDefault();

        var navOffset = $('.navbar').height();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - navOffset
            }, 1000, function(){

            window.location.hash = hash - navOffset;
            });
    });
});