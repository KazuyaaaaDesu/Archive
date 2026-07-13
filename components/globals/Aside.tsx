'use client'

import LogoAside from '@/components/globals/LogoAside'
import { useAside } from '@/store/useAside'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
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
  Bell,
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

export default function Aside() {
  const minimize = useAside((state) => state.minimize)
  const { data: session } = useSession()
  const pathname = usePathname()

  const initials = session?.user?.name
    ? session.user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?'

  return (
    // Sidebar container
    <aside
      className={`hidden md:flex flex-col ${
        minimize ? 'w-[72px]' : 'w-[264px]'
      } bg-[#fafbff] border-r border-[#eceef8] shadow-[4px_0px_24px_0px_rgba(112,125,255,0.06),1px_0px_0px_0px_#eceef8] transition-all duration-300 shrink-0`}
    >
      {/* Logo + collapse button */}
      <LogoAside />
      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-[8px] py-[10px]">
        <div className="flex flex-col gap-[2px] items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            if (minimize) {
              // Collapsed: icon only, centered, with active indicator
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
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#707dff] rounded-r-[3px]" />
                  )}
                  <Icon
                    size={20}
                    className={isActive ? 'text-[#707dff]' : 'text-[#5a6382]'}
                  />
                </Link>
              )
            }

            // Expanded: icon + label, with active indicator
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
                  <span className="absolute left-0 top-[10px] w-[3px] h-5 bg-[#707dff] rounded-r-[3px]" />
                )}
                <div className="flex items-center justify-center size-[20px] ml-[18px] shrink-0">
                  <Icon
                    size={18}
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
      </nav>

      {/* Footer: notifications + user avatar/name */}
      <div className="border-t border-[#eceef8] flex flex-col gap-[4px] h-[110px] justify-center px-[8px] py-[10px] shrink-0 w-full">
        {minimize ? (
          <>
            {/* Notification bell (collapsed) */}
            <div className="flex items-center px-[19px] py-[11px] rounded-[9px] hover:bg-[rgba(112,125,255,0.05)] transition-colors w-full">
              <div className="relative">
                <Bell size={17} className="text-[#5a6382]" />
                <span className="absolute -top-[3px] -right-[3px] size-[8px] rounded-full bg-[#fe6f6f] border border-[#fafbff]" />
              </div>
            </div>
            {/* Avatar (collapsed) */}
            <div className="flex items-center justify-center h-[48px] px-[10.5px] py-[7px] rounded-[10px] hover:bg-[rgba(112,125,255,0.05)] transition-colors w-full">
              <div
                className="size-[34px] rounded-full flex items-center justify-center shrink-0 shadow-[0px_2px_4px_rgba(0,0,0,0.14)]"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #707dff 0%, #5062f5 60%, #3a52ef 100%)',
                }}
              >
                <span className="text-white text-[12.5px] font-bold tracking-[0.5px]">
                  {initials}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Notification bell + "Notifications" label + badge (expanded) */}
            <div className="flex gap-[4px] items-center w-full">
              <div className="flex items-center px-[19px] py-[11px] rounded-[9px] hover:bg-[rgba(112,125,255,0.05)] transition-colors">
                <div className="relative">
                  <Bell size={17} className="text-[#5a6382]" />
                  <span className="absolute -top-[3px] -right-[3px] size-[8px] rounded-full bg-[#fe6f6f] border border-[#fafbff]" />
                </div>
              </div>
              <div className="flex-1 flex gap-[4px] items-center min-w-px pr-[10px]">
                <span className="flex-1 text-[13.5px] font-medium text-[#5a6382]">
                  Notifications
                </span>
                <span className="bg-[#fe6f6f] text-white text-[10.5px] font-bold px-[6px] rounded-[10px] h-[19px] flex items-center">
                  3
                </span>
              </div>
            </div>

            {/* Avatar + name + role (expanded) */}
            <div className="flex gap-[4px] items-center w-full">
              <div className="flex items-center justify-center h-[48px] px-[10.5px] py-[7px] rounded-[10px] hover:bg-[rgba(112,125,255,0.05)] transition-colors">
                <div
                  className="size-[34px] rounded-full flex items-center justify-center shrink-0 shadow-[0px_2px_4px_rgba(0,0,0,0.14)]"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #707dff 0%, #5062f5 60%, #3a52ef 100%)',
                  }}
                >
                  <span className="text-white text-[12.5px] font-bold tracking-[0.5px]">
                    {initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-px w-[158px]">
                <span className="text-[13px] font-bold text-[#12143a] truncate">
                  {session?.user?.name || 'User'}
                </span>
                <span className="text-[11px] font-medium text-[#9ea8c6] truncate">
                  {session?.user?.role || 'USER'}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
