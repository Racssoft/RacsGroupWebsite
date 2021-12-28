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

$( document ).ready(function() {

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
	// $("#s").click(function(){
	// 	Swal.fire({
	// 		position: 'center',
	// 		title: 'Message Submit Successfully! Our Concern Person Send you the Consultant Schedule by reply email',
	// 		showConfirmButton: false,
	// 		timer: 2000
	// 	  })
	//   });
});













// -----------
