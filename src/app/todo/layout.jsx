import React from "react";
import "../globals.css";
import Logo from "@/components/logo";
import MySideBar from "@/components/ui/sideBar";
import { Toaster } from "react-hot-toast";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 m-3">
        <main className="p-6">
          <div className="flex min-h-screen bg-gray-100">
            <MySideBar />
            {children}
            <Toaster />
          </div>
        </main>
      </body>
    </html>
  );
}
