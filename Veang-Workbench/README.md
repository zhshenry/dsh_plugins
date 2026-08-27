# Veang Workbench

把 DeepSeek Harness 改造成桌面式项目工作台：左侧官方会话 / 工作区列表，中间文件编辑 / 预览，右侧保留 AI 对话，工作台与对话双向绑定。

> 当前版本 **0.2.3**，面向 **DeepSeek Harness 0.1.1-rc.2**。DSH 仍处于开发预览阶段，升级 DSH 前请先查看兼容性说明。

## 特性

- **官方座位接入**：工作台渲染进官方 `shell.overlay` 座位，通过「右挤对话」与官方会话共存，不替换、不禁用任何官方插件
- **工作台 ↔ 对话双向绑定**：素材 / 代码 / 八字 zone 可各绑一条会话，切工作台自动切对话、切对话自动切工作台；游戏关系视图按工作区解析，不依赖会话绑定
- **游戏关系视图**：三列图谱（脚本/配置 ｜ 场景/预制·材质 ｜ 素材）解析代码 ↔ 素材引用；Unity 项目识别 `.meta` GUID、`Resources.Load`、`Addressables` 强关联，文件名匹配兜底（实线=强关联、虚线=启发式）；支持分类着色与过滤、搜索、选中查看引用详情、零引用素材标记
- **文件工作区**：文本 / 代码编辑，Markdown / PDF / 图片 / 音视频 / DOCX / XLSX 预览；单击复用预览标签，双击固定
- **素材工作区**：文件树图标模式下图片 / 视频显示缩略图；中间空状态按 zone 区分（素材 🎨 / 代码 ⌘）
- **像素编辑器**：内置 Aseprite 像素编辑器（移植自 dsh-aseprite，MIT License），支持 `.ase` / `.aseprite` 打开与编辑
- **文件操作**：新建、重命名、复制、移动、删除、上传、拖拽移动
- **AI 上下文**：打开的文件可设为当前对话参考上下文；从 AI 对话打开的工作区文件固定到新标签页
- **集成终端**：中部预览区下方可展开，在当前项目目录运行命令并保留 `cd` 后的路径
- **皮肤中心**：壁纸上传 / 历史、透明度 / 模糊调节，浅色主题适配
- **会话状态光点**：busy（工作中）/ need（待处理）/ done（完成）/ idle（未绑定）四态
- **SplitSpec 协议**：声明式多栏工作台骨架，为后续领域工作台（建筑审图等）预留

> 平台说明：终端在 Windows 与类 Unix 系统上均可用；「在 Finder 中显示」依赖 macOS 的 `open -R`，其他平台调用会失败。

## 安装

### 从 npm 安装（推荐）

已发布到 npm，只需安装一个入口包：

```bash
dsh plugin --profile web add veang-workbench
```

安装后启动：

```bash
dsh --profile web
```

### 从源码本地安装

构建并安装本地 `.tgz`（`pack:release` 依赖 `pnpm install` 装好的依赖，按顺序执行）：

```bash
pnpm install
pnpm test
pnpm run pack:release
dsh plugin --profile web add "$PWD"/dist/veang-workbench-*.tgz
dsh --profile web
```

### 开发模式（link 安装，改动即时生效）

把 profile 直接指向 `packages/bundle`，客户端改动刷新页面即可生效，无需重新打包：

```bash
# 类 Unix
dsh plugin --profile web add "link:$(pwd)/packages/bundle"

# Windows（PowerShell）
dsh plugin --profile web add "link:C:\path\to\veang-workbench\packages\bundle"
```

> 客户端（`packages/ui/lib/client.js`）改动刷新页面即可；服务端（`packages/ui/lib/index.js`）或 `cordis.patch.yml` 改动需重启 `dsh web`。

安装命令会把 Cordis 配置层写入 `web` profile。若已有同类自定义布局，请先备份配置。

## 卸载与回滚

