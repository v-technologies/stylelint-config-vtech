/**
 *
 */
module.exports = {
	rules: {
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-no-invalid-hex': true,
		'comment-empty-line-before': 'always',
		'comment-whitespace-inside': 'always',
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-duplicate-properties': [
			true,
			{
				'ignore': ['consecutive-duplicates']
			}
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 0,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': true,
		'font-weight-notation': 'named-where-possible',
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		'indentation': 'tab',
		'length-zero-no-unit': true,
		'max-empty-lines': 3,
		'max-line-length': 80,
		'max-nesting-depth': 3,
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'no-eol-whitespace': true,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': true,
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'rule-empty-line-before': [
			'always',
			{
				'except': [
					'first-nested'
				],
				'ignore': [
					'after-comment'
				]
			}
		],
		'selector-class-pattern': '^[a-zA-Z0-9-]+$',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-id-pattern': '^[a-z0-9-]+$',
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'selector-pseudo-element-colon-notation': 'single',
		'string-no-newline': true,
		'string-quotes': 'single',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never'
	}
};
