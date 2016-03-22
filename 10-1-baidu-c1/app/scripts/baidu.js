$(document).ready(function(){
	//Tab切换
	$("#tab .title ul li").each(function(index){
		$(this).click(function(){
			$("#tab .content").removeClass("show");
			$("#tab .title ul li").removeClass("hover");
			$("#tab .content").eq(index).addClass("show");
			$("#tab .title ul li").eq(index).addClass("hover");
		});
	});

	//右侧显示隐藏
	$("#more .zi").mouseover(function(){
		$("#more .link").addClass("block");
	});
	$("#more .link").mouseover(function(){
		$("#more .link").addClass("block");
	});
	$("#more .zi").mouseout(function(){
		$("#more .link").removeClass("block");
	});
	$("#more .link").mouseout(function(){
		$("#more .link").removeClass("block");
	});

	//下拉显示
	$(window).scroll(function () {
		var content = "";
		var scrollTop = document.body.scrollTop;
		if(scrollTop >= 100){    
			content += "<li>";
			content += "<dl>";
			content += "<dt><a href='#'>标题标题标题标题标题</a></dt>";
			content += "<dd>腾讯体育 12-05 17:08</dd>";
			content += "</dl>";
			content += "<div class='img'>";
			content += "<a href='#'><img src='images/news.jpg' /></a>";
			content += "</div>";
			content += "</li>";
			$("#list").append(content);
		}
	});

	//设置显示
	$("#tab .set").click(function(){
		$("#tab .setcontent").toggle();
	})

	//顶部下拉
	$("#down1 .over").hover(function(){
		$("#down1 .down1_content").slideDown();
	},function(){
		$("#down1 .down1_content").hide();
    });

	$("#down1 .down1_content").hover(function(){
		$("#down1 .down1_content").show();
	},function(){
		$("#down1 .down1_content").slideUp();
    });

	$("#down2 .over").hover(function(){
		$("#down2 .down2_content").slideDown();
	},function(){
		$("#down2 .down2_content").hide();
    });

	$("#down2 .down2_content").hover(function(){
		$("#down2 .down2_content").show();
	},function(){
		$("#down2 .down2_content").slideUp();
    });

	//回到顶部
	$("#top").click(function(){
        var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
	});

});

