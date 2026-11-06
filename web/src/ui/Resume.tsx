import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

interface SocialLink {
  id: keyof typeof SOCIAL_ICONS
  label: string
  href: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub · yang1248',
    href: 'https://github.com/yang1248',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: SocialLink[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2024.09 – 2027.06',
        place: 'Shenzhen Polytechnic University',
        role: 'Mobile Internet Application Technology · Class of 2027',
        points: [
          'Full-stack developer focused on admin systems and mobile apps.',
          'Seven months of development experience across two internships, with strengths in performance optimization and component libraries.',
        ],
      },
      {
        period: '2026.03 – 2026.07',
        place: 'Shenzhen Caixin Testing Technology Co., Ltd.',
        role: 'AI Full-stack Development Intern',
        points: [
          'Independently built a Vue 3 + Node.js desktop admin system and H5 mobile app for chip-testing operations, with RBAC covering three roles and 20+ permissions.',
          'Implemented an eight-state order lifecycle, inventory discrepancy tracking, bilingual report generation and downloads, photo uploads, shipment tracking, and WeChat Pay.',
          'Supported 3,000+ orders and 100+ users; reduced average order processing time from 40 to 15 minutes and manual follow-up work by about 70%.',
          'Moved three-party collaboration online, enabled end-to-end order tracking, and shortened delivery time by about 30% with AI-assisted requirements analysis and development.',
        ],
      },
      {
        period: '2026.07 – 2026.09',
        place: 'Shenzhen Jiangyun Intelligent Co., Ltd.',
        role: 'Full-stack Development Intern',
        points: [
          'Independently developed and iterated six core client pages for AIGC photo-printing devices, adapting to five device models and resolutions with no related customer complaints after launch.',
          'Internationalized eight admin modules with 300+ translation entries; built device management and style-library modules supporting status monitoring and batch operations for 100 devices, and fixed 20+ production bugs.',
          'Built a shared logging SDK, increased instrumentation coverage from 60% to 95%, and reduced average device-issue diagnosis time from two hours to 30 minutes.',
          'Led the bilingual website redesign: reduced initial load time from 3.2s to 1.5s, raised Lighthouse performance from 68 to 92, and increased average monthly visits by 40%.',
        ],
      },
      {
        period: 'Project Experience',
        place: 'Shopping Mall App',
        role: 'Independent Full-stack Development',
        points: [
          'Built a hybrid app with Flutter (GetX / Dio / WebView), Vue 3 + Vite, and Spring Cloud microservices (Nacos / Gateway / Spring Boot), integrated with Elasticsearch, RabbitMQ, and MySQL.',
          'Implemented the Flutter home feed, categories, cart, login, and profile, plus seven Vue 3 pages covering search, products, checkout, balance payment, and orders.',
          'Designed a JSBridge protocol that proxies H5 HTTP requests through Flutter, avoiding local file cross-origin restrictions; bundled single-file H5 builds as local app assets.',
          'Standardized Dio networking, token handling, global 401 redirects, wrapped and raw JSON responses, and monetary amounts in cents.',
          'Designed eventual payment consistency using asynchronous MQ order updates, frontend polling, timeout handling, and exception reconciliation.',
        ],
      },
      {
        period: 'Skills & Certifications',
        place: 'Full-stack Development · AI-assisted Engineering',
        groups: [
          {
            heading: 'Technical Stack',
            items: [
              'Proficient: JavaScript / TypeScript, Vue 3, Spring Boot, MySQL, Flutter / Dart, Pinia, Vite, SCSS.',
              'Familiar: Java, Node.js, Redis, Express, Next.js, Docker, Nginx, ECharts, Webpack, mini-program development, and unit testing.',
              'Basic knowledge: WebGL, Three.js, and low-code platform design.',
            ],
          },
          {
            heading: 'AI-assisted Engineering',
            items: [
              'Use Codex and Claude for requirements analysis, code and unit-test generation, code review, and documentation; experienced in PRD decomposition, API documentation, prompt engineering, and context management.',
            ],
          },
          {
            heading: 'Certifications',
            items: ['CET-4 · Huawei HCIA-AI · AI Agent Technology and Applications Micro-certification'],
          },
          {
            heading: 'GitHub · yang1248',
            link: SOCIAL_LINKS[0].href,
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2024.09 – 2027.06',
        place: '深圳职业技术大学',
        role: '移动互联应用技术 · 2027 届应届毕业生',
        points: [
          '全栈开发工程师，专注后台系统与移动端 App 方向。',
          '两段实习累计 7 个月开发经验，擅长性能优化与组件库建设。',
        ],
      },
      {
        period: '2026.03 – 2026.07',
        place: '深圳采芯检测科技有限公司',
        role: 'AI 全栈开发工程师 · 实习',
        points: [
          '基于 Vue 3 + Node.js 独立搭建芯片检测业务 PC 后台与 H5 移动端，设计覆盖客户、物流、检测三类角色及 20+ 权限点的 RBAC 权限体系。',
          '实现订单 8 个状态节点的全生命周期流转、入库差异记录、中英文检测报告生成与下载，并对接照片上传、物流查询和微信支付。',
          '稳定支撑 3000+ 订单、100+ 三方用户使用；订单平均处理时长由 40 分钟缩短至 15 分钟，人工跟单工作量减少约 70%。',
          '将三方协同从微信群迁移至线上平台，实现订单全流程追踪；借助 AI 辅助需求梳理与开发，交付周期缩短约 30%，双语能力支撑香港及国际业务拓展。',
        ],
      },
      {
        period: '2026.07 – 2026.09',
        place: '深圳匠韵智能有限公司',
        role: '全栈开发工程师 · 实习',
        points: [
          '独立开发与迭代 AIGC 拍照打印设备的答题、分享、协议等 6 个核心客户端页面，适配 5 种设备机型与分辨率，上线后相关功能零客诉。',
          '完成后台 8 个业务模块的国际化改造，维护 300+ 翻译词条；开发设备管理与风格库，支持 100 台设备在线监控及批量操作，修复 20+ 线上 Bug。',
          '封装统一日志 SDK，埋点覆盖率由 60% 提升至 95%，设备问题平均定位时长由 2 小时缩短至 30 分钟。',
          '主导官网中英文双语改版，首屏加载由 3.2s 优化至 1.5s，Lighthouse 性能评分由 68 提升至 92，月均访问量提升 40%。',
        ],
      },
      {
        period: '项目经历',
        place: '购物商城 App',
        role: '独立全栈开发',
        points: [
          '采用 Flutter（GetX / Dio / WebView）、Vue 3 + Vite 与 Spring Cloud 微服务（Nacos / Gateway / Spring Boot），对接 Elasticsearch、RabbitMQ 和 MySQL。',
          'Flutter 实现首页瀑布流、分类、购物车、登录与个人中心；Vue 3 实现搜索、商品列表与详情、订单确认、余额支付、订单列表与详情共 7 个页面。',
          '自研 JSBridge，由 Flutter 原生侧代理 H5 全部 HTTP 请求，规避本地 file:// 页面跨域限制；H5 单文件内联构建后随 App 本地加载。',
          '封装 Dio 统一网络层，支持 Token 自动携带与 401 全局拦截，兼容包装响应和裸 JSON，统一金额以分为单位的接口契约。',
          '设计支付最终一致性方案：MQ 异步更新订单，前端轮询确认，结合超时兜底与异常对账处理状态不一致。',
        ],
      },
      {
        period: '技能与认证',
        place: '全栈开发 · AI 辅助工程',
        groups: [
          {
            heading: '技术栈',
            items: [
              '熟练掌握：JavaScript / TypeScript、Vue 3、Spring Boot、MySQL、Flutter / Dart、Pinia、Vite、SCSS。',
              '熟悉：Java、Node.js、Redis、Express、Next.js、Docker、Nginx、ECharts、Webpack、小程序开发、单元测试。',
              '了解：WebGL、Three.js、低代码平台设计。',
            ],
          },
          {
            heading: 'AI 赋能',
            items: [
              '熟练使用 Codex、Claude，将 AI 应用于需求梳理、代码与单元测试生成、代码审查及文档编写；掌握 PRD 拆解、接口文档生成、Prompt 工程与上下文管理。',
            ],
          },
          {
            heading: '技能证书',
            items: ['CET-4 · 华为 HCIA-AI 技能证书 · AI Agent 技术与应用微认证'],
          },
          {
            heading: 'GitHub · yang1248',
            link: SOCIAL_LINKS[0].href,
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
