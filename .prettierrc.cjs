// .prettierrc.cjs
module.exports = {
  semi: true,              // 使用分号
  singleQuote: true,       // 使用单引号
  printWidth: 100,         // 每行最大长度
  tabWidth: 2,             // 缩进空格数
  useTabs: false,          // 使用空格而不是 Tab
  trailingComma: 'es5',    // 尾随逗号
  bracketSpacing: true,    // 对象括号间距
  arrowParens: 'always',   // 箭头函数参数括号
  endOfLine: 'auto',         // 换行符
  
  // Vue 特定
  vueIndentScriptAndStyle: false,
  
  // HTML
  htmlWhitespaceSensitivity: 'ignore'
};