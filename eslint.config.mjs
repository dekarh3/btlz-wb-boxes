import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-require-imports": "warn",
        },
    },
    {
        ignores: ["data", "dist", "docker", "gitlab", ".gitlab-ci.yml", "node_modules", "var", "docs/scheme/e2e-analytic_files"],
    },
    eslintPluginPrettierRecommended,
];
