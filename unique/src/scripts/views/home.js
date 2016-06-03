var homeTpl = require('../tpl/home.string');
SPA.defineView('home',{
	html:homeTpl,
	bindActions:{
		'newsblu':function(){
			SPA.open('news');
		}
	},
	bindEvents:{
		'show':function(){
		var indexScroll=this.widgets.indexScroll;
		indexScroll.options.scrollX=true;
		indexScroll.options.scrollY=false;
		}
	}
});