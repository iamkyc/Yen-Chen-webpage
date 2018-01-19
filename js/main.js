var previousScrollTop = 0;
var menuState={
    isMenuOn:false,
    toggleMenu:function(){
        $('#navs').slideToggle();
        this.isMenuOn = this.isMenuOn?false:true;
    }
}

 $(document).ready(function(){
    $(window).scroll(function() {
        var nowScrollTop = $(window).scrollTop();
        detectScrollTopBtn(nowScrollTop);
        showingNavbar(nowScrollTop,previousScrollTop,menuState.isMenuOn)
        previousScrollTop = nowScrollTop;
    });
    
    //顯示回頂部按鈕時機
    function detectScrollTopBtn(scrollTop){
        if (scrollTop > 300 && $(window).width()>=750) {
            $('#scrollTop').stop(true,true).fadeIn('slow');
        } else {
            $('#scrollTop').stop(true, true).fadeOut();
        }
    }
});

    function showingNavbar(nowScrollTop=0,previousScrollTop,isMenuOn){
        var navbar=$('nav'), title=$('.title');
        var navbarHeight = navbar.height();
        var state;
        if(isMenuOn===false){
            if(nowScrollTop === 0){
                $('nav').attr('class','on-top');
                title.removeClass('add-top-margin');
                $("#frontPage").removeClass('add-top-margin');
            }
            else if(nowScrollTop>navbarHeight){
                navbar.attr('class','sticky');
                title.addClass('add-top-margin');
                $("#frontPage").addClass('add-top-margin');
            }
            //往上滑
            if(nowScrollTop < previousScrollTop){
                $('nav').removeClass('hide');
            }
            //往下滑
            else if(nowScrollTop > previousScrollTop && nowScrollTop>navbarHeight){
                $('nav').addClass('hide');
            }
        } else{
            navbar.attr('class','sticky');
            title.addClass('add-top-margin');
        }
    }

       

// 點擊按鈕返回網頁最上端
function scrollTopFunc(){
    $('html,body').animate({
        scrollTop:0
    },'fast');
}










        	

	
