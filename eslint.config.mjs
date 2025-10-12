import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            '.idea/**',
            '.vscode/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
        ],
        plugins: ['unused-imports'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'react/no-children-prop': 'off',
            'unused-imports/no-unused-imports': 'on',
        },
    },
];

export default eslintConfig;
