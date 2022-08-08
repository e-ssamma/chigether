module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "naver"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
	},
};
