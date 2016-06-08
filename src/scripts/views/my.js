var myTpl = require('../tpl/my.string');
SPA.defineView('my',{
	html:myTpl,
	plugins: ['delegated'],
	bindActions:{
		'gologin':function(){
			SPA.open('login',{
				ani:{
					name:'actionSheet',
					"distance": 0,
					"showMask": false,
					 "duration": 400,
				}
			});
		}
	}
});
