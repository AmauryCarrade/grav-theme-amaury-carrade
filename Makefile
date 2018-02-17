styles:
	sass -t compressed --sourcemap=auto --unix-newlines scss/nebulius.scss > css-compiled/nebulius.min.css

watch:
	sass -t compressed --watch scss/nebulius.scss:css-compiled/nebulius.min.css
