module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 11,
      "sourceType": "module",
      project: './tsconfig.json',
    },
    plugins: [
      "react",
      "react-hooks",
      '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'no-var': "error",
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
    }
  };
