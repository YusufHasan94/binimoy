module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,json,css,html,jpg,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};