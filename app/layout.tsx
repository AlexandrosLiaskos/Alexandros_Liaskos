import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Alexandros P. Liaskos - Geospatial Analyst & Software Developer",
  description: "Professional portfolio of Alexandros P. Liaskos, Geospatial Analyst and Software Developer specializing in coastal erosion research, GIS, and web development.",
  keywords: ["Geospatial Analyst", "Software Developer", "GIS", "Remote Sensing", "Python", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Alexandros P. Liaskos" }],
  openGraph: {
    title: "Alexandros P. Liaskos - Geospatial Analyst & Software Developer",
    description: "Professional portfolio showcasing expertise in geospatial analysis, software development, and coastal erosion research.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandros P. Liaskos - Portfolio",
    description: "Geospatial Analyst & Software Developer specializing in coastal erosion research",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
            
            {/* Main Content */}
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}