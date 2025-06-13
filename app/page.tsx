import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Pure | Home",
  description: "The Best Keyless Executor",
}

export default function HomePage() {
  return <ClientPage />
}
