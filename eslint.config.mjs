/** ESLint config for node.js v20 and Astro
 * npm install eslint eslint-plugin-astro @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-jsdoc eslint-plugin-wcag --save-dev
 */
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname
})

import jsdoc from 'eslint-plugin-jsdoc'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
// import wcag from 'eslint-plugin-wcag'
import astro from 'eslint-plugin-astro'

export default [
    js.configs.recommended,
    ...compat.extends('@typescript-eslint/recommended'),
    ...compat.extends('jsdoc/recommended'),
    ...compat.extends('astro/recommended'),
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.astro'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: typescriptParser
        },
        plugins: {
            '@typescript-eslint': typescript,
            jsdoc,
            // wcag,
            astro
        },
        extends: [
            // 'eslint:recommended',
            // 'plugin:@typescript-eslint/recommended',
            // 'plugin:jsdoc/recommended',
            // 'plugin:wcag/recommended',
            // 'plugin:astro/recommended'
        ],
        rules: {
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
            'prefer-const': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'prefer-arrow-callback': 'error',
            'no-var': 'error',
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-trailing-spaces': 'error',
            'object-shorthand': ['error', 'always'],
            'prefer-template': 'error',
            'template-curly-spacing': ['error', 'never'],
            'prefer-destructuring': ['error', {
                'array': true,
                'object': true
            }, {
                'enforceForRenamedProperties': false
            }],
            'no-duplicate-imports': 'error',
            'no-useless-rename': 'error',
            'no-useless-concat': 'error',
            'no-useless-return': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-object-spread': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-exponentiation-operator': 'error',
            'prefer-optional-chain': 'error',
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-indentation': 'error',
            'jsdoc/newline-after-description': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
        }
    }
]
