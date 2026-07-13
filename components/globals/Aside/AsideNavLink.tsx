'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  UserCheck,
  Users,
  Flag,
  Shield,
  FileText,
  Folder,
  User,
  type LucideIcon,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Coordinator', href: '/coordinator', icon: UserCheck },
  { label: 'Faculty', href: '/faculty', icon: Users },
  { label: 'Milestones', href: '/milestones', icon: Flag },
  { label: 'Defense', href: '/defense', icon: Shield },
  { label: 'Templates', href: '/templates', icon: FileText },
  { label: 'Repository', href: '/repository', icon: Folder },
  { label: 'Profile', href: '/dashboard/user/profile', icon: User },
]

export function CollapsedNavLink({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex items-center justify-center h-[40px] w-[56px] rounded-[10px] transition-colors ${
              isActive
                ? 'bg-[rgba(112,125,255,0.1)]'
                : 'hover:bg-[rgba(112,125,255,0.05)]'
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-5 bg-[#707dff] rounded-r-[3px]" />
            )}
            <Icon
              size={20}
              className={isActive ? 'text-[#707dff]' : 'text-[#5a6382]'}
            />
          </Link>
        )
      })}
    </div>
  )
}

export function ExpandedNavLink({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex items-center h-[40px] w-[248px] rounded-[10px] transition-colors ${
              isActive
                ? 'bg-[rgba(112,125,255,0.1)]'
                : 'hover:bg-[rgba(112,125,255,0.05)]'
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-[10px] w-[4px] h-5 bg-[#707dff] rounded-r-[3px]" />
            )}
            <div className="flex items-center justify-center size-[20px] ml-[18px] shrink-0">
              <Icon
                size={20}
                className={isActive ? 'text-[#707dff]' : 'text-[#5a6382]'}
              />
            </div>
            <div className="flex-1 min-w-px px-[20px]">
              <span
                className={`text-[13.5px] tracking-[0.108px] whitespace-nowrap ${
                  isActive
                    ? 'font-bold text-[#707dff]'
                    : 'font-medium text-[#5a6382]'
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
