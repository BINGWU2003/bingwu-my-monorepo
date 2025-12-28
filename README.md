# Bingwu Monorepo 项目模板

一个用于组件库和工具库开发的 Monorepo 项目模板，基于 pnpm workspace + Turbo 构建。

## 📦 项目结构

```
bingwu-my-monorepo/
├── packages/                    # 公共包目录
│   ├── shared/                  # 共享工具库
│   ├── ui/                      # 通用 UI 组件库
│   └── vue3-best-ui/           # Vue3 组件库
├── apps/                        # 应用目录
│   ├── web/                     # Web 演示应用
│   └── docs/                    # 文档站点
├── .changeset/                  # 版本管理配置
├── .husky/                      # Git hooks
├── turbo.json                   # Turbo 构建配置
├── pnpm-workspace.yaml         # pnpm workspace 配置
└── package.json                # 根配置文件
```

## ✨ 特性

- 🚀 **Turbo** - 快速的增量构建系统
- 📦 **pnpm workspace** - 高效的包管理
- 🔧 **TypeScript** - 类型安全
- 🎨 **ESLint + Prettier** - 代码规范
- 🐕 **Husky + lint-staged** - Git 提交规范
- 📝 **Changesets** - 版本管理和发布
- 🔀 **Commitlint** - 提交信息规范

## 🚀 快速开始

### 环境要求

- Node.js >= 20.0.0
- pnpm >= 10.0.0

### 安装依赖

```bash
# 安装 pnpm (如果还没有)
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 开发命令

```bash
# 启动所有包的开发模式
pnpm dev

# 只启动 packages 下的包
pnpm dev:packages

# 启动 web 应用
pnpm dev:web

# 启动 web 应用并监听 packages 变化
pnpm dev:web:watch

# 启动文档站点
pnpm dev:docs

# 构建所有包
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 代码检查并修复
pnpm lint:fix

# 格式化代码
pnpm format

# 检查代码格式
pnpm format:check

# 清理构建产物
pnpm clean
```

### 版本管理

```bash
# 创建变更集
pnpm changeset

# 更新版本
pnpm changeset:version

# 发布包
pnpm changeset:publish
```

## 🔨 基于此模板二次开发

### 1. 修改项目名称和命名空间

#### 1.1 修改根 package.json

文件：[package.json](package.json)

```json
{
  "name": "your-project-name", // 修改为你的项目名
  "description": "your description" // 修改项目描述
}
```

#### 1.2 修改所有包的命名空间

批量替换所有 `@bingwu-my-monorepo/` 为 `@your-scope/`

需要修改的文件：

- [packages/shared/package.json](packages/shared/package.json)
- [packages/ui/package.json](packages/ui/package.json)
- [packages/vue3-best-ui/package.json](packages/vue3-best-ui/package.json)
- [apps/web/package.json](apps/web/package.json)
- [apps/docs/package.json](apps/docs/package.json)
- [turbo.json](turbo.json)

示例：

```json
{
  "name": "@your-scope/shared"
}
```

### 2. 修改 Git 和作者信息

#### 2.1 修改 package.json 作者信息

文件：[package.json](package.json)

```json
{
  "author": "Your Name <your.email@example.com>",
  "license": "MIT" // 根据需要修改许可证
}
```

#### 2.2 初始化 Git 仓库

```bash
# 删除现有 Git 历史（如果需要）
rm -rf .git

# 初始化新仓库
git init
git add .
git commit -m "feat: init project"
```

### 3. 配置发布设置

#### 3.1 修改 npm 发布配置

如果需要发布到私有 npm 仓库，修改 [.npmrc](.npmrc)：

```ini
# 私有仓库示例
registry=https://your-private-registry.com/
//your-private-registry.com/:_authToken=${NPM_TOKEN}
```

#### 3.2 修改包的发布配置

在各个包的 package.json 中修改 `publishConfig`：

```json
{
  "publishConfig": {
    "access": "public", // 或 "restricted"
    "registry": "https://your-private-registry.com/"
  }
}
```

### 4. 自定义包内容

#### 4.1 修改 shared 包

目录：[packages/shared](packages/shared)

- 添加你的工具函数
- 修改导出内容

#### 4.2 修改 ui 包

目录：[packages/ui](packages/ui)

- 添加你的 UI 组件
- 根据需要调整样式

#### 4.3 修改 vue3-best-ui 包

目录：[packages/vue3-best-ui](packages/vue3-best-ui)

- 添加 Vue3 组件
- 自定义组件库功能

### 5. 调整构建配置

#### 5.1 修改 Turbo 配置

文件：[turbo.json](turbo.json)

根据项目需要调整任务依赖和缓存策略。

#### 5.2 修改 TypeScript 配置

文件：[tsconfig.json](tsconfig.json)

根据需要调整编译选项和路径映射。

### 6. 自定义代码规范

#### 6.1 ESLint 配置

文件：[.eslintrc.cjs](.eslintrc.cjs)

根据团队规范调整规则。

#### 6.2 Prettier 配置

文件：[.prettierrc.cjs](.prettierrc.cjs)

自定义代码格式化规则。

#### 6.3 Commitlint 配置

文件：[commitlint.config.cjs](commitlint.config.cjs)

调整提交信息规范。

### 7. 添加新包

```bash
# 在 packages 目录下创建新包
cd packages
mkdir your-new-package
cd your-new-package

# 初始化 package.json
pnpm init
```

package.json 模板：

```json
{
  "name": "@your-scope/your-new-package",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  },
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup",
    "clean": "rimraf dist"
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.3.3"
  }
}
```

## 📖 包说明

### @bingwu-my-monorepo/shared

通用工具库，包含项目中共享的工具函数和类型定义。

### @bingwu-my-monorepo/ui

通用 UI 组件库，包含框架无关的 UI 组件。

### @bingwu-my-monorepo/vue3-best-ui

Vue3 组件库，包含 Vue3 专用的组件。

### @bingwu-my-monorepo/web

Web 演示应用，用于展示和测试组件。

## 🔗 参考资源

- [Turbo 文档](https://turbo.build/repo/docs)
- [pnpm workspace 文档](https://pnpm.io/workspaces)
- [Changesets 文档](https://github.com/changesets/changesets)

## 📄 许可证

ISC
