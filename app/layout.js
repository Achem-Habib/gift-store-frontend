import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/nav/Navbar";
import { Inter } from "next/font/google";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Navbar />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb />
            {children}
          </div>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
