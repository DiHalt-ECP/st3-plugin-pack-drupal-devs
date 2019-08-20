module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  // "extends": "stylelint-config-sass-guidelines",

  "rules": {
    // CSS Rules.
    "at-rule-blacklist": "debug",
    "at-rule-empty-line-before": [
      "always", {
        "ignoreAtRules": [ "else" ],
        "ignore": ["after-comment", "first-nested", "blockless-after-same-name-blockless"]
      }
    ],
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": null,
    // Disallow vendor prefixes for at-rules.
    "at-rule-no-vendor-prefix": true,
    // Disallow empty blocks.
    "block-no-empty": true,
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": [ "if", "else" ]
      }
    ],
    // Require a single space or disallow whitespace before the opening brace of blocks.
    "block-opening-brace-space-before": "always",

    // Specify lowercase or uppercase for hex colors.
    "color-hex-case": "lower",
    // Specify short or long notation for hex colors.
    "color-hex-length": "short",
    // Require (where possible) or disallow named colors.
    "color-named": "never",
    // Disallow invalid hex colors.
    "color-no-invalid-hex": true,

    // Require a single space or disallow whitespace after the bang of declarations (Autofixable).
    "declaration-bang-space-after": "never",
    // Require a single space or disallow whitespace before the bang of declarations (Autofixable).
    "declaration-bang-space-before": "always",
    // Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
    "declaration-block-semicolon-newline-after": "always",
    // Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
    "declaration-block-semicolon-space-before": "never",
    // Limit the number of declarations within a single-line declaration block.
    "declaration-block-single-line-max-declarations": 1,
    // Require or disallow a trailing semicolon within declaration blocks (Autofixable).
    "declaration-block-trailing-semicolon": "always",
    // Require a single space or disallow whitespace after the colon of declarations (Autofixable).
    // "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-after": "always",
    // Require a single space or disallow whitespace before the colon of declarations (Autofixable).
    "declaration-colon-space-before": "never",
    // Specify a blacklist of disallowed property and value pairs within declarations.
    "declaration-property-value-blacklist": {
      "border": ["none"],
      "border-top": ["none"],
      "border-right": ["none"],
      "border-bottom": ["none"],
      "border-left": ["none"]
    },

    // Require a single space or disallow whitespace after the commas of functions (Autofixable).
    "function-comma-space-after": "always-single-line",
    // Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
    "function-parentheses-space-inside": "never",
    // Require or disallow quotes for urls.
    "function-url-quotes": "always",
    // Specify indentation (Autofixable).
    "indentation": 2,
    // Disallow units for zero lengths (Autofixable).
    "length-zero-no-unit": true,

    // Limit the number of adjacent empty lines.
    "max-empty-lines": 7,

    // Limit the depth of nesting.
    "max-nesting-depth": [
      2,      // 1
      {
        "ignoreAtRules": [
          "each",
          "media",
          "supports",
          "include"
        ]
      }
    ],

    // Require a single space or disallow whitespace after the colon in media features (Autofixable).
    "media-feature-colon-space-after": "always",
    // Require a single space or disallow whitespace before the colon in media features (Autofixable).
    "media-feature-colon-space-before": "never",
    // Disallow vendor prefixes for media feature names.
    "media-feature-name-no-vendor-prefix": true,
    // Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
    "media-feature-parentheses-space-inside": "never",
    // Disallow missing end-of-source newlines (Autofixable).
    "no-missing-end-of-source-newline": true,
    // Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
    "number-leading-zero": "always",
    // Disallow trailing zeros in numbers (Autofixable).
    "number-no-trailing-zeros": true,


    // Disallow unknown properties.
    "property-no-unknown": true,
    // Disallow vendor prefixes for properties.
    "property-no-vendor-prefix": true,

    // Require or disallow an empty line before rules (Autofixable).
    "rule-empty-line-before":  [
      "always-multi-line", {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],


    // Specify a pattern for class selectors.
    "selector-class-pattern": [
      // "^[a-z0-9\\-]+$",
      "^[a-z0-9\\-_]+$",     // for BEM styles.
      {
        "message":
          "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    // Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
    "selector-list-comma-newline-after": "always",
    // Limit the number of compound selectors in a selector.
    "selector-max-compound-selectors": 3,
    // Limit the number of ID selectors in a selector.
    "selector-max-id": 0,
    // Disallow qualifying a selector by type.
    "selector-no-qualifying-type": true,
    // Disallow vendor prefixes for selectors.
    "selector-no-vendor-prefix": true,
    // Specify single or double colon notation for applicable pseudo-elements (Autofixable).
    "selector-pseudo-element-colon-notation": "double",
    // Disallow unknown pseudo-element selectors.
    "selector-pseudo-element-no-unknown": true,
    // Disallow redundant values in shorthand properties (Autofixable).
    "shorthand-property-no-redundant-values": true,
    // Specify single or double quotes around strings (Autofixable).
    "string-quotes": "single",
    // Disallow vendor prefixes for values.
    "value-no-vendor-prefix": true,

    // stylelint-order.
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        "rules"
      ]
    ],
    "order/properties-alphabetical-order": true,


    // SCSS Rules.

    // This is a rule that checks for situations where users have done a loop
    // using map-keys and grabbed the value for that key inside of the loop.
    "scss/at-each-key-value-single-line": true,
    // Require or disallow a newline after the closing brace of @else statements (Autofixable).
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    // Require a single space or disallow whitespace after
    // the closing brace of @else statements (Autofixable).
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    // Require an empty line or disallow empty lines before @-else (Autofixable).
    "scss/at-else-empty-line-before": "never",
    //  Require or disallow a space before @else if parentheses (Autofixable).
    "scss/at-else-if-parentheses-space-before": "always",
    // Disallow at-extends (@extend) with missing % placeholders.
    "scss/at-extend-no-missing-placeholder": true,

    // Require or disallow a space before @function parentheses (Autofixable).
    "scss/at-function-parentheses-space-before": "never",

    // Specify a pattern for Sass/SCSS-like function names.
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    // Require or disallow a newline after the closing brace of @if statements (Autofixable).
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    // Require a single space or disallow whitespace after
    // the closing brace of @if statements (Autofixable).
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    // Disallow leading underscore in partial names in @import.
    "scss/at-import-no-partial-leading-underscore": true,
    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    "scss/at-import-partial-extension-blacklist": ["scss", "sass"],
    // Require or disallow a space before @mixin parentheses (Autofixable).
    "scss/at-mixin-parentheses-space-before": "never",

    // Specify a pattern for Sass/SCSS-like mixin names.
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
    "scss/at-rule-no-unknown": true,
    // Require or disallow whitespace after the colon in $-variable declarations (Autofixable).
    "scss/dollar-variable-colon-space-after": "at-least-one-space",
    // Require a single space or disallow whitespace before the colon in $-variable declarations (Autofixable).
    "scss/dollar-variable-colon-space-before": "never",
    // Require a single empty line or disallow empty lines before $-variable declarations (Autofixable).
    "scss/dollar-variable-empty-line-before": [
      "always", {
        "except": [ "first-nested", "after-comment", "after-dollar-variable" ],
        "ignore": [ "inside-single-line-block" ]
      }
    ],

    // Specify a pattern for Sass-like variables. $abc / $abc-def0123 / #_abc-def123
    "scss/dollar-variable-pattern": [
      "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$", {
        "severity": "warning",
      }
    ],
    // Disallow Sass variables that are used without interpolation
    // with CSS features that use custom identifiers.
    "scss/dollar-variable-no-missing-interpolation": true,
    // Require or disallow an empty line before //-comments (Autofixable).
    "scss/double-slash-comment-empty-line-before": [
      "always", {
        "except": [ "first-nested" ],
        "ignore": [ "between-comments" ],
      }
    ],
    // Require or disallow whitespace after the // in //-comments.
    "scss/double-slash-comment-whitespace-inside": "always",
    // Disallow nested properties of the same "namespace" be divided into multiple groups.
    "scss/declaration-nested-properties-no-divided-groups": true,
    // Disallow quoted strings inside the quote function (Autofixable).
    "scss/function-quote-no-quoted-strings-inside": true,
    // Disallow unquoted strings inside the unquote function (Autofixable).
    "scss/function-unquote-no-unquoted-strings-inside": true,
    // Disallow linebreaks after Sass operators.
    "scss/operator-no-newline-after": true,
    // Disallow unspaced operators in Sass operations.
    "scss/operator-no-unspaced": true,
    // Disallow non-CSS @imports in partial files.
    // "scss/partial-no-import": true,

    // Specify a pattern for %-placeholders.
    // "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$",   // for BEM styles.
    // Disallow redundant nesting selectors (&).
    "scss/selector-no-redundant-nesting-selector": true,
  }
}

// Ignore specified at-rules.
// "ignoreAtRules": ["array", "of", "at-rules"]
// "ignore": ["after-comment", "first-nested", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless"]
// "except": ["after-same-name", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"]
