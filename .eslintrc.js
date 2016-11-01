module.exports = {
	"env": {
		"es6": true
	},
	"extends": ["eslint:recommended", "plugin:react/all"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"react-native"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-mixed-spaces-and-tabs": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-no-bind": 0,
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/forbid-component-props": 0,
		"react/forbid-prop-types": 0,
	    "react-native/no-unused-styles": 2,
	    "react-native/split-platform-components": 2,
	    "react-native/no-inline-styles": 2,
	    "react-native/no-color-literals": 2,
		"react/jsx-handler-names": 0,
		"react/no-set-state": 0,
		"react/no-string-refs": 0,
		"react/no-unused-prop-types": 0,
		"react/prefer-stateless-function": [1, { "ignorePureComponents": true }]
	}
};
