    
$(document).ready(function(){
	$(function() {
			var a = 0;
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					if ( $('.counter-box').length > 0 ) {
						var oTop = $('.counter-box').offset().top - window.innerHeight;
						if (a == 0 && $(window).scrollTop() > oTop) {
							$('.count').each(function () {
						    $(this).prop('Counter',0).animate({
						        Counter: $(this).text()
						    }, {
						        duration: 4000,
						        easing: 'swing',
						        step: function (now) {
						            $(this).text(Math.ceil(now));
						        }
						    	});
							}); 
							a = 1;
						}
					}
				} 
			});
			
		});
	$("#to-top").hide();
    	$(function() {
    		$(window).scroll(function() {
    			if ($(this).scrollTop() > 100) {
    				$('#to-top').fadeIn();
    			} else {
    				$('#to-top').fadeOut();
    			}
    		});
    		$('#to-top a').click(function() {
    			$('body,html').animate({
    				scrollTop : 0
    			}, 800);
    			return false;
    		});
    	});
});
$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

