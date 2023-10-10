module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
        'plugin:import/typescript',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'react-hooks/exhaustive-deps': 'error',
        'max-len': ['error', { code: 200 }],
        'max-lines': ['error', { max: 300, skipBlankLines: true }],
        'react/jsx-no-useless-fragment': 'error',
        'no-use-before-define': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
