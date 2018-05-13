	/* Build-in */

	/* Ready function */
	$(function() {

		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);

		/* Outer Click */
		$('body').click(function(){
			$('html').removeClass('popact');
			$('.lowdown').removeClass('active');
		});

		/* Dropdown menu */
		var insertcount = 0;
		$(document).on("click", '.downlister ul li', function(){
			if($(this).parents('.downlister').hasClass("urbancity")) {
				if(insertcount == 1) {
					var listval = $(this).text();
					$(this).parents('.downlister').siblings('.textbox').val($(this).parents('.downlister').siblings('.textbox').val() + ', ' + listval);
					var listcity = ["Mumbai", "Chennai", "Mumbai", "Mumbai", "Mumbai", "Mumbai", "Mumbai", "Mumbai"];
					var listhtml = "";
					for(var i = 0; i <= listcity.length; i++) {
						listhtml += "<li>" + listcity[i] + "</li>";
					}
					$(this).parent().html(listhtml);
					insertcount = 0;
				} else {
					insertcount++;
					var listval = $(this).text();
					$(this).parents('.downlister').siblings('.textbox').val(listval).focus();
					var listcity = ["Potheri", "Guindy", "Express Avenue", "Fort White", "Potheri", "Guindy", "Express Avenue", "Fort White", "Potheri", "Guindy", "Express Avenue", "Fort White"];
					var listhtml = "";
					for(var i = 0; i <= listcity.length; i++) {
						listhtml += "<li>" + listcity[i] + "</li>";
					}
					$(this).parent().html(listhtml);
				}
			} else {
				var listval = $(this).text();
				$(this).parents('.downlister').siblings('.textbox').val(listval);
			}
		});

		/* Header for subpage */
		if($('.sectionfirst').length == 0) {
			$('header').addClass('subpage');
		}

		/* Fade In / Fade Out Form */
		$('#signform1').show();
		$('.nextbox button').click(function(){
			if($(this).parents('.signformfade').next('.signformfade').length != 0) {
				$('.signformfade').fadeOut();
				$(this).parents('.signformfade').next('.signformfade').fadeIn();
			}
		});

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

		/* Drop Accord */
		$('.dropaccord span').click(function(){
			if(!$(this).parent().hasClass('active')) {
				$(this).parent().addClass('active');
				$(this).siblings('div').slideDown();
			} else {
				$('.dropaccord div').removeClass('active').slideUp();
			}
		});

		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')'});
		});

		/* Slide down package */
		$('.packagain li:first-child .packagelabel div').show();
		$('.packagelabel').click(function(){
			if(!$(this).find('input').is(':checked')) {
				$('.packagelabel > div').slideUp();
				$(this).find('div').slideDown();
			}
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

		/* Edit dropdown */
		$('.select').click(function(e){
			e.stopImmediatePropagation();
			if(!$(this).parents('.selectbox').find('.lowdown').hasClass('active')) {
				$('.lowdown').removeClass('active');
				$(this).parents('.selectbox').find('.lowdown').addClass('active');
			} else {
				$('.lowdown').removeClass('active');
			}
		});
		$('.lowdown ul li').click(function(){
			$(this).parents('.selectbox').find('.select').html($(this).text());
			$('.lowdown').removeClass('active');
		});

		/* Show Popup */
		$('.popactbtn, .choosegar').click(function(){
			$('html').addClass('popact');
			return false;
		});

		/* Close Popup */
		$('.closenow').click(function(){
			$('html').removeClass('popact');
			return false;
		});
		$('.carform, .popactbtn, .reviewmore').click(function(e){
			e.stopImmediatePropagation();
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
		/*
		if($(document).scrollTop() >= 150){
			$('.quoteblock, .listingarage>div:first-child').addClass('fixed');
		} else {
			$('.quoteblock, .listingarage>div:first-child').removeClass('fixed');
		}
		*/
		if($(document).scrollTop() >= 213.49){
			$('.detailserve, .quoteblock').addClass('fixed');
		} else {
			$('.detailserve, .quoteblock').removeClass('fixed');
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
