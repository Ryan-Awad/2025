import type { Meta, StoryObj } from '@storybook/react'
import hamburger from '@cuhacking/shared/assets/icons/general/hamburger-1.svg'
import discord_white from '@cuhacking/shared/assets/icons/socials/discord-white-1.svg'
import docs_white from '@cuhacking/shared/assets/icons/socials/docs-white-1.svg'
import email_white from '@cuhacking/shared/assets/icons/socials/email-white-1.svg'
import figma_white from '@cuhacking/shared/assets/icons/socials/figma-white-1.svg'
import github_white from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import logo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { NavbarPresenter } from './navbar.presenter'

const meta = {
  title: 'cuHacking Design System/Navigation/Navbar',
  component: NavbarPresenter,
  tags: ['autodocs'],
  args: {

  },
  argTypes: {
    links: {
      control: { type: 'object' },
    },
    logo: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof NavbarPresenter>

const socials = [
  {
    link: 'https://github.com',
    media: {
      src: github_white.src,
      alt: 'GitHub',
    },
  },
  {
    link: 'https://instagram.com',
    media: {
      src: instagram_white.src,
      alt: 'Instagram',
    },
  },
  {
    link: 'https://linkedin.com',
    media: {
      src: linkedin_white.src,
      alt: 'LinkedIn',
    },
  },
  {
    link: 'https://linktr.ee',
    media: {
      src: linktree_white.src,
      alt: 'Linktree',
    },
  },
  {
    link: 'mailto:example@email.com',
    media: {
      src: email_white.src,
      alt: 'Email',
    },
  },
  {
    link: 'https://discord.com',
    media: {
      src: discord_white.src,
      alt: 'Discord',
    },
  },
  {
    link: 'https://docs.com',
    media: {
      src: docs_white.src,
      alt: 'Documentation',
    },
  },
  {
    link: 'https://figma.com',
    media: {
      src: figma_white.src,
      alt: 'Figma',
    },
  },
]

export default meta

type Story = StoryObj<typeof Navbar>

export const CustomNavbar: Story = {
  args: {
    links: [
      { name: 'ABOUT', link: '/#about' },
      { name: 'EVENTS', link: '/#events' },
      { name: 'SPONSORS', link: '/#sponsors' },
      { name: 'FAQ', link: '/#faq' },
    ],
    logo: logo.src,
    socials,
    hamburger: {
      src: hamburger.src,
      alt: 'Hamburger',
    },
  },
}
