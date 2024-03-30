import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./context/NextAuthProvider";
import Header from "../components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plays Go",
  description: "Hello Guys ! search, find and post for your game players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-black to to-gray-900">
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
