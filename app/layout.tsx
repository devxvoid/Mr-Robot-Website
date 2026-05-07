import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeleClaw Workspace",
  description: "Professional AI workspace for agents, workflows, Android builds, and automation."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03060c"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
