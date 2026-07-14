import { Loader2 } from 'lucide-react'

export default function WelcomeLoading() {
  return (
    <div className="bg-[#000000] h-full flex items-center justify-center">
      <Loader2 size={32} className="text-[#707DFF] animate-spin" />
    </div>
  )
}
