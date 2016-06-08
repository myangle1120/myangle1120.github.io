var loginTpl = require('../tpl/login.string');
SPA.defineView('login',{
	html:loginTpl,
	plugins: ['delegated'],
	bindActions:{
		'hidelogin':function(){
			this.hide();
		}
	}
});
