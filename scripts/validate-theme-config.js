/**
 * Konnect Hub Studio 主题配置验证脚本
 * 验证主题是否正确从 Shopify Studio 迁移到 Konnect Hub Studio
 */

const fs = require('fs');
const path = require('path');

// 配置文件路径
const CONFIG_PATHS = {
  settings_data: './config/settings_data.json',
  settings_schema: './config/settings_schema.json',
  en_locale: './locales/en.default.json'
};

// 验证规则
const VALIDATION_RULES = {
  theme_name: 'Konnect Hub Studio',
  theme_author: 'Konnect AI Platform',
  theme_version: '1.0.0',
  current_preset: 'Konnect Hub Studio',
  brand_headline: 'AI-Powered Digital Solutions',
  expected_colors: {
    'scheme-1': {
      button: '#4f46e5',
      text: '#1a202c'
    },
    'scheme-3': {
      background: '#1a202c',
      text: '#ffffff'
    }
  }
};

/**
 * 验证主题配置
 */
function validateThemeConfig() {
  console.log('🔍 开始验证 Konnect Hub Studio 主题配置...\n');
  
  let allValid = true;
  const results = [];

  // 1. 验证设置数据
  try {
    const settingsData = JSON.parse(fs.readFileSync(CONFIG_PATHS.settings_data, 'utf8'));
    
    // 检查当前预设
    if (settingsData.current === VALIDATION_RULES.current_preset) {
      results.push('✅ 当前主题预设正确: ' + settingsData.current);
    } else {
      results.push('❌ 当前主题预设错误: ' + settingsData.current);
      allValid = false;
    }

    // 检查预设配置
    const preset = settingsData.presets[VALIDATION_RULES.current_preset];
    if (preset) {
      results.push('✅ Konnect Hub Studio 预设存在');
      
      // 检查品牌标语
      if (preset.brand_headline === VALIDATION_RULES.brand_headline) {
        results.push('✅ 品牌标语正确: ' + preset.brand_headline);
      } else {
        results.push('❌ 品牌标语错误: ' + preset.brand_headline);
        allValid = false;
      }

      // 检查颜色方案
      Object.entries(VALIDATION_RULES.expected_colors).forEach(([scheme, colors]) => {
        const schemeSettings = preset.color_schemes[scheme]?.settings;
        if (schemeSettings) {
          Object.entries(colors).forEach(([property, expectedValue]) => {
            if (schemeSettings[property] === expectedValue) {
              results.push(`✅ ${scheme} ${property} 颜色正确: ${expectedValue}`);
            } else {
              results.push(`❌ ${scheme} ${property} 颜色错误: ${schemeSettings[property]}`);
              allValid = false;
            }
          });
        }
      });

      // 检查字体设置
      if (preset.type_header_font === 'assistant_n4') {
        results.push('✅ 标题字体正确: assistant_n4');
      } else {
        results.push('❌ 标题字体错误: ' + preset.type_header_font);
        allValid = false;
      }

      // 检查布局设置
      if (preset.page_width === 1400) {
        results.push('✅ 页面宽度正确: 1400px');
      } else {
        results.push('❌ 页面宽度错误: ' + preset.page_width + 'px');
        allValid = false;
      }

    } else {
      results.push('❌ Konnect Hub Studio 预设不存在');
      allValid = false;
    }

  } catch (error) {
    results.push('❌ 设置数据文件读取失败: ' + error.message);
    allValid = false;
  }

  // 2. 验证设置架构
  try {
    const settingsSchema = JSON.parse(fs.readFileSync(CONFIG_PATHS.settings_schema, 'utf8'));
    const themeInfo = settingsSchema.find(section => section.name === 'theme_info');
    
    if (themeInfo) {
      if (themeInfo.theme_name === VALIDATION_RULES.theme_name) {
        results.push('✅ 主题名称正确: ' + themeInfo.theme_name);
      } else {
        results.push('❌ 主题名称错误: ' + themeInfo.theme_name);
        allValid = false;
      }

      if (themeInfo.theme_author === VALIDATION_RULES.theme_author) {
        results.push('✅ 主题作者正确: ' + themeInfo.theme_author);
      } else {
        results.push('❌ 主题作者错误: ' + themeInfo.theme_author);
        allValid = false;
      }

      if (themeInfo.theme_version === VALIDATION_RULES.theme_version) {
        results.push('✅ 主题版本正确: ' + themeInfo.theme_version);
      } else {
        results.push('❌ 主题版本错误: ' + themeInfo.theme_version);
        allValid = false;
      }
    } else {
      results.push('❌ 主题信息部分未找到');
      allValid = false;
    }

  } catch (error) {
    results.push('❌ 设置架构文件读取失败: ' + error.message);
    allValid = false;
  }

  // 3. 验证语言文件
  try {
    const enLocale = JSON.parse(fs.readFileSync(CONFIG_PATHS.en_locale, 'utf8'));
    const poweredByText = enLocale.general?.password_page?.powered_by_shopify_html;
    
    if (poweredByText && poweredByText.includes('Konnect Hub Studio')) {
      results.push('✅ 英文语言文件品牌信息已更新');
    } else {
      results.push('❌ 英文语言文件品牌信息未更新');
      allValid = false;
    }

  } catch (error) {
    results.push('❌ 英文语言文件读取失败: ' + error.message);
    allValid = false;
  }

  // 输出结果
  console.log('验证结果:');
  console.log('='.repeat(50));
  results.forEach(result => console.log(result));
  
  console.log('\n' + '='.repeat(50));
  if (allValid) {
    console.log('🎉 所有验证通过！Konnect Hub Studio 主题配置正确。');
    console.log('✅ 阶段一：项目分析和规划 - 完成');
  } else {
    console.log('⚠️  发现配置问题，请检查上述错误项。');
  }
  
  return allValid;
}

/**
 * 生成配置摘要
 */
function generateConfigSummary() {
  console.log('\n📊 配置摘要:');
  console.log('='.repeat(50));
  
  try {
    const settingsData = JSON.parse(fs.readFileSync(CONFIG_PATHS.settings_data, 'utf8'));
    const preset = settingsData.presets['Konnect Hub Studio'];
    
    if (preset) {
      console.log(`主题名称: Konnect Hub Studio`);
      console.log(`Logo 宽度: ${preset.logo_width}px`);
      console.log(`页面宽度: ${preset.page_width}px`);
      console.log(`标题字体: ${preset.type_header_font}`);
      console.log(`正文字体: ${preset.type_body_font}`);
      console.log(`动画效果: ${preset.animations_hover_elements}`);
      console.log(`购物车类型: ${preset.cart_type}`);
      console.log(`品牌标语: ${preset.brand_headline}`);
      
      console.log('\n🎨 颜色方案:');
      Object.entries(preset.color_schemes).forEach(([scheme, config]) => {
        console.log(`  ${scheme}: 背景 ${config.settings.background}, 按钮 ${config.settings.button}`);
      });
    }
  } catch (error) {
    console.log('❌ 无法生成配置摘要: ' + error.message);
  }
}

// 执行验证
if (require.main === module) {
  const isValid = validateThemeConfig();
  generateConfigSummary();
  
  process.exit(isValid ? 0 : 1);
}

module.exports = {
  validateThemeConfig,
  generateConfigSummary
};
