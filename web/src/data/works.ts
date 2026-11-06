// 作品集数据（双语）。3 个作品板块 → 点击展开图文详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.tsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'03'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             slug 关联 content/works/<slug>.md 的图文详情；缺省时显示占位。
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '作品内容正在整理中，项目介绍、技术细节与演示将于后续补充。',
    phImageLabel: '图片 / 视频待补充',
    phButtonLabel: '作品链接待补充',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'ai-companion',
        no: '01',
        title: 'AI智能伴侣',
        tagline: '自定义角色与流式对话，让聊天保留上下文。',
        items: [
          {
            name: 'AI智能伴侣 · 对话应用',
            meta: '2026.10',
            tags: ['Python', 'Streamlit', 'DeepSeek'],
            slug: 'ai-companion',
          },
        ],
      },
      {
        id: 'campus-delivery',
        no: '02',
        title: '校园外卖送',
        tagline: '从菜品维护到订单流转，集中管理校园餐饮。',
        items: [
          {
            name: '校园外卖送 · 管理端',
            meta: '2025.10',
            tags: ['Spring Boot', 'Vue.js'],
            slug: 'campus-delivery',
          },
        ],
      },
      {
        id: 'product-reviews',
        no: '03',
        title: '商品点评',
        tagline: '连接附近商户与探店分享，探索 Redis 与高并发实践。',
        items: [
          {
            name: '商品点评 · H5 应用',
            meta: '2026.01',
            tags: ['Spring Boot', 'Redis'],
            slug: 'product-reviews',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Work in progress. Project introductions, technical details, and demos will be added here.',
    phImageLabel: 'Image / Video coming soon',
    phButtonLabel: 'Project link coming soon',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'ai-companion',
        no: '01',
        title: 'AI Companion',
        tagline: 'Custom characters and streaming conversations with context.',
        items: [
          {
            name: 'AI Companion · Chat App',
            meta: '2026.10',
            tags: ['Python', 'Streamlit', 'DeepSeek'],
            slug: 'ai-companion-en',
          },
        ],
      },
      {
        id: 'campus-delivery',
        no: '02',
        title: 'Campus Food Delivery',
        tagline: 'Manage campus dining, from menus to orders.',
        items: [
          {
            name: 'Campus Food Delivery · Admin',
            meta: '2025.10',
            tags: ['Spring Boot', 'Vue.js'],
            slug: 'campus-delivery-en',
          },
        ],
      },
      {
        id: 'product-reviews',
        no: '03',
        title: 'Product Reviews',
        tagline: 'Local discovery and social sharing, powered by Redis.',
        items: [
          {
            name: 'Product Reviews · H5 App',
            meta: '2026.01',
            tags: ['Spring Boot', 'Redis'],
            slug: 'product-reviews-en',
          },
        ],
      },
    ],
  },
}

// 板块配图按 id 映射；未配置的板块显示编号占位。
export const SECTION_COVERS: Record<string, string> = {
  'ai-companion': `${import.meta.env.BASE_URL}works/ai-companion/cover.png`,
  'campus-delivery': `${import.meta.env.BASE_URL}works/campus-delivery/cover.png`,
  'product-reviews': `${import.meta.env.BASE_URL}works/product-reviews/cover.png`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
