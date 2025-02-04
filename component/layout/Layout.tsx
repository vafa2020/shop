import React from "react";

type componentProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: componentProps) => {
  return (
    <div>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
