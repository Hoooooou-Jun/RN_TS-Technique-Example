module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        project: './tsconfig.json',
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'react-hooks',
        "@typescript-eslint"
    ],
    "rules": {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    }
};
