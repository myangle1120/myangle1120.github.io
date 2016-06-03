
//var IScroll = require('../lib/iscroll-probe.js');
var Swiper=require('../lib/swiper-3.3.1.min.js');
//document.body.innerHTML += indexTpl;
var indexTpl = require('../tpl/index.string');
SPA.defineView('index',{
	html:indexTpl,
	plugins:['delegated'],
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','classify','my'],
		defaultTag:'home'
	}],
	bindActions:{
		
		'switch.view':function(e){
			this.modules.content.launch(e.data.tag);
		}
	}
	
});
window.onload = function () {
//var myScroll = new IScroll('#index-scroll');

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:1500,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
});



};
