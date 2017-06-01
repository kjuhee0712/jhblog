	
$(document).ready(function(){

	//윈도우 10까지는 MSIE 윈도우 11부터는 Trident/를 사용한다.
	var ua = window.navigator.userAgent;
		if(ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0){ 
			document.body.className="ie";
	}

	$('.main_banner').slick({
		    infinite: true,
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        autoplay: true,
	        responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 640,		     
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        centerMode: false,
		        arrows: false,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 480,		     
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: false,
		        arrows: false,
		        infinite: true
		      }
		    }
		]
	});	

	//브라우저 사이즈에 따라 작동
	var bw=$(window).width();

	if(bw > 1024){
		
			
	}else{
		var bi = $('.main_banner .slick-slide a img');
		console.log(bi)
		var bis = bi.attr('src');
		console.log(bis);
		bis = bis.split('_');
        console.log(bis);
		$('.main_banner .slick-slide a img').attr('src',bis[0]+'_'+bis[1]+'.jpg');
	}

});
	

$(window).on('resize', function(){

	
});
	