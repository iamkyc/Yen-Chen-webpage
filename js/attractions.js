$("#show-content").html($("#Pier2").html());

$('#attractions').click(function(e){
	var ID = e.target.getAttribute("value");
	var IDcontent = $("#"+ID).html() 
	$("#show-content").html(IDcontent);
})