import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epoch AI — Intelligence, built responsibly.",
  description:
    "Epoch AI is a women-led studio building intelligent, ethical AI — machine learning, language, vision, and generative systems that keep the human in the loop.",
  keywords: [
    "AI",
    "Machine Learning",
    "Women in Tech",
    "Ethical AI",
    "Generative AI",
    "NLP",
    "Computer Vision",
    "AI Startup",
  ],
  authors: [{ name: "Epoch AI" }],
  icons: { icon: "/assets/favicon.png" },
  openGraph: {
    title: "Epoch AI — Intelligence, built responsibly.",
    description:
      "A women-led AI studio shaping the future of intelligence — responsibly, beautifully, boldly.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint to set the saved theme and avoid a light/dark flash.
const noFlashTheme = `
(function(){try{var t=localStorage.getItem('epoch-theme');
document.documentElement.setAttribute('data-theme', t==='dark'?'dark':'light');}catch(e){
document.documentElement.setAttribute('data-theme','light');}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;600;700;800;900&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
