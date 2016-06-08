var collectTpl = require('../tpl/collect.string');
SPA.defineView('collect',{
	html:collectTpl,
	plugins: ['delegated', {
		name: 'avalon',
		options: function(vm) {
			vm.livelist = [];
		}
	}],
	bindEvents:{
			'show':function(){
				var vm = this.getVM();
				$.ajax({
					// url: '/api/getlivelist.php',
					 url: '/unique/mock/livelist.json',
					success: function (res) {
						var data = res.data;
						var tempArr = [];
						for (var i = 0; i < Math.ceil(data.length/2); i++) {
							tempArr[i] = [];
							tempArr[i][0] = data[2*i];
							tempArr[i][1] = data[2*i+1];
						}
						vm.livelist = tempArr;
						// console.log(tempArr);
					}
				});

		}
	}
});
