import { Metadata } from "next"
import { ReactNode } from "react"
import TemplateMain from "@/templates/Main"

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome to Archive"
}

export default function WelcomeLayout({
  children
}:{
  children: ReactNode
}) {
  return (
    <TemplateMain>
      {children}
    </TemplateMain>
  )
}
