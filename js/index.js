$(document).ready(function(){
    $('.Cookies_btn_close').click(function(){
        $('.Cookies').slideUp(1000);
    })
    $('.icon_close_ad').click(function(){
        $('.Sam_ad').slideUp(1000);
    })
    $('.gb_nav_main>li').mouseover(function(){
        $(this).children().eq(1).css("display","block");
        $(this).children().eq(1).find('.cls_btn').click(function(){
            $(this).parent().parent().slideUp();
        })
    });

    $('.gb_nav_main>li').mouseout(function(){
        $(this).children().eq(1).css("display","none");
    });
    
    var flag = 0;
    $('.phone_nav_logo').click(function(){
    	if(flag==0){
    		$('.drop_phone').css("transform","translateX(0)");
    		flag=1;
    		$(this).css({"background-size":"160px auto","background-position":"-65px -27px"});
    		$('.mask').css('display','block');
    		
    		var startX =0 ;
    		var startY =0 ;
    		var moveEndX=0 ;
    		var moveEndY =0;
    		var distanceX=0;
    		var distanceY=0;
    		/*左滑关闭功能实现*/
    			$("body").on("touchstart",function(e){
    				/*e.preventDefault();*/
    				startX=e.originalEvent.changedTouches[0].pageX;
    				startY=e.originalEvent.changedTouches[0].pageY;
    			});
    			
    			$('body').on("touchmove",function(e){
    				moveEndX=e.originalEvent.changedTouches[0].pageX;
					moveEndY=e.originalEvent.changedTouches[0].pageY;
    				distanceX=moveEndX-startX;
    				distanceY=moveEndY-startY;
    				
    			});
    			
    			
    			$('body').on("touchend",function(e){
    				if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0){
    					$('.drop_phone').css("transform","translateX(-100%)");
			    		flag=0;
			    		$('.phone_nav_logo').css({"background-size":"130px auto","background-position":"0px -21px"});
			    		$('.mask').css('display','none');
    				}	
    				
    				
    				startX =0 ;
		    		startY =0 ;
		    		moveEndX=0 ;
	    			moveEndY =0;
		    		distanceX=0;
		    		distanceY=0;
    			});
    		/*左滑关闭功能实现*/
    		
    	}
    	else if(flag==1){
    		$('.drop_phone').css("transform","translateX(-100%)");
    		flag=0;
    		$(this).css({"background-size":"130px auto","background-position":"0px -21px"});
    		$('.mask').css('display','none');
    	}   	
    })
    
    $('.drop_list_t>li').click(function(){
    	$(this).children().eq(1).css("display","block");
    })
    
    
    $('.drop_list_t .drop_list_back').click(function(){
    	$(this.parentNode).hide();
    	$(this.parentNode.parentNode.parentNode.parentNode).css("display","block");
    	
    	/*$(this).children().eq(1).css("display","block");*/
    })

})
