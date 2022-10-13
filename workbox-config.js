module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,json,css,html,jpg,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};