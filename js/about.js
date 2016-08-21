 $(function(){
	//about-1 点击出现隐藏内容
	$('.more').click(function(){
		$('.hidden').css('display','block');
		$(this).hide();		
	})

	
	var columnsLiWidth = $('.columns ul').children().width();


	//about当前样式:
	$('#about-1').show().siblings().hide();
	
	$('.columns ul').children().mouseover(function(){
		//小导航底部横线随鼠标移动
		 $(this).parent('ul').siblings().stop().animate({
				left : + columnsLiWidth * $(this).index() + 'px'
		 },200);

		 //tab切换
	 
		$(this).closest('#content').find('#mainNav').children().eq($(this).index()).show().siblings().hide();
	})



	//返回顶部效果
	//当滚动条距离顶部100px时，按钮出现 否则消失
    // $(window).scroll(function(){
    // 	if($(window).scrollTop()>200){
    // 		$('#topcontrol').fadeIn(500);
    // 	}else{
    // 		$('#topcontrol').fadeOut(500);
    // 	}
    // })


	$('#topcontrol').click(function(){
		$('body,html').animate({scrollTop:0},200);
		return false;
	})

	
})






