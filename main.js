// Show Hide sidebar

// let sidebarBtn = document.querySelector('#sidebarBtn');
// sidebarBtn.onclick = function() {

//   let sidebar = document.querySelector('aside');
//   let sidebarMobile = document.querySelector('#sidebarMobile');

//   if(sidebar.classList.contains('sm:block')) {
//     sidebar.classList.replace('sm:block', 'sm:hidden');

//   } else {
//     sidebar.classList.replace('sm:hidden', 'sm:block');
//   }

//   if(sidebarMobile.classList.contains('hidden')) {
//     sidebarMobile.classList.remove('hidden');

//   } else {
//     sidebarMobile.classList.add('hidden');
//   }
// }

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
            $("#searchInput").focus();
        } else {
            $("#searchInput").removeClass("login");
            $("#searchInput").addClass("hidden");
            $("#search").addClass("logins");
        }
    })
    $("#searchStore").click(function(){
        if($("#searchStore").hasClass('loginss')){
            $("#searchStore").removeClass('loginss');
            $("#searchInputStore").removeClass('hidden');
            $("#searchInputStore").addClass("loginsss");
            $("#searchInputStore").focus();
        }else {
            $("#searchInputStore").removeClass("loginsss");
            $("#searchInputStore").addClass("hidden");
            $("#searchStore").addClass("loginss");
        }
    })
});













// -----------