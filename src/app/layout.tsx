import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/sidebar";
import Searchbar from "@/components/Searchbar/Searchbar";
import { Provider } from "@/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emploie du Temps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="flex w-full">
            <Sidebar />
            <div className="flex flex-col w-full z-0 max-w-[85%] h-auto">
              <Searchbar />
              <div className="relative z-0">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
