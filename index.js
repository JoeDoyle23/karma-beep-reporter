var BeepReporter = function(baseReporterDecorator) {
	baseReporterDecorator(this);
	
	var beep = new Buffer(1);
	beep.writeInt8(0x07, 0);
	
	this.onSpecComplete = function() { };

    this.onBrowserError = function(browser, error) {
		this.write(beep.toString());
	};  
  
    this.onBrowserComplete = function(browser) {
		var results = browser.lastResult;
		if (results.failed || results.error) {
			this.write(beep.toString());
		}
	};
};

BeepReporter.$inject = ['baseReporterDecorator', 'formatError'];

module.exports = {
	'reporter:beep': ['type', BeepReporter]
};
