	/* Build-in */

	/* Ready function */
	$(function() {

		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);

		/* Dropdown menu */
		$('.downlister ul li').click(function(){
			var listval = $(this).text();
			$(this).parents('.downlister').siblings('.textbox').val(listval);
		});

		/* Header for subpage */
		if($('.sectionfirst').length == 0) {
			$('header').addClass('subpage');
		}

		/* Initial Dropdown */
		$('.textbox').keyup(function(){
			var inputValue = $(this).val().toLowerCase();
		    $(this).siblings('.downlister').find('li').each(function() {
			    if($(this).html().toLowerCase().indexOf(inputValue) == -1)
			    {
			        $(this).hide();
			    }
			    else
			    {
			        $(this).show();
			    }
    		});
		});

		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')'});
		});

		/* Sorting Drop down */
		$('.sortq span').click(function(){
			$(this).siblings('div').toggleClass('active');
		});
		$('.sortq div ul li').click(function(){
			var val = $(this).text();
			$('.sortq span small').text(val);
			$(this).parents('div').removeClass('active');
		});

		/* Nav Mobile */
		$('#nav-icon').click(function(){
			$(this).toggleClass('active');
			$('nav').toggleClass('active');
		});

		/* Scroll Animation */ 
		$('*[data-animated]').addClass('animated');
			function animated_contents() {
			$(".animated:appeared").each(function (i) {
				var $this    = $(this),
					animated = $(this).data('animated');
				setTimeout(function () {
					$this.addClass(animated);
				}, 70 * i);
			});
		}
		
		/* Init Function */
		animated_contents();
		$(window).scroll(function() {
			animated_contents();
		});
	});

	/* Scroll */
	$(window).scroll(function() {
		if($(document).scrollTop() >= 150){
			$('.quoteblock, .listingarage>div:first-child').addClass('fixed');
		} else {
			$('.quoteblock, .listingarage>div:first-child').removeClass('fixed');
		}
	});
	
	/* Resize */
	$(window).resize(function(){

		/* Init Function */

	});

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */

	});
