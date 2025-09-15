# Git 仓库设置指南

## 📋 当前状态

✅ **本地 Git 仓库已创建**
- 仓库路径：`/media/shuxinyang/NVME1/projects/konnect-ai-platform/konnect-shopify`
- 主分支：`main`
- 初始提交：`1ca4553`
- 版本标签：`v1.0.0-phase1`

## 🔗 连接到远程仓库

### 1. GitHub 仓库设置

如果您想在 GitHub 上创建远程仓库，请按以下步骤操作：

```bash
# 1. 在 GitHub 上创建新仓库
# 仓库名称：konnect-shopify
# 描述：Konnect Hub Studio - AI-Powered Digital Solutions Shopify Theme
# 设置为公开或私有（根据您的需求）

# 2. 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/konnect-shopify.git

# 3. 推送代码到远程仓库
git push -u origin main

# 4. 推送标签
git push origin v1.0.0-phase1
```

### 2. 其他 Git 托管平台

#### GitLab
```bash
git remote add origin https://gitlab.com/YOUR_USERNAME/konnect-shopify.git
git push -u origin main
git push origin v1.0.0-phase1
```

#### Bitbucket
```bash
git remote add origin https://bitbucket.org/YOUR_USERNAME/konnect-shopify.git
git push -u origin main
git push origin v1.0.0-phase1
```

## 📊 仓库统计

### 文件统计
- **总文件数**：357 个文件
- **代码行数**：133,563 行
- **主要目录**：
  - `assets/`：185 个文件（CSS、JS、SVG 图标）
  - `sections/`：54 个文件（页面区块）
  - `snippets/`：37 个文件（可重用组件）
  - `templates/`：20 个文件（页面模板）
  - `locales/`：40+ 个语言文件

### 提交历史
```
1ca4553 (HEAD -> main, tag: v1.0.0-phase1) 🎉 Initial commit: Konnect Hub Studio Shopify Theme
```

## 🏷️ 版本标签

当前版本：`v1.0.0-phase1`
- **阶段一完成**：项目分析和规划
- **包含功能**：品牌更新、视觉现代化、配置优化
- **验证状态**：所有配置验证通过

## 🔄 工作流程

### 日常开发流程
```bash
# 1. 创建功能分支
git checkout -b feature/new-feature

# 2. 进行开发工作
# ... 编辑文件 ...

# 3. 添加更改
git add .

# 4. 提交更改
git commit -m "✨ Add new feature: description"

# 5. 推送分支
git push origin feature/new-feature

# 6. 创建 Pull Request（在 GitHub/GitLab 上）
```

### 版本发布流程
```bash
# 1. 完成开发阶段
git checkout main
git merge feature/completed-feature

# 2. 创建版本标签
git tag -a v1.1.0-phase2 -m "🎯 Phase 2 Complete: Brand and Visual Assets"

# 3. 推送更新
git push origin main
git push origin v1.1.0-phase2
```

## 📁 重要文件说明

### 配置文件
- `.gitignore` - Git 忽略文件配置
- `README.md` - 项目主要说明文档
- `LICENSE` - MIT 许可证
- `KONNECT_MIGRATION_LOG.md` - 详细迁移日志

### 开发工具
- `scripts/validate-theme-config.js` - 配置验证脚本
- `GIT_SETUP.md` - Git 设置指南（本文件）

## 🛠️ 开发工具集成

### VS Code 推荐扩展
```json
{
  "recommendations": [
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### 有用的 Git 别名
```bash
# 添加到 ~/.gitconfig
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
```

## 🔍 仓库维护

### 定期任务
- [ ] 运行配置验证：`node scripts/validate-theme-config.js`
- [ ] 更新文档：保持 README 和迁移日志最新
- [ ] 清理分支：删除已合并的功能分支
- [ ] 备份：定期备份重要配置

### 安全检查
- [ ] 检查敏感信息：确保没有提交 API 密钥或密码
- [ ] 许可证合规：确保所有代码都有适当的许可证
- [ ] 依赖更新：定期更新依赖项

## 📞 支持

如果您在 Git 设置过程中遇到问题：

1. **查看日志**：`git log --oneline`
2. **检查状态**：`git status`
3. **验证配置**：`node scripts/validate-theme-config.js`
4. **查看文档**：`cat README.md`

---

**更新时间**：2025-09-14  
**Git 版本**：2.x  
**仓库状态**：本地仓库已创建，等待远程连接
