"use strict";

module.exports = {
    "extends": [
        "stylelint-config-standard-scss",
        "@stylistic/stylelint-config"
    ],
    "plugins": [
        "stylelint-order",
        "stylelint-scss",
        "stylelint-no-unsupported-browser-features"
    ],
    "rules": {
        "@stylistic/indentation": null,
        "@stylistic/max-line-length": 160,
        "at-rule-disallowed-list": ["extend"],
        "block-no-empty": true,
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
            "clear",
            "flex-direction",
            "flex-order",
            "flex-pack",
            "flex-align",
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
            "filter",
            "background",
            "background-color",
            "background-image",
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
        "declaration-block-single-line-max-declarations": 1,
        "declaration-property-value-disallowed-list": {
            "/^transition/": [
                "/all/"
            ],
            "/^background/": [
                "http:",
                "https:",
                "data:",
                "^(\/\/)"
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
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-name-case": "lower",
        "function-url-quotes": "always",
        "length-zero-no-unit": true,
        "max-nesting-depth": 3,
        "no-duplicate-selectors": true,
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
        "selector-max-compound-selectors": 3,
        "selector-max-id": 0,
        "selector-max-specificity": "0,4,0",
        "selector-max-type": [
            0,
            {
                "ignoreTypes": [
                    "/^(html|body)$/"
                ]
            }
        ],
        "selector-no-qualifying-type": true,
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "unit-disallowed-list": [
            [ "px" ],
            {
                "ignoreProperties": {
                    "px": [ "/^border(-(top|bottom|left|right))?(-width)?$/" ]
                }
            }
        ],
        "unit-no-unknown": true,
        "value-no-vendor-prefix": true,
    },
}
