# dsh_plugins

DeepSeek Harness（DSH）插件合集仓库。当前包含一个正式插件，后续可按需扩展更多插件。

## 插件

### Veang Workbench（`Veang-Workbench/`）

把 DSH 改造成桌面式项目工作台：官方座位接入、工作台 ↔ 对话双向绑定、文件编辑 / 预览、素材工作区、皮肤中心等。

- 详细说明：[Veang-Workbench/README.md](./Veang-Workbench/README.md)
- 兼容 DeepSeek Harness：`0.1.1-rc.2`
- 安装：`dsh plugin --profile web add veang-workbench`
- npm 包：`veang-workbench`（当前 `0.2.3`）

## 目录结构

```
dsh_plugins/
├── Veang-Workbench/       # 工作台插件（pnpm monorepo）
│   ├── packages/bundle/   # 唯一发布入口 + Cordis 配置层
│   ├── packages/ui/       # 工作台界面源码（客户端 + 服务端）
│   ├── packages/layout/   # 早期布局源码（0.2.x 起不再使用）
│   ├── scripts/           # 打包脚本
│   ├── skills/            # 安装 / 验证 Skill
│   └── tests/             # 包格式契约测试
├── .gitignore
└── README.md
```

> `.pnpm-store/`、`.npm-cache/`、`.dsh-vision-toolkit/` 为本地缓存，不入库。

## 开发

```bash
cd Veang-Workbench
pnpm install
pnpm test
pnpm run pack:release
```

开发期可用 link 模式快速预览，详见 [Veang-Workbench/README.md](./Veang-Workbench/README.md#开发模式link-安装改动即时生效)。

## 许可证

各插件目录内自带许可证说明。Veang Workbench 采用 MIT License，分叉自 [DSH Cockpit](https://github.com/ethan0084/dsh-cockpit)。
