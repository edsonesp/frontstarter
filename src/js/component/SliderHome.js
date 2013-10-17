APP.component.SliderHome = APP.component.Slider.extend({
	init: function (settings) {
		this._super(settings);
	},

	bind: function () {
		var _this = this;

		this.btnNext.on('click', function (ev) {
			ev.preventDefault();
			_this.next();
		});
		
	},

	next: function () {
		alert('APP.component.SliderHome - next()');
	},

	prev: function () {
		alert('APP.component.SliderHome - prev()');
	}
	
})