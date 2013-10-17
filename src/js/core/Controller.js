APP.core.Controller = Class.extend({
	init: function () {
		this.setup();
		this.start();
	},

	setup: function () {
		this.controller = this.getController();
	},

	start: function () {
		switch (this.controller) {
			case 'home':
				// instancia as classes...
				break;
			default:
				return false;
		}
	},

	getController: function () {
		var controller = jQuery('meta[name=controller]').attr('content');
		return controller;
	}

});