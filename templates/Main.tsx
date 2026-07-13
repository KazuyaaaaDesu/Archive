import HeaderDashboard from '@/components/globals/HeaderDashboard'
import FooterDashboard from '@/components/globals/FooterDashboard'
import Aside from '@/components/globals/Aside/Aside'
import Drawer from '@/components/globals/Drawer'

export default async function TemplateMain({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className="flex h-dvh">
        <Aside />
        <main className="flex-1 min-w-0 overflow-x-hidden flex flex-col">
          <section className="flex-1">{children}</section>
        </main>
      </section>
      <Drawer />
    </>
  )
}
