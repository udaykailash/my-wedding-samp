/* color-palette */
(function () {
	jQuery(document).ready(function($) {
		jQuery('#palette').animate({
			left: '-185px'
		});
			jQuery('.color-click').click(function(e){
			e.preventDefault();
				var div = jQuery('#palette');
				console.log(div.css('left'));
				if (div.css('left') === '-185px') {
				jQuery('#palette').animate({
					left: '0px'
				});
			}else {
				jQuery('#palette').animate({
					left: '-185px'
				});
			}
		})
			if(jQuery.cookie("css")) {
			jQuery("link#main-style").attr("href",jQuery.cookie("css"));
		}

		if (jQuery.cookie('bgpattern')) {
			jQuery('body').addClass(jQuery.cookie('bgpattern'));
		}
		if (jQuery.cookie('layout')) {
			jQuery('body').addClass(jQuery.cookie('layout'));
		}

		jQuery("#bgsolid li a").click(function(e) {
			e.preventDefault();
			jQuery(this).parent().parent().find('a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery("link#main-style").attr("href",jQuery(this).attr('href'));
			jQuery.cookie("css",	jQuery(this).attr('href'));
			return false;
		});
		jQuery('#layout_select').on('change', function() {
			  var i=jQuery(this).val(); // or $(this).val()
			   var slider1 = jQuery('#home_slider').data('flexslider');
			  if(i=="boxed")
			  {
				  	 jQuery('body').addClass('boxed');
					 jQuery.cookie('layout',jQuery(this).val());
					
						slider1.resize();
			  }
			  else if(i=="fullwidth")
			  {
				 jQuery('body').removeClass('boxed');
				  jQuery.removeCookie('layout');
				  slider1.resize();
				 
			  }
			  else
			  {
				  jQuery('body').removeClass('boxed');
				   jQuery.removeCookie('layout');
				   slider1.resize();
			  }
			});

			jQuery("#bg li a").click(function(e) {
			e.preventDefault();
				 if (!jQuery('body').hasClass(jQuery(this).attr('class'))) {
				jQuery('body').removeClass(jQuery.cookie('bgpattern'));
                    jQuery('body').addClass(jQuery(this).attr('class'));
                    jQuery.cookie('bgpattern',jQuery(this).attr('class'));
			}
		});

			jQuery("#palette .reset").click(function() {
			jQuery('body').removeClass(jQuery.cookie('bgpattern'));
            	 jQuery('#main-style').attr('href',null);
            	 jQuery.removeCookie('css');
                 jQuery.removeCookie('bgpattern');
				 jQuery.removeCookie('layout');
				 jQuery('body').removeClass('boxed');
				   var slider1 = jQuery('#home_slider').data('flexslider');
				 slider1.resize();
		});
	});
})(jQuery);