import React from "react";
import Header from "../header/Header";

type componentProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: componentProps) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="container m-auto px-2 mt-4">{children}</main>
      <footer className="flex justify-center items-center bg-black h-10 text-white">footer</footer>
    </div>
  );
};

export default Layout;
