"use client"
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
const myFont = localFont({
  src: "../font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${myFont.className} antialiased bg-gray-100`}>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
        <ToastContainer />

      </body>
    </html>
  );
}
