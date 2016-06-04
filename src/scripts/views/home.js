var homeTpl = require('../tpl/home.string');
SPA.defineView('home',{
	html:homeTpl,
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
				//url: '/api/getlivelist.php',
				url:'/unique/mock/livelist.json',
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
		var indexScroll=this.widgets.indexScroll;
		indexScroll.options.scrollX=true;
		indexScroll.options.scrollY=false;
	},
	'beforeShow': function () {
		var guideSwiper = new Swiper('#guide-swiper', {
			direction: 'horizontal',
			loop: true,
			autoplay:1500,
			autoplayDisableOnInteraction : false,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
	}
	}
});
