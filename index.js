
    //Check to see if the window is top if not then display button
    $(window).scroll(()=>{
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('#up').click(()=>{
        $('html, body').animate({scrollTop : 0},500);
    });


    $('.search-button').on('click',()=>{
$('.searchInput').css('display','block')
    });

    $('.navbar-dark .navbar-nav .nav-link').on('click',()=>{
$(this).addClass('active').siblings().removeClass('active');
    });


  
