'use strict';

const packagePath = require( './package-path' );
// Use plugin's version of ESLint
const ESLintRuleTester = require( packagePath( 'node_modules/eslint' ) ).RuleTester;
const docMode = process.argv.includes( '--doc' );

/**
 * Extends ESLint's RuleTester to also build documentation
 */
class RuleTester extends ESLintRuleTester {
	run( name, rule, tests ) {
		if ( docMode ) {
			const writeDocsFromTests = require( './write-docs-from-tests' );
			writeDocsFromTests( name, rule, tests, this.testerConfig );
		} else {
			// Filter out invalid top level property "noDoc", used in documentation building mode
			tests.valid.forEach( ( test ) => {
				delete test.noDoc;
			} );
			tests.invalid.forEach( ( test ) => {
				delete test.noDoc;
			} );
			return super.run.call( this, name, rule, tests );
		}
	}
}

module.exports = RuleTester;
