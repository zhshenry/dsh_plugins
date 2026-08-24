# Releasing

从 `0.1.0` 起发布 `veang-workbench` 入口包。界面源码会在打包时内嵌为入口包的公开子路径，不单独发布内部组件包。

## 发布前

```bash
pnpm install --frozen-lockfile --ignore-scripts
pnpm test
pnpm run pack:release
```

确认 `CHANGELOG.md`、兼容的 DeepSeek Harness 版本和 `packages/bundle/package.json` 的版本已经更新。检查生成的 tarball 中包含 `embedded/ui` 与 `assets`。不要把个人项目、会话、凭据或本地绝对路径加入发布包。

## npm 发布

```bash
npm publish ./dist/veang-workbench-X.Y.Z.tgz --access public
```

发布需要 npm 账户的写入验证；使用已配置的通行密钥或其他双重验证方式完成确认。发布后检查 `latest` 是否指向新版本。新包确认可用后，再将更名前的 npm 包标记为已迁移；不要在新包发布成功前弃用旧包。

## 发布后验证

在新的 DSH profile 中运行：

```bash
dsh plugin --profile web add veang-workbench
dsh --profile web --dump-config
dsh --profile web
```

确认 `--dump-config` 输出中包含 `name: veang-workbench`（0.2.x 单入口 additive 形式，不再停用官方 `ui-layout` / `ui-workspace`），然后启动网页完成一次视觉检查并确认浏览器控制台无报错。