```bash
dsh plugin --profile web remove veang-workbench
dsh --profile web --dump-config   # 确认不再包含 name: veang-workbench
```

只想临时停用：直接编辑 profile 的 `cordis.patch.yml`，删掉 `name: veang-workbench` 那一段。安装前备份 `~/.dsh/profiles/web/` 可最快回到原状。

## 故障排查

| 现象 | 原因与处理 |
| --- | --- |
| `dsh: pnpm not found on PATH` | DSH 通过 pnpm 管理 profile 插件，`corepack enable pnpm` 启用即可 |
| `ERR_PNPM_ADDING_TO_ROOT` | pnpm 10 对 workspace 根目录保护；改为在 profile 的 `package.json` 直接写版本后 `pnpm install` |
| `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY` | 当前 pnpm 与建 `node_modules` 的版本不一致；用原版本安装（本项目为 `pnpm@11.19.0`） |
| 工作台不出现 / 页面空白 | `dsh --profile web --dump-config` 确认 `name: veang-workbench` 已存在；确认未与其它自定义布局叠加 |
| 预览 DOCX/XLSX 报错 | 单个文件超过 25 MB 上限，或文件本身损坏 |

## 使用 Codex Skill 安装（可选）

仓库提供公开版 `veang-workbench-install` Skill，从 npm 安装并验证 DSH 0.1.1-rc.2 与 Veang Workbench 0.2.3，不包含会话、设置、项目、凭据、桌面端外壳或私人迁移数据。

在 Codex 中调用 `$skill-installer`，发送：

```text
请从 https://github.com/zhshenry/veang-workbench/tree/main/skills/veang-workbench-install 安装 Skill
```

也可以手动安装到个人 Skill 目录：

```bash
git clone https://github.com/zhshenry/veang-workbench.git
mkdir -p "$HOME/.agents/skills"
cp -R veang-workbench/skills/veang-workbench-install "$HOME/.agents/skills/veang-workbench-install"
```

安装后可在 Codex 中发送：

```text
$veang-workbench-install 安装并启动 DSH 和 Veang Workbench
```

Codex 通常会自动发现新安装的 Skill；若没有出现，请重启 Codex。

## 项目结构

- `packages/bundle`：唯一发布入口、Cordis 配置层与打包后的内嵌组件（npm 包 `veang-workbench`）
- `packages/ui`：工作台界面源码（客户端 `client.js` + 服务端 `index.js`）
- `packages/layout`：早期布局源码，0.2.x 已不再使用（保留待清理）
- `scripts/build-bundle.mjs`：发布前把界面源码组装进入口包
- `skills/veang-workbench-install`：从公开 npm 包安装、验证和启动 DSH 工作台的 Codex Skill

`veang-workbench` 采用单入口内嵌结构：客户端通过 `veang-workbench/client`、服务端通过 `veang-workbench/ui` 子路径导出，避免 pnpm 隔离依赖导致 DSH 无法加载组件。

## 开发与验证

```bash
pnpm install
pnpm test
pnpm run pack:release   # 触发 build-bundle.mjs + 打包
```

客户端改动可用 link 模式快速预览（见上文「开发模式」）。

项目不包含登录凭据、模型密钥、用户会话或项目文件。工作台只访问用户在 DSH 中主动选择的工作区目录。

## 来源与许可证

本项目从 [DSH Cockpit](https://github.com/ethan0084/dsh-cockpit)（MIT License）分叉，感谢原作者的贡献。

本项目采用 [MIT License](./LICENSE)。你可以自由使用、修改、分发和商用，也可以用于闭源项目，但必须保留原始版权与许可声明。

布局组件包含对 DeepSeek Harness MIT 代码的修改，归属和原始许可见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

## 贡献

欢迎提交 Issue 和 Pull Request。提交贡献即表示你有权提交这些代码，并同意以 MIT License 发布。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

维护者发布新版本时请按 [RELEASING.md](./RELEASING.md) 打包、发布并完成全新 profile 验证。
