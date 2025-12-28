// commitlint.config.cjs (ES Module 项目)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式（不影响代码运行）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
      ],
    ],
    // subject 大小写不做校验（支持中文）
    'subject-case': [0],
    'body-max-line-length': [1, 'always', 300],
  },
};
