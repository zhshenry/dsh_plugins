# Changelog

## 0.2.3 - 2026-08-24

**架构重构：迁移到官方座位（additive，不再替换布局）**

- 工作台迁入官方 `shell.overlay` 座位，通过「右挤对话」与官方会话并存；不再 `disable` 官方 `ui-layout` / `ui-workspace`
- 左下角「工作台」分区 Tab 迁入 `sidebar.footer.action` 座位
- 新增品牌座位（`sidebar.brand.name` / `sidebar.brand.mark` / `conversation.hero.brand.mark`）与会话上下文 dock（`conversation.input.dock`）
- 首页 / 新对话不再显示工作台（仅 `data-phase` 为 `active` / `settling` 时渲染）
- 修复主题 token：`--dsw-alias-state-accent-primary`（不存在）→ `--dsw-alias-state-business-primary`
- 浅色主题适配：分区行米白 `#f8f4ec` + 边框 + 阴影卡片感

**工作台 ↔ 对话双向绑定**

- 每个工作区的「素材 / 代码」zone 可绑定一条会话（`dsh.workspace.zoneBindings.v1`）
- 切 zone → 自动切对话；切对话 → 自动切 zone（反向仅在会话真正切换时触发一次）
- 顶栏「绑定对话」胶囊 + 会话选择下拉（🎨 / `</>` 标识、✓、取消绑定）
- 一条会话同时只属于一个 zone，改绑自动解绑另一侧

**SplitSpec 声明式多栏协议骨架**

- 新增子座位 `sidebar.veang.project` + `openSplit(spec)` 回调，为后续领域工作台（建筑审图等）预留
- `VeangSplit`：按 `panes` 声明渲染 iframe 栏，复用右挤 / 拖宽 / 持久化（`dsh.veang.split.v1`）

**素材工作区**

- 文件树「图标模式」下图片 / 视频显示缩略图
- 中间空状态按 zone 切换（素材工作区 🎨 / 代码工作区 ⌘）

**其他**

- 皮肤中心：壁纸上传 / 历史 / 透明度 / 模糊，内置背景 `background.png`
- 会话状态光点四态（busy / need / done / idle）
- 按工作区持久化视图状态（zone + 树模式）
- 打包：单入口 `veang-workbench`（patch name 修正为包名）、bundle 0.2.3、inject `slots/sessions/workspaces`、测试对齐 0.2.x 契约
- 移除一次性探针插件 `veang-spike`

## 0.1.1 - 2026-08-20

- 对齐 DeepSeek Harness `0.1.0-rc.8`：`veang-workbench-layout` 的 peer 依赖与安装脚本从 `0.1.0-rc.7` 升级到 `0.1.0-rc.8`

## 0.1.0 - 2026-08-19

Veang Workbench 首次发布，从 [DSH Cockpit](https://github.com/ethan0084/dsh-cockpit) 0.2.4（MIT License）分叉。

- 多项目侧栏与可折叠文件树
- 文本/代码编辑，Markdown/PDF/图片/音视频/DOCX/XLSX 预览
- 文件新建、重命名、复制、移动、删除和上传
- 打开的文件可作为 AI 对话上下文
- AI 对话固定在右侧，可拖动宽度或折叠
- 项目内历史会话与快速新建对话
- 中部预览区下方可展开项目终端
- 通过 Cordis 配置层替换布局，不修改 DSH 安装目录
- 继承上游全部安全修复（工作区边界校验、同源校验、SVG 降级、上传上限等）
