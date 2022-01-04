
$(document).ready(function() {

    $('#parent').hover(function() {
        $('#submenu').stop(true, true).slideDown(1000);
    }, function() {
        $('#submenu').stop(false, false).slideUp(1000000);
    });

    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    if (document.documentElement.clientWidth < 900) {
        // scripts
    }
    $('#prod').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1536,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 475,
            settings: {
                slidesToShow: 1
            }
        } 
        ]
    });
    // $("#s").click(function(){
    // 	Swal.fire({
    // 		position: 'center',
    // 		title: 'Message Submit Successfully! Our Concern Person Send you the Consultant Schedule by reply email',
    // 		showConfirmButton: false,
    // 		timer: 2000
    // 	  })
    //   });

    $("#search").click(function() {
        if ($("#search").hasClass('logins')) {
            $("#search").removeClass('logins');
            $("#searchInput").removeClass("hidden");
            $("#searchInput").addClass("login");
            if(window.screen.width <475){
                $("#hidden").addClass("hidden");
                $("#hidden1").addClass("hidden");
                $("#hidden2").addClass("hidden");
                $("#hidden3").addClass("hidden");
            }
            else{
                $("#hidden").removeClass("hidden");
                $("#hidden1").removeClass("hidden");
                $("#hidden2").removeClass("hidden");
                $("#hidden3").removeClass("hidden");
            }
            $("#searchInput").focus();
        } else {
            $("#searchInput").removeClass("login");
            $("#searchInput").addClass("hidden");
            $("#search").addClass("logins");
            $("#hidden").removeClass("hidden");
            $("#hidden1").removeClass("hidden");
            $("#hidden2").removeClass("hidden");
            $("#hidden3").removeClass("hidden");
        }
    })
    $("#searchStore").click(function(){
        if($("#searchStore").hasClass('loginss')){
            $("#searchStore").removeClass('loginss');
            $("#searchInputStore").removeClass('hidden');
            $("#searchInputStore").addClass("loginsss");
            if(window.screen.width <475){
                $("#hidden").addClass("hidden");
                $("#hidden1").addClass("hidden");
                $("#hidden2").addClass("hidden");
                $("#hidden3").addClass("hidden");
                $("#hidden4").addClass("hidden");
            }
            else{
                $("#hidden").removeClass("hidden");
                $("#hidden1").removeClass("hidden");
                $("#hidden2").removeClass("hidden");
                $("#hidden3").removeClass("hidden");
            }
            $("#searchInputStore").focus();
        }else {
            $("#searchInputStore").removeClass("loginsss");
            $("#searchInputStore").addClass("hidden");
            $("#searchStore").addClass("loginss");
            $("#hidden").removeClass("hidden");
            $("#hidden1").removeClass("hidden");
            $("#hidden2").removeClass("hidden");
            $("#hidden3").removeClass("hidden");
            $("#hidden4").removeClass("hidden");
        }
    })
});













// -----------