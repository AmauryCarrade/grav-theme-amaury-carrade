styles:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -s compressed --no-source-map sass/amaury-carrade.scss:css-compiled/amaury-carrade.min.css

watch:
	cp css/katex.min.css css-compiled/katex.min.css
	sass -s compressed --watch --update --source-map sass/amaury-carrade.scss:css-compiled/amaury-carrade.min.css
