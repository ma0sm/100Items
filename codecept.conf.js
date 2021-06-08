exports.config = {
	tests: "./*_test.js",
	output: "./output",
	helpers: {
		Puppeteer: {
			url: "https://immense-savannah-13991.herokuapp.com",
			show: false,
			windowSize: "1600x1200",
			timeouts: {
				script: 60000,
				"page load": 10000,
			},
			chrome: {
				args: [
					"--no-sandbox",
					"--disable-setuid-sandbox",
				],
			},
		},
	},
	include: {
		I: "./steps_file.js",
		amazingItems: "./pages/amazingItems.js",
	},
	bootstrap: null,
	mocha: {},
	name: "100Items-Automated-Testing",
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
			retries: 10,
		},
		tryTo: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
		allure: {
			enabled: true,
		},
	},
};
