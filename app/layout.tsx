import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import MyDialog from "@/components/Dialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trello Clone",
  description: "Created by Ahmer khan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MyDialog />
        {children}
      </body>
    </html>
  );
}
