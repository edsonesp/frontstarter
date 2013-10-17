var APP = {
		component: {},
		core: {},
		i: {}
	},
	jQuery = $.noConflict();

jQuery(document).ready(function () {
	new APP.core.Main();
});