module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Prettier와 ESLint 통합
  ],
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }], // Prettier 규칙 적용
    "react/react-in-jsx-scope": "off", // Next.js에서 React import 불필요
    "react/prop-types": "off", // PropTypes 비활성화 (TypeScript 사용)
    "@typescript-eslint/explicit-module-boundary-types": "off", // 명시적 반환 타입 비활성화
    "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }], // 사용되지 않는 변수 경고
    "@typescript-eslint/no-explicit-any": "off",
    "no-unsafe-optional-chaining": "off",
    "no-empty": "off",
    "react/no-unknown-property": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/media-has-caption": "off",
    "@typescript-eslint/ban-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
  },
};
