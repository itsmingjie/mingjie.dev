const javascript = {
  files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  extends: [
    "standard",
    "next/core-web-vitals",
    "plugin:eslint-comments/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "eslint-comments/no-restricted-disable": "error",
    "eslint-comments/require-description": "error",
  },
};

const typescript = {
  files: ["*.ts", "*.tsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  extends: ["standard-with-typescript", "prettier"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
  },
};

const react = {
  files: ["*.jsx", "*.tsx"],
  extends: ["standard-jsx", "standard-react", "prettier"],
  rules: {
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
};

module.exports = {
  overrides: [javascript, typescript, react],
};
