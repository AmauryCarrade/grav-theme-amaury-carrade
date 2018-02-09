styles:
	sass --scss -t compressed --sourcemap=auto --unix-newlines scss/nebulius.scss > css-compiled/nebulius.min.css

watch:
	sass --scss -t compressed --watch scss/nebulius.scss:css-compiled/nebulius.min.css
