// jQuery Smooth Scrolling
       
    $(document).ready(function () {
            
    
             $('html, body').animate({
                    scrollTop: $(target).offset().top
             }, 800, function () {
                    // Update the URL with the hash value
                    window.location.hash = target;
             });
     });
        
// Toggle Navigation Bar

$('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
});



