(function(){

$(document).ready(function  (){

	$(document).ready(function(){
      $('.carousel').bxSlider({

      	auto: true,
      	pause: 4000,
      	
      });
    });


	$(".button").on("click", function(e) {
	//do buttona
		if ($(".button").hasClass("button-active") && ("button-after") && ("button-before") ) {
			$(".button").removeClass("button-active"),
			$(".button").removeClass("button-after"),
			$(".button").removeClass("button-before");
		} else {
			$(".button").addClass("button-active"),
			$(".button").addClass("button-after"),
			$(".button").addClass("button-before");
			
		}

	//do nawigacji
			$("nav").toggleClass("nav-active");
			$(".cover-nav").toggleClass("cover-nav-active")

	});

	$( window ).resize(function() {
		if (window.innerWidth > 768) {
		//do nawigacji
			$("nav").removeClass("nav-active"),
		//do buttona
			$(".button").removeClass("button-active"),
			$(".button").removeClass("button-after");
		}
		 	
	});

	$( window ).scroll(function() {
			var header_scroll =  $("header");
			var header_scroll_height = header_scroll.innerHeight();
			var button_container = $(".button-container");
			var window_scrollTop = $(window).scrollTop();
			var button_container_height = button_container.innerHeight();

		if ( header_scroll_height - (button_container_height + 70)   < window_scrollTop) {
				button_container.addClass("container__nav--active");
			
		}else{
			button_container.removeClass("container__nav--active");
		}

		
		console.log(header_scroll_height)
		 	
	});


		$("nav a").click(function(){
			$("nav a").removeClass("active-nav-menu");
			$(this).addClass("active-nav-menu");

		});

});

})();