'use client'

import { CollapsedFooter, ExpandedFooter } from '@/components/globals/Aside/AsideFooter'
import LogoAside from '@/components/globals/Aside/AsideLogo'
import { useAside } from '@/store/useAside'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { CollapsedNavLink, ExpandedNavLink } from '@/components/globals/Aside/AsideNavLink'

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
        {minimize ? <CollapsedNavLink pathname={pathname} /> : <ExpandedNavLink pathname={pathname} />}
      </nav>

      {minimize ? (
        <CollapsedFooter initials={initials} />
      ) : (
        <ExpandedFooter
          initials={initials}
          name={session?.user?.name || 'User'}
          role={session?.user?.role || 'USER'}
        />
      )}
    </aside>
  )
}
