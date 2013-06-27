$(function(){
	$('.m1 li').not('.li2').find('img').hover(function(){
		var title=$(this).attr('title');
		var src=$(this).attr('data-src');
		$('.m1 .l2 img').attr('src',src);
		$('.m1 .l2 h3').text(title);
	})
		$(".m12 .br1 a").click(function(e) {
            $("body, html").animate({scrollTop:0},1000);
			return false;
        });
})

