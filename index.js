"use strict";

module.exports = {
    "plugins": [
        "stylelint-order",
        "stylelint-scss",
        "stylelint-no-unsupported-browser-features"
    ],
    "rules": {
        "at-rule-blacklist": ["extend"],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": "always",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,
        "comment-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "stylelint-commands"
                ]
            }
        ],
        "comment-whitespace-inside": "always",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignore": [
                    "consecutive-duplicates"
                ]
            }
        ],
        "declaration-block-no-shorthand-property-overrides": true,
        "order/properties-order": [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "display",
            "float",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "box-sizing",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "overflow",
            "overflow-x",
            "overflow-y",
            "clip",
            "clear",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-weight",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "font-effect",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "font-smooth",
            "hyphens",
            "line-height",
            "color",
            "text-align",
            "text-align-last",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-decoration",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "letter-spacing",
            "word-break",
            "word-spacing",
            "word-wrap",
            "tab-size",
            "white-space",
            "vertical-align",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "pointer-events",
            "fill",
            "fill-opacity",
            "stroke",
            "stroke-opacity",
            "stroke-width",
            "shape-rendering",
            "cursor",
            "visibility",
            "zoom",
            "flex-direction",
            "flex-order",
            "flex-pack",
            "flex-align",
            "table-layout",
            "empty-cells",
            "caption-side",
            "border-spacing",
            "border-collapse",
            "content",
            "quotes",
            "counter-reset",
            "counter-increment",
            "resize",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "background",
            "background-color",
            "background-image",
            "filter",
            "background-repeat",
            "background-attachment",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-clip",
            "background-origin",
            "background-size",
            "border",
            "border-color",
            "border-style",
            "border-width",
            "border-top",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "box-shadow",
            "opacity",
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property",
            "transform",
            "transform-origin",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-fill-mode",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction"
        ],
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-property-value-blacklist": {
            "/^transition/": [
                "/all/"
            ],
            "/^background/": [
                "http:",
                "https:"
            ],
            "/^border/": [
                "none"
            ],
            "/.+/": [
                "initial"
            ]
        },
        "font-family-name-quotes": "always-where-recommended",
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-quotes": "always",
        "function-whitespace-after": "always",
        "indentation": 4,
        "length-zero-no-unit": true,
        "max-empty-lines": 1,
        "max-nesting-depth": 3,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "no-duplicate-selectors": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-missing-end-of-source-newline": true,
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "plugin/no-unsupported-browser-features": [true, {
            "severity": "warning",
            "browsers": [
                "> 5%",
                "last 2 firefox versions",
                "last 2 chrome versions",
                "last 2 safari versions",
                "last 2 edge versions",
                "ie 11"
            ]
        }],
        "property-case": "lower",
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [
            "always-multi-line",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "scss/selector-no-redundant-nesting-selector": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-compound-selectors": 3,
        "selector-max-empty-lines": 0,
        "selector-max-id": 0,
        "selector-max-specificity": "0,4,0",
        "selector-max-type": 0,
        "selector-no-qualifying-type": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "double",
        "unit-case": "lower",
        "unit-no-unknown": true,
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-no-vendor-prefix": true,
    },
}