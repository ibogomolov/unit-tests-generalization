describe("Button onclick method", function () {
	var other = /type hi/;
	var hi = /hello/;

	afterEach(function () {
		document.getElementById('in').value = "";
		document.getElementById('div').innerHTML = "";
	});

	it ("with \"abc\" input", function () {
		document.getElementById('in').value = "abc";
		cl();
		expect(other.test(document.getElementById('div').innerHTML)).toBe(true);
		expect(hi.test(document.getElementById('div').innerHTML)).toBe(false);
	});

	it ("with \"hi\" input", function () {
		document.getElementById('in').value = "hi";
		cl();
		expect(other.test(document.getElementById('div').innerHTML)).toBe(false);
		expect(hi.test(document.getElementById('div').innerHTML)).toBe(true);
	});
});