var newsTpl = require('../tpl/news.string');
SPA.defineView('news',{
	html:newsTpl,
	plugins:['delegated'],
	bindActions:{
		'newshide':function(){
			this.hide();
		}
	}
});