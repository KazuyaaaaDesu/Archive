import { Info, GraduationCap, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function StudentCard() {
  return (
    <div className="flex flex-col gap-[20px] bg-white rounded-[14px] shadow-[0px_2px_12px_rgba(112,125,255,0.06),0px_1px_3px_rgba(0,0,0,0.04)] p-[30px] w-[270px] h-fit">
      <div className="flex items-center justify-center bg-[#fe6f6f21] size-[48px] rounded-[13px]">
        <GraduationCap size={24} className="text-[#fe6f6f]" />
      </div>

      <div className="flex flex-col gap-[10px]">
        <h2 className="font-['Sora',sans-serif] text-[18px] text-[#12143a]">
          Join as Student
        </h2>
        <p className="text-[14px] text-[#8a93b4]">
          Join your class section using the invitation code provided by your
          Coordinator.
        </p>
      </div>

      <Link
        href="/join/student"
        className="flex items-center justify-center gap-[7px] w-full py-[10px] rounded-[10px] text-[13.5px] font-semibold text-white shadow-[0px_4px_7px_rgba(112,125,255,0.3)]"
        style={{
          backgroundImage: 'linear-gradient(169deg, #e85e5e 0%, #fe6f6f 100%)',
        }}
      >
        Join as Student
        <ArrowRight size={15} />
      </Link>
    </div>
  )
}

export function FacultyCard() {
  return (
    <div className="flex flex-col gap-[20px] bg-white rounded-[14px] shadow-[0px_2px_12px_rgba(112,125,255,0.06),0px_1px_3px_rgba(0,0,0,0.04)] p-[30px] w-[270px] h-fit">
      <div className="flex items-center justify-center size-[48px] bg-[#707cff17] rounded-[13px]">
        <Users size={22} className="text-[#707dff]" />
      </div>

      <div className="flex flex-col gap-[10px]">
        <h2 className="font-['Sora',sans-serif] text-[18px] text-[#12143a]">
          Join as Faculty
        </h2>
        <p className="text-[14px] text-[#8a93b4]">
          Join the faculty using the invitation code provided by the Program
          Chair.
        </p>
      </div>

      <Link
        href="/join/faculty"
        className="flex items-center justify-center gap-[7px] w-full py-[10px] rounded-[10px] text-[13.5px] font-semibold text-white shadow-[0px_4px_7px_rgba(112,125,255,0.3)]"
        style={{
          backgroundImage: 'linear-gradient(169deg, #707dff 0%, #5565ff 100%)',
        }}
      >
        Join as Faculty
        <ArrowRight size={15} />
      </Link>
    </div>
  )
}
