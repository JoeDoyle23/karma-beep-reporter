var BeepReporter = function(baseReporterDecorator) {
	baseReporterDecorator(this);

	var beep = new Buffer(1);
	beep.writeInt8(0x07, 0);

	this.onSpecComplete = function() { };

    this.onRunComplete = function(browsers, results) {
		if (results.failed || results.error) {
			this.write(beep.toString());
		}
	};
};

BeepReporter.$inject = ['baseReporterDecorator'];

module.exports = {
	'reporter:beep': ['type', BeepReporter]
};
