// An example configuration file.
exports.config = {
	directConnect : true,

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		'browserName' : 'chrome'
	},

//	baseUrl : 'file:///C:/Users/Nick/git/tasklist/index.html',

	onPrepare : function() {

		// By default, Protractor use data:text/html,<html></html> as resetUrl,
		// but
		// location.replace from the data: to the file: protocol is not allowed
		// (we'll get ‘not allowed local resource’ error), so we replace
		// resetUrl with one
		// with the file: protocol (this particular one will open system's root
		// folder)
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		browser.sleep(500);
		browser.resetUrl = 'file:///';
	},

	// Framework to use. Jasmine is recommended.
	framework : 'jasmine',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs : [ 'example_spec.js' ],

	// Options to be passed to Jasmine.
	jasmineNodeOpts : {
		defaultTimeoutInterval : 30000
	}
};
