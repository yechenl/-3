$(function(){
	// alert("hello!");
	var i=0;
	var clone=$('.banner .imgs li').first().clone();
	$(".banner  .imgs").append(clone);
	var size=$(".imgs li").size();
	$(".num li").first().addClass("on");
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		$(".banner .imgs").stop().animate({left:-index*700},500);
	    $(this).addClass("on").siblings().removeClass("on");
	})

	var t=setInterval(movel,2000);
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(movel,2000);
	})

	$(".banner .left").click(function(){
		mover();
	})

	$(".banner .right").click(function(){
		movel();
	})

	function movel(){
		i++;
		if(i==size){
			$(".banner .imgs").css({left:0});
			i=1;
		}
		$(".banner .imgs").stop().animate({left:-i*700},500)
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
	}

	function mover(){
		i--;
		if(i==-1){
			$(".banner .imgs").css({left:-i*700},500);
			i=size-2;
		}
		$(".banner .imgs").stop().animate({left:-i*700},500)
		
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		
	}
})