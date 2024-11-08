import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  {
    files: ['*.ts', '*.tsx'], // TypeScript 파일에 대한 설정
    languageOptions: {
      parser: '@typescript-eslint/parser' // 타입스크립트 파서
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier']
  }
]);
