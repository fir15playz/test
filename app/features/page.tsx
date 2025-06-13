import type { Metadata } from "next"
import FeaturesPageClient from "./FeaturesPageClient"

export const metadata: Metadata = {
  title: "Pure | Features",
  description: "Discover all the powerful features that make Pure the best keyless executor on the market",
}

export default function FeaturesPage() {
  return <FeaturesPageClient />
}
