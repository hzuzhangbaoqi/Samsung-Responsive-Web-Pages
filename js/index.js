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
    	}
    	else if(flag==1){
    		$('.drop_phone').css("transform","translateX(-100%)");
    		flag=0;
    		$(this).css({"background-size":"130px auto","background-position":"0px -21px"});
    		$('.mask').css('display','none');
    	}   	
    })
    
    $('.drop_list_t>li').click(function(){
    	/*$(this).parent().css("display","none");*/
    	$(this).children().eq(1).css("display","block");
    	
    })
    
   /*$('.drop_list_t>li').click(function(){
    	$(this).children().eq(1).children().eq(0).css("display","none");
    })*/
    
    
    
    
    
    
    
})
