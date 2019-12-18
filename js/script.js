//script

$(function() {
			$('.hero-container').addClass('animated slower fadeIn');
			$('.hero-container h2').addClass('animated slow fadeInUp');
			$('.hero-container p').addClass('animated delay slow fadeInUp');
			$('.hero-container a').addClass('animated delay-1s slower fadeInUp');
			$('.registration').addClass('animated fast slideInRight');
	
	
			$(window).on('scroll',function(){
				var scrollTop = $(document).scrollTop();
				
				if (scrollTop > 50){
					$('section img').addClass('animated slow fadeInUp');
					$('.heading').addClass('animated slow zoomIn');
					}
				
				if (scrollTop > 80){
					$('section img').addClass('animated slow zoomIn');}
				
				if (scrollTop > 200){
					$('section h2, section p').addClass('animated slow fadeInUp');
					$('section a').addClass('animated slower fadeInUp');
				}
				if (scrollTop > 500){
					$('.registration').addClass('animated faster slideOutRight');
				} 

				else $('.registration').removeClass('animated faster slideOutRight');
				$('.registration').addClass('animated faster slideInRight');
			});		
	
	//modal open
			$('.request-modal-box, #contact').on('click',function(){
		
			$('.modal-box').css({
				display:'grid'
								});
			});
	//modal close
	$('.close').on('click',function(){
		
			$('.modal-box').css({
				display:'none'
			});
	});
	
	});
