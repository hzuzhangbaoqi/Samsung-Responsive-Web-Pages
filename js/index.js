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
})
