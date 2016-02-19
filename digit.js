function Digit(n) {
	this.segments = [];
	for (var j = 0; j < n; ++j)
		this.segments.push(false);
}

Digit.prototype.isBlank = function isBlank() {
	for (var j = 0; j < this.segments.length; ++j)
		if (this.segments[j])
			return false;
	return true;
};

Digit.prototype.segmentCount = function segmentCount() {
	var c = 0;
	for (var j = 0; j < this.segments.length; ++j)
		if (this.segments[j])
			++c;
	return c;
};

Digit.prototype.loneSegment = function loneSegment() {
	if (this.segmentCount() != 1)
		return null;
	for (var j = 0; j < this.segments.length; ++j)
		if (this.segments[j])
			return j;
};

Digit.eight = function eight(n) {
	var d = new Digit(n);
	for (var i = 0; i < n; ++i)
		d.segments[i] = true;
	return d;
};