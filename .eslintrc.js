module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'max-len': ["error", { "code": 140 }],
    'mocha/no-mocha-arrows': 0,
    'no-param-reassign': 0,
  },
  env: {
    mocha: true
  },
};
