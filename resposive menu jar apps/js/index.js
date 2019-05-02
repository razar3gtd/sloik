

$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('ul').toggleClass('active')
	})
})

$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('nav a').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('nav a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}





const BREAKPOINTY = {
	XS:599,
	LT:750,
	GT:956,
	XL:1050,
}

var ILOŚĆ_DODAWANYCH_KLOCKÓW = 0;
var ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 0;

// PO zmianie wielkości okna
$(window).resize((ev)=>{
	console.log(ev);
	$(`div.projekt:lt(${ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW})`).show();

	if($(window).width() < BREAKPOINTY.XS
		){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 1;
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 3;
	}
	else if($(window).width() < BREAKPOINTY.LT ){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 2;
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 6;
	}
	else if($(window).width() < BREAKPOINTY.GT){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 3;
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 9;
	}
	else if($(window).width() < BREAKPOINTY.XL){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 4;
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 12;
	}
	else if($(window).width() > BREAKPOINTY.XL){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 4;
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 12;
	}
	$(`div.projekt:lt(${ILOŚĆ_WSZYSTKICH_KLOCKÓW})`).hide();
	$(`div.projekt:lt(${ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW})`).show();
})


    $(document).ready(function () {
    ILOŚĆ_WSZYSTKICH_KLOCKÓW = $("div.projekt").size();

	if ( $(window).width() < BREAKPOINTY.XS ){
        ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 1;
    } else if ($(window).width() <= BREAKPOINTY.LT ) {
        ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 6;
    }
    else if ($(window).width() <= BREAKPOINTY.GT) {
        ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 9;
    }
    else if ($(window).width() > BREAKPOINTY.GT) {
        ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = 12;
    }

   if($(window).width() < BREAKPOINTY.XS ){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 1;
	}
	else if($(window).width() < BREAKPOINTY.LT ){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 2;
	}
	else if($(window).width() < BREAKPOINTY.GT){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 3;
	}
	else if($(window).width() > BREAKPOINTY.GT){
		ILOŚĆ_DODAWANYCH_KLOCKÓW = 4;
	}

    

    $(`div.projekt:lt(${ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW})`).show();
    
    $('div .batton3').click(function () {
    	if(ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW + ILOŚĆ_DODAWANYCH_KLOCKÓW <= ILOŚĆ_WSZYSTKICH_KLOCKÓW){
			ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW += ILOŚĆ_DODAWANYCH_KLOCKÓW;
		
		}
		else {
		ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW = ILOŚĆ_WSZYSTKICH_KLOCKÓW;
		}
        $('div.projekt:lt('+ILOŚĆ_WYŚWIETLANYCH_KLOCKÓW+')').show();
    });
});
