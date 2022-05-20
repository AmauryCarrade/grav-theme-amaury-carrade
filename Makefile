styles:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -s compressed --no-source-map scss/nebulius.scss:css-compiled/nebulius.min.css

watch:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -s compressed --watch --update --source-map scss/nebulius.scss:css-compiled/nebulius.min.css
