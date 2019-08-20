module.exports = {
  "rules": {
    // "declaration-block-no-duplicate-properties": true,
    // Require a newline or disallow whitespace after the commas of selector lists.

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
    // "at-rule-no-vendor-prefix": true,
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
    "max-empty-lines": 3,

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
    // "media-feature-name-no-vendor-prefix": true,
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
    // "property-no-vendor-prefix": true,

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
    // "selector-list-comma-newline-after": "always",     // not for generated file from sass.
    // Limit the number of compound selectors in a selector.
    "selector-max-compound-selectors": 3,
    // Limit the number of ID selectors in a selector.
    // "selector-max-id": 0,
    // Disallow qualifying a selector by type.
    "selector-no-qualifying-type": true,
    // Disallow vendor prefixes for selectors.
    // "selector-no-vendor-prefix": true,
    // Specify single or double colon notation for applicable pseudo-elements (Autofixable).
    "selector-pseudo-element-colon-notation": "double",
    // Disallow unknown pseudo-element selectors.
    "selector-pseudo-element-no-unknown": true,
    // Disallow redundant values in shorthand properties (Autofixable).
    "shorthand-property-no-redundant-values": true,
    // Specify single or double quotes around strings (Autofixable).
    // "string-quotes": "single",
    // Disallow vendor prefixes for values.
    // "value-no-vendor-prefix": true,



  }
}
