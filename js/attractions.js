$("#show-content").html($("#Pier2").html());


if($(window).width()>=600){
	$('#attractions').click(function(e){
		var ID = e.target.getAttribute("value");
		var IDcontent = $("#"+ID).html(); 
		$("#show-content").html(IDcontent);
	})
} else{
	$('#attractions-mobile').change(function(){
		var ID = $(this).val();
		var IDcontent = $("#"+ID).html(); 
		$("#show-content").html(IDcontent);
	})
}

