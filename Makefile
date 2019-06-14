styles:
	sass -s compressed --no-source-map scss/nebulius.scss css-compiled/nebulius.min.css

watch:
	sass -s compressed --watch --source-map scss/nebulius.scss css-compiled/nebulius.min.css
