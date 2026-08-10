import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiaan-robotics-automation.utsav27092002.chatgpt.site";
const socialImage = `${siteUrl}${basePath}/og.png`;
const title = "Kiaan Robotics | Industrial Automation Solutions";
const description = "Turnkey robotic welding, machine tending, handling, painting and cutting solutions—from engineering to commissioning and support.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [{ url: `${basePath}/favicon.png`, type: "image/png", sizes: "512x512" }],
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
  openGraph: { title, description, images: [{ url: socialImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
