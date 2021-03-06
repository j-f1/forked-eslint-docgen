# eslint-docgen release history

## v0.4.0

* Breaking change: New: Add fix message to introduction (#49)
* Breaking change: New: Format long lists correctly ("a, b, and c")
* Breaking change: New: Sort examples by options *then* valid/invalid (#48)
* New: Refactor rulesData to rulesWithConfig and expose (#16)
* New: Add ruleTemplatePath config (#14)
* New: Add showFixExamples config (#49)
* Code: Update eslint-config-wikimedia to 0.16.1 and use /mocha
* Code: Use pkg-dir
* Code: Create a JSON-schema to validate configs (#63)
* Code: Update various dependencies
* Tests: Separate config tests into get/validate
* Tests: Increase timeout
* Tests: Separate buildDocsFromTests cases
* Docs: Fix example docpath

## v0.3.1

* Fix: Use plugin's version of ESLint

## v0.3.0

* Breaking change: New: Support multi-line test cases (#34)
* New: Support multiple lines in formatter
* New: Add min/maxExamples to config (#29)
* New: Use chalk to do pretty output of warnings/errors (#38)
* Code: Bump node dependency to 10 (#44)
* Code: Use strict mode
* Code: Use eslint-plugin-node/recommended
* Code: Removed fixed length truncation from rules-data.js
* Tests: Add tests for most utils (#39)
* Tests: Increase code coverage to 100%
* Docs: Add "plugin" to description

## v0.2.0

* Breaking change: Refactor templates. Users with existing template overrides will need to rewrite them.
* Release: Update ejs to 3.1.3

## v0.1.0

* Initial release.
