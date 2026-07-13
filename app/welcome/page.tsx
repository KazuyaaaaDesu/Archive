import { Info, GraduationCap, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <div className="bg-[#f4f6ff] h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute left-0 top-[3px] h-[720px] w-[1208px] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(112,125,255,0.12) 0.8px, transparent 0.8px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative gradient blobs */}
      <div
        className="absolute left-[-200px] top-[86px] w-[750px] h-[600px] rounded-[190px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 40% 50%, rgba(254,111,111,0.14) 0%, rgba(127,56,56,0.07) 34%, transparent 68%)',
        }}
      />
      <div
        className="absolute right-[-200px] top-[-120px] w-[750px] h-[600px] rounded-[240px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, rgba(112,125,255,0.18) 0%, rgba(56,63,128,0.09) 34%, transparent 68%)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-[36px]">
        {/* Info banner */}
        <div className="flex items-center gap-[10px] bg-[#707cff11] border border-[rgba(112,125,255,0.16)] rounded-[10px] px-[17px] py-[11px]">
          <Info size={14} className="text-[#707DFF]" />
          <span className="text-[13px] font-medium text-[#5a6382] leading-[19.5px]">
            Join a Student Section or the Faculty to unlock Archive&apos;s
            collaboration features.
          </span>
        </div>

        {/* Heading section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="font-['Sora',sans-serif] text-[25px] text-[#12143a] text-center">
            Welcome to Archive
          </h1>
          <p className="font-medium text-[15px] text-[#8a93b4] text-center">
            Your account is ready. Choose how you&apos;ll use Archive to get
            started.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-[25px]">
          {/* Join as Student */}
          <div className="flex flex-col gap-[15px] bg-white border border-[#eceef8] rounded-[14px] shadow-[0px_2px_12px_rgba(112,125,255,0.06),0px_1px_3px_rgba(0,0,0,0.04)] px-[25px] py-[25px] w-[270px] h-fit">
            <div className="flex items-center justify-center bg-[#fe6f6f21] size-[48px] rounded-[13px]">
              <GraduationCap size={24} className="text-[#fe6f6f]" />
            </div>

            <div className="flex flex-col gap-[15px]">
              <h2 className="font-['Sora',sans-serif] text-[18px] text-[#12143a]">
                Join as Student
              </h2>
              <p className="text-[14px] text-[#8a93b4]">
                Join your class section using the invitation code provided by
                your Coordinator.
              </p>
            </div>

            <Link
              href="/join/student"
              className="flex items-center justify-center gap-[7px] w-full py-[10px] rounded-[10px] text-[13.5px] font-semibold text-white shadow-[0px_4px_7px_rgba(112,125,255,0.3)]"
              style={{
                backgroundImage:
                  'linear-gradient(169deg, #e85e5e 0%, #fe6f6f 100%)',
              }}
            >
              Join as Student
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Join as Faculty */}
          <div className="flex flex-col gap-[15px] bg-white border-none rounded-[15px] shadow-[0px_2px_12px_rgba(112,125,255,0.06),0px_1px_3px_rgba(0,0,0,0.04)] px-[25px] py-[25px] w-[270px] h-fit">
            {/*User icon*/}
            <div className="flex items-center justify-center size-[48px] bg-[#707cff17] rounded-[13px]">
              <Users size={22} className="text-[#707dff]" />
            </div>

            <div className="flex flex-col gap-[15px]">
              <h2 className="font-['Sora',sans-serif] text-[18px] text-[#12143a]">
                Join as Faculty
              </h2>
              <p className="text-[14px] text-[#8a93b4]">
                Join the faculty using the invitation code provided by the
                Program Chair.
              </p>
            </div>

            <Link
              href="/join/faculty"
              className="flex items-center justify-center gap-[7px] w-full py-[10px] rounded-[10px] text-[13.5px] font-semibold text-white shadow-[0px_4px_7px_rgba(112,125,255,0.3)]"
              style={{
                backgroundImage:
                  'linear-gradient(169deg, #707dff 0%, #5565ff 100%)',
              }}
            >
              Join as Faculty
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
