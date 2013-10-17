APP.component.Slider = Class.extend({
	init: function (settings) {
		this.settings = settings;
		this.setup();
		this.bind();
	},

	setup: function () {
		this.settings = jQuery.extend({
			selector: '.slider',
			btnNext: '.btn-next'
		}, this.settings);

		this.slider = jQuery(this.settings.selector);
		this.btnNext = this.slider.find(this.settings.btnNext);
	},

	bind: function () {
		var _this = this;

		this.btnNext.on('click', function (ev) {
			ev.preventDefault();
			_this.next();
		});
	},

	next: function () {
		alert('APP.component.Slider - next()');
	},

	prev: function () {
		alert('APP.component.Slider - prev()');
	}

});