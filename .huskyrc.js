// Used for running git hooks
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
  },
};
