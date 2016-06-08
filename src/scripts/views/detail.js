var detailTpl = require('../tpl/detail.string');
SPA.defineView('detail',{
	html:detailTpl,
	plugins: ['delegated', {
    name: 'avalon',
    options: function(vm) {
      vm.livelist = [];
    }
  }],
	bindEvents:{
		'show':function(){
			var vm = this.getVM();
			var searchScroll=this.widgets.searchScroll;
			searchScroll.on('scroll',function(){
				var y=Math.abs(this.y);
				if (y >= 513) {
					var $nav=$('.m-search nav');
					if ($('spa-view >nav.fix').length<=0) {
						$('#m-classify').after($nav.clone(true).addClass('fix'));
					}

					// $('#x').hide();
				}
				else{
					$('spa-view >nav.fix').remove();
					// $('#x').show();
				}
			});
			$.ajax({
				//url: '/api/getlivelist.php',
				url: '/unique/mock/livelist.json',
				success: function (res) {
					var data = res.data1;
					var tempArr = [];
					for (var i = 0; i < Math.ceil(data.length); i++) {
						tempArr[i] = data[i];
					}
					vm.livelist = tempArr;
				}
			});
		}
	},
	bindActions:{
		'newshide':function(){
			this.hide();
		},
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
