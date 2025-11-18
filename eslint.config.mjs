import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint, { parser } from "typescript-eslint";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/*.js", "**/*.d.ts", "**/dist/**", "**/node_modules/**"]
  },

  {
    languageOptions: {
      globals: globals.es2024,
      parser: parser
    }
  },

  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
