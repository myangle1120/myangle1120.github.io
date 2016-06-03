var tplGuide=require("../tpl/guide.string");
SPA.defineView('guide',{
	html:tplGuide,
	plugins:['delegated'],
	bindActions:{
		'goindex':function(){
			SPA.open('index');
			var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:1500,
		    autoplayDisableOnInteraction : false,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		});
		}
	}
})
