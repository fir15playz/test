import type { Metadata } from "next"
import DocumentationClientPage from "./DocumentationClientPage"

export const metadata: Metadata = {
  title: "Pure | Documentation",
  description: "Documentation and guides for Pure - The Best Keyless Executor",
}

export default function DocumentationPage() {
  return <DocumentationClientPage />
}
