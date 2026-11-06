// 作品集数据（双语）。当前为 4 个占位板块 → 点击展开占位详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.tsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'04'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
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
        id: 'placeholder-01',
        no: '01',
        title: '作品 01',
        tagline: '敬请期待',
        items: [
          { name: '项目 01 · 待补充', meta: '内容整理中', slug: 'placeholder-01' },
        ],
      },
      {
        id: 'placeholder-02',
        no: '02',
        title: '作品 02',
        tagline: '敬请期待',
        items: [
          { name: '项目 02 · 待补充', meta: '内容整理中', slug: 'placeholder-02' },
        ],
      },
      {
        id: 'placeholder-03',
        no: '03',
        title: '作品 03',
        tagline: '敬请期待',
        items: [
          { name: '项目 03 · 待补充', meta: '内容整理中', slug: 'placeholder-03' },
        ],
      },
      {
        id: 'placeholder-04',
        no: '04',
        title: '作品 04',
        tagline: '敬请期待',
        items: [
          { name: '项目 04 · 待补充', meta: '内容整理中', slug: 'placeholder-04' },
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
        id: 'placeholder-01',
        no: '01',
        title: 'Work 01',
        tagline: 'Coming soon',
        items: [
          { name: 'Project 01 · Coming soon', meta: 'In preparation', slug: 'placeholder-01' },
        ],
      },
      {
        id: 'placeholder-02',
        no: '02',
        title: 'Work 02',
        tagline: 'Coming soon',
        items: [
          { name: 'Project 02 · Coming soon', meta: 'In preparation', slug: 'placeholder-02' },
        ],
      },
      {
        id: 'placeholder-03',
        no: '03',
        title: 'Work 03',
        tagline: 'Coming soon',
        items: [
          { name: 'Project 03 · Coming soon', meta: 'In preparation', slug: 'placeholder-03' },
        ],
      },
      {
        id: 'placeholder-04',
        no: '04',
        title: 'Work 04',
        tagline: 'Coming soon',
        items: [
          { name: 'Project 04 · Coming soon', meta: 'In preparation', slug: 'placeholder-04' },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
