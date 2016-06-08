
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
		views:['home','classify','collect','my'],
		defaultTag:'home'
	}],
	init: {
		indexSwiper: null,
		setActive: function (obj) {
			obj.addClass('active').siblings().removeClass('active');

		}
	},
	bindActions:{
		'newsblu':function(){
			SPA.open('news');
		},
		'switch.view':function(e){
			console.log(e);
			this.modules.content.launch(e.data.tag);
			this.setActive($(e.el));
		}
	}

});
