import FormLogin from '@/components/forms/FormLogin'
import Link from 'next/link'

export default function Login() {
  return (
    <section className="h-dvh">
      <div className="h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Column: Authentic Card Wrapper UI */}
          <div className="flex-1 p-6 flex flex-col gap-5 items-center justify-center bg-[#F8F7FF]">
            <div className="size-72 absolute -left-16 top-16 opacity-30 bg-purple-400 rounded-full blur-[80px] pointer-events-none z-0" />
            <div className="size-64 absolute right-260 top-90 opacity-25 bg-rose-400 rounded-full blur-[80px] pointer-events-none z-0" />
            <div className="w-full max-w-[440px] p-8 md:p-10 rounded-3xl bg-[#ffffff] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03),0px_20px_60px_-4px_rgba(112,125,255,0.16),0px_0px_0px_1px_rgba(112,125,255,0.06)] flex flex-col gap-6 relative z-10">
              {/* Logo Header */}
              <div className="w-full h-8 flex justify-start items-center gap-3">
                <div className="size-8 bg-gradient-to-br from-indigo-400 to-red-400 rounded-xl flex justify-center items-center text-white text-sm">
                  📖
                </div>
                <span className="justify-start text-violet-950 text-md font-bold leading-5 tracking-wider">
                  ARCHIVE
                </span>
              </div>

              <FormLogin className="w-full" />
            </div>
          </div>

          {/* Right Column: Page info */}
          <div className="flex-1 bg-tertiary p-5 flex items-center justify-center">
            <div className="max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
