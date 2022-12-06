var w,h,Custemwidth,Custemheight,scale1,Custemheight1,Custemwidth1,scale11;
var defW = 680, defH = 540;

$(document).ready(function(){
	w = window.innerWidth;
	h = window.innerHeight;
	Custemwidth=parseInt($('#wrapper').css('width'));
	Custemheight=parseInt($('#wrapper').css('height'));
	// Custemheight1=parseInt($('.botLine').css('height'));
	// Custemwidth1=parseInt($('.botLine').css('width'));
	
	var leftv = (window.innerWidth-Custemwidth)/2;
	var topv = (window.innerHeight-Custemheight)/2;
	// var leftS = (window.innerHeight-Custemwidth1)/2;
	// var topS = (window.innerHeight-Custemheight1)/2;
	$('#wrapper').css({'left': leftv+'px', 'top': topv+'px'});
	// $('.botLine').css({'left': leftS+'px', 'top': topv+'px'});
	$(window).on('resize', function(){
		w = window.innerWidth;
		h = window.innerHeight;
		
		if(w < h)
		{
			scale1 = window.innerWidth/Custemwidth;
			// scale11 = window.innerWidth/Custemwidth1;
			
			
		}
		else
		{
			scale1 = window.innerWidth/Custemwidth;
			// scale11 = window.innerWidth/Custemwidth1;

			if(Custemheight*scale1>h)
			{
				scale1 = window.innerHeight/Custemheight;
				
			}	

			// if(Custemheight1*scale11){

			// 	scale11 = window.innerHeight/Custemheight1;
			// }
		} 
		
		scale1 = (scale1>=1)?1:scale1;
		// scale11 = (scale11>=1)?1:scale11;
					
		$('#wrapper').css({'-webkit-transform': 'scale('+scale1+')', 'transform': 'scale('+scale1+')', 'left':'0px'});
		// $('.botLine').css({'-webkit-transform': 'scale('+scale11+')', 'transform': 'scale('+scale11+')', 'left':'0px'});
		var nleft = (w-(Custemwidth*scale1))/2;
		var ntop = (h-(Custemheight*scale1))/2;
		var s_top = (h-(Custemheight1*scale11))/2;
		var sleft = (w-(Custemwidth1*scale11))/2;
		$('#wrapper').css({'left': nleft+'px', 'top': '0px'});
		// $('.botLine').css({'left': sleft+'px', 'top': '0px'});
		
	});
	
	$(window).trigger('resize');

});

function doOnOrientationChange() {	    
	$(window).trigger('resize');
}
window.addEventListener('orientationchange', doOnOrientationChange); 
