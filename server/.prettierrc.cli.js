module.exports = {
  ...require('./.prettierrc.js'),
  plugins: ['prettier-plugin-organize-imports'],
  organizeImportsSkipDestructiveCodeActions: false,
};
