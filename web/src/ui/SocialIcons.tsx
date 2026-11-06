import type { SVGProps } from 'react'

// 简化的单色平台图标（currentColor），契合深色画面。
// 如需官方多彩 logo，替换对应 path 即可。

export function DouyinIcon(props: SVGProps<SVGSVGElement>) {
  // 音符 + 旗 —— 抖音的标志性符号
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 3h3a5 5 0 0 0 4.6 4.98V11A8 8 0 0 1 16 9.6V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.12A3 3 0 1 0 13 15V3z" />
    </svg>
  )
}

export function BilibiliIcon(props: SVGProps<SVGSVGElement>) {
  // 电视机 + 两根天线
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 3l3 3M17 3l-3 3" />
      <rect x="3" y="6" width="18" height="13" rx="3.5" />
      <path d="M9 11v2M15 11v2" />
    </svg>
  )
}

export function XiaohongshuIcon(props: SVGProps<SVGSVGElement>) {
  // 圆角方块 + 爱心
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16.2c-2.1-1.5-4-3-4-5.1A2.1 2.1 0 0 1 12 9.9a2.1 2.1 0 0 1 4 1.2c0 2.1-1.9 3.6-4 5.1z" fill="currentColor" />
    </svg>
  )
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  github: GitHubIcon,
  douyin: DouyinIcon,
  bilibili: BilibiliIcon,
  xiaohongshu: XiaohongshuIcon,
}
