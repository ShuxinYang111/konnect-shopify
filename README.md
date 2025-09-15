# Konnect Hub Studio - Shopify Theme

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/konnect-ai-platform/konnect-shopify)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Shopify](https://img.shields.io/badge/shopify-theme-purple.svg)](https://shopify.com)

> 🚀 **AI-Powered Digital Solutions** - 专业的 AI 数字人和视频制作服务平台主题

## 📋 项目概述

Konnect Hub Studio 是一个基于 Shopify Studio 主题改造的现代化电商主题，专门为 AI 数字人、视频制作和图像设计服务而设计。我们保留了所有原有的电商功能，同时注入了科技感和现代化的视觉设计。

## ✨ 主要特色

### 🎨 现代化设计
- **科技感配色方案**：5套专业配色，包含渐变背景
- **现代字体系统**：Assistant 字体，提升科技感
- **优化布局**：页面宽度扩展至 1400px
- **增强交互**：垂直提升动画效果

### 🛒 完整电商功能
- ✅ 购物车和结账流程
- ✅ 用户账户管理
- ✅ 产品展示和筛选
- ✅ 多语言支持（40+ 种语言）
- ✅ SEO 优化
- ✅ 响应式设计

### 🤖 AI 服务导向
- 🎭 数字人制作服务
- 🎬 视频内容创作
- 🎨 AI 图像设计
- 📊 客户案例展示
- 💼 企业级解决方案

## 🚀 快速开始

### 环境要求
- Shopify 商店账户
- Shopify CLI（可选）
- Node.js 16+（用于开发工具）

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/konnect-ai-platform/konnect-shopify.git
   cd konnect-shopify
   ```

2. **验证配置**
   ```bash
   node scripts/validate-theme-config.js
   ```

3. **上传到 Shopify**
   - 使用 Shopify CLI：
     ```bash
     shopify theme push
     ```
   - 或通过 Shopify Admin 手动上传

## 📁 项目结构

```
konnect-shopify/
├── assets/                 # 静态资源（CSS、JS、图片）
├── config/                 # 主题配置
│   ├── settings_data.json  # 主题设置数据
│   └── settings_schema.json # 主题架构定义
├── layout/                 # 布局模板
├── locales/                # 多语言文件
├── sections/               # 页面区块
├── snippets/               # 可重用代码片段
├── templates/              # 页面模板
├── scripts/                # 开发脚本
│   └── validate-theme-config.js
├── .gitignore             # Git 忽略文件
├── README.md              # 项目说明
├── README_KONNECT_MIGRATION.md # 迁移文档
└── KONNECT_MIGRATION_LOG.md    # 详细迁移日志
```

## 🎨 设计系统

### 颜色方案
- **Scheme-1 (主要)**：白色背景 + 紫色科技渐变
- **Scheme-2 (浅色)**：浅灰背景 + 蓝紫按钮
- **Scheme-3 (深色)**：深色渐变背景 + 白色文字
- **Scheme-4 (品牌)**：紫色渐变背景
- **Scheme-5 (科技)**：深蓝渐变 + 青色按钮

### 字体系统
- **标题字体**：Assistant (现代、清晰)
- **正文字体**：Assistant (保持一致性)
- **缩放比例**：标题 125%，正文 115%

### 布局参数
- **页面宽度**：1400px
- **区块间距**：20px
- **网格间距**：32px
- **圆角设计**：8-12px

## 🛠️ 开发指南

### 本地开发
```bash
# 安装依赖（如果有）
npm install

# 启动开发服务器
shopify theme dev

# 验证配置
node scripts/validate-theme-config.js
```

### 自定义配置
1. 编辑 `config/settings_data.json` 修改主题设置
2. 编辑 `config/settings_schema.json` 添加新的设置选项
3. 运行验证脚本确保配置正确

### 添加新功能
1. 在 `sections/` 中创建新的区块
2. 在 `snippets/` 中添加可重用组件
3. 更新 `templates/` 中的页面模板
4. 添加相应的样式到 `assets/`

## 📊 迁移状态

### ✅ 已完成（阶段一）
- [x] 品牌信息更新
- [x] 视觉设计现代化
- [x] 功能配置优化
- [x] 验证脚本和文档

### 🔄 进行中
- [ ] 阶段二：品牌和视觉改造
- [ ] 阶段三：内容结构改造
- [ ] 阶段四：页面内容定制

### 📋 计划中
- [ ] 阶段五：功能增强
- [ ] 阶段六：多语言和本地化
- [ ] 阶段七：SEO 和营销优化
- [ ] 阶段八：测试和优化

## 🔍 验证和测试

### 配置验证
```bash
node scripts/validate-theme-config.js
```

### 功能测试
- [x] 主题配置正确性
- [x] 颜色方案应用
- [x] 字体系统加载
- [x] 布局参数设置
- [ ] 页面功能完整性
- [ ] 响应式设计
- [ ] 多语言切换

## 📚 文档

- [迁移日志](KONNECT_MIGRATION_LOG.md) - 详细的迁移过程记录
- [迁移说明](README_KONNECT_MIGRATION.md) - 迁移项目说明
- [Shopify 主题开发文档](https://shopify.dev/themes)

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 支持

- **项目文档**：[迁移日志](KONNECT_MIGRATION_LOG.md)
- **问题反馈**：[GitHub Issues](https://github.com/konnect-ai-platform/konnect-shopify/issues)
- **技术支持**：Konnect AI Platform Team

## 🙏 致谢

- 基于 [Shopify Studio Theme](https://shopify.com) 改造
- 感谢 Shopify 提供的优秀主题基础
- 感谢所有贡献者的支持

---

**Konnect Hub Studio** - 让 AI 技术触手可及 🚀

*更新时间：2025-09-14 | 版本：1.0.0*
