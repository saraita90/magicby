import type { Metadata } from "next";

// Replace IBM_Plex_Sans with another Google font
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

// Replace IBM_Plex_Sans with another Google font
// rename the variable to match the font name
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],

  // Variable that triggers the font to be loaded
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Magicby",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //In the className brackets call the utility function called cn
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
