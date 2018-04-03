module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "jest": true,
    },
    "rules": {
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/click-events-have-key-events": null,
        "linebreak-style": 0,
        "no-alert": "off",
        "no-console": "off",
        "jsx-quotes": ["error", "prefer-single"],
        "react/forbid-prop-types": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/require-default-props": [0, { forbidDefaultForRequired: false }],
    }
};