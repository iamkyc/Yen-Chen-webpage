var shopApp = angular
	.module("main",[])
	.controller("mainController",function($scope){

		var shops = [
			{name:"阿進切仔麵", class:"麵食", address:"高雄市鹽埕區瀨南街148號", img:"images/food_aChin.jpg", special:"切仔麵、黑白切、滷味、蘿蔔湯等傳統美味。"},
			{name:"樺達奶茶(總店)", class:"飲料", address:"高雄市鹽埕區新樂街99號", img:"images/food_whada.jpg", special:"使用純鮮奶搭配烏龍茶、紅茶、普洱茶，製作出不同風味的奶茶。每到假日，店門總是大排長龍。"},
			{name:"香港發財小館", class:"飯類", address:"803高雄市鹽埕區七賢三路108號", img:"images/food_fachai.jpg", special:"鹽埕知名燒臘店，入味的烤鴨配上油蔥，總是讓人口齒留香。"},
			{name:"阿羅哈滷味", class:"點心", address:"高雄市鹽埕區大仁路158號", img:"images/food_aloha.jpg", special:"味道較重的乾滷味，容易開胃，「口香糖」是他們的招牌滷味。"},
			{name:"吳家豆花", class:"點心", address:"高雄市鹽埕區富野路70號", img:"images/food_wuchia.jpg", special:"從原本的鹽埕瀨南街無名豆花推車，到現在已經開啟了店面。來到這間店，一定要嚐嚐金桔豆花。"},
			{name:"五十年杏仁茶", class:"點心", address:"高雄市鹽埕區瀨南街223號", img:"images/food_shinrentea.jpg", special:"鹽埕知名老店之一，宵夜的好去處。"},
			{name:"鴨肉珍", class:"飯類", address:"高雄市鹽埕區五福四路258號", img:"images/food_yarice.jpg", special:"鹽埕鴨肉飯名店，經過店門口時總是高朋滿座。"},
			{name:"冬粉王", class:"麵食", address:"高雄市鹽埕區七賢三路168號", img:"images/food_riceking.jpg", special:"鴨肉冬粉、豬心、豬肝、豬舌、豬肚，腰子料理等著取悅老饕的胃口。"},
			{name:"千葉素食", class:"飯類", address:"高雄市鹽埕區大義街131號", img:"images/food_chanya.jpg", special:"在地人熟知的速食店，老闆都算得很便宜。"}
		];

		$scope.shops = shops;

		$(window).scroll(function() {
		    if ($(this).scrollTop() > 300 ) {
		        $('#scrollTop').stop(true,true).fadeIn('slow');
		    } else {
		        $('#scrollTop').stop(true, true).fadeOut();
		    }
		});

		$scope.scrollTopFunc = function(){
			$('html,body').animate({
				scrollTop:0
			},'fast');
		}		

	});
