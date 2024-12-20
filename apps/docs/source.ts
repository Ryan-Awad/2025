import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import {
  GitPullRequestCreateArrow as ContributionGuidelinesIcon,
  Dock as HomeIcon,
  icons,
  BookOpenText as KnowledgeBaseIcon,
  Layers as ToolsIcon,
} from 'lucide-react'
import { createElement } from 'react'
import { docs, meta } from './.source'

export const pages = [
  {
    title: 'Home',
    description: 'Leave none behind regardless of our development cost.',
    url: '',
    icon: HomeIcon,
  },
  {
    title: 'Tech Stack',
    description: 'For those wondering about our specs.',
    url: 'tech-stack',
    icon: ToolsIcon,
  },
  {
    title: 'Contribution Guidelines',
    description: 'Understand our collaboration process.',
    url: 'contribution-guidelines',
    icon: ContributionGuidelinesIcon,
  },
  {
    title: 'Knowledge Base',
    description: 'Curated resources to accelerate your learning.',
    url: 'knowledge-base',
    icon: KnowledgeBaseIcon,
  },
]
export const source = loader({
  baseUrl: '/',

  icon(icon) {
    if (!icon) {
      // You may set a default icon
      // return createElement(HomeIcon)
      return
    }

    if (icon in icons)
      return createElement(icons[icon as keyof typeof icons])
  },

  source: createMDXSource(docs, meta),
})
