import type { Metadata } from "next"
import DiscordClientPage from "./DiscordClientPage"

export const metadata: Metadata = {
  title: "Pure | Discord",
  description: "Join the Pure Discord community for support, scripts, and updates",
}

export default function DiscordPage() {
  return <DiscordClientPage />
}
