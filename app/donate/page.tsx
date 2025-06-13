import type { Metadata } from "next"
import DonatePageClient from "./DonatePageClient"

export const metadata: Metadata = {
  title: "Pure | Donate",
  description: "Support Pure development with donations to keep the project free and accessible",
}

export default function DonatePage() {
  return <DonatePageClient />
}
