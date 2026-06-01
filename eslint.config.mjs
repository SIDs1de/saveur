import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^']],
        },
      ],
      'simple-import-sort/exports': 'error',

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
          rootDir: 'src',
          prefix: '@',
        },
      ],
    },
  },
]);

export default eslintConfig;
