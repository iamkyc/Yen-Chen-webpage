if($(window).height()>=750){
	$("#frontPage-titleBlock").hover(function(){
		$("#frontPage-content").addClass("black-mask");
		$(".frontPage-subtitle").addClass("show-text");
		$(".frontPage-text").addClass("show-text");
	},function(){
		$("#frontPage-content").removeClass("black-mask");
		$(".frontPage-subtitle").removeClass("show-text");
		$(".frontPage-text").removeClass("show-text");
	})
} else if($(window).height()>=700){
	$("#frontPage-titleBlock").hover(function(){
		$("#frontPage-content").addClass("black-mask");
		$(".frontPage-subtitle").addClass("show-text");
	},function(){
		$("#frontPage-content").removeClass("black-mask");
		$(".frontPage-subtitle").removeClass("show-text");
	})
}

console.log($(window).height());