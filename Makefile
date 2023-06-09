update:
	git pull
	npm ci
	npm link

fix-lint:
	npx eslint . --fix

lint:
	npx eslint .

publish:
	npm publish --dry-run
