import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/style.scss";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Journey Beyond Borders | Empowering Youth & Promoting Informed Migration Choices",
  description: "Journey Beyond Borders is a platform dedicated to educating and empowering youth in developing countries about migration realities, opportunities at home, and cross-cultural understanding. Join us in fostering informed decisions and sustainable futures.",
  keywords: "migration awareness, youth empowerment, informed migration, migration to Europe, opportunities at home"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
