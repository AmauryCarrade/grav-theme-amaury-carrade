styles:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -t compressed --sourcemap=none scss/nebulius.scss:css-compiled/nebulius.min.css

watch:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -t compressed --watch --sourcemap=auto scss/nebulius.scss:css-compiled/nebulius.min.css --cache-location .sass-cache
