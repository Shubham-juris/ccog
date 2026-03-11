import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
// import Navbar from "../components/Navbar";

export const metadata = {
  title: {
    default: "CCOG - Best Learning Platform",
    template: "%s | CCOG",
  },
  description:
    "CCOG is a modern learning platform offering professional courses and career-focused training.",
  keywords: ["CCOG", "online courses", "career training", "education platform"],
  authors: [{ name: "CCOG Team" }],
  metadataBase: new URL("https://ccog.com"),
  openGraph: {
    title: "CCOG - Best Learning Platform",
    description:
      "Join CCOG to boost your career with professional training courses.",
    url: "https://ccog.com",
    siteName: "CCOG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>

      </body>
    </html>
  );
}
