var testCase = new YUITest.TestCase({

    name: "Tests for page",
    other: /type hi/,
    hi: /hello/,
    
	// setUp : function () {
 //        document.getElementById('in').value = "";
 //        document.getElementById('div').innerHTML = "";
 //    },

 //    tearDown : function () {
 //        this.setUp();
 //    }, 

    testCorrectInput : function () {
        // document.getElementById('in').value = "hi";
        cl(); // function under test
        YUITest.Assert.isFalse(this.other.test(document.getElementById('div').innerHTML));
        YUITest.Assert.isTrue(this.hi.test(document.getElementById('div').innerHTML));
    }

    // testWrongInput : function () {
    //     // document.getElementById('in').value = "abc";
    //     cl();
    //     YUITest.Assert.isTrue(this.other.test(document.getElementById('div').innerHTML));
    //     YUITest.Assert.isFalse(this.hi.test(document.getElementById('div').innerHTML));
    // }

});
