import React from "react";
import NavbarFrontend from "./NavbarFrontend";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-poppins)] text-sm">
      <NavbarFrontend />
      <div className="containter mx-auto py-16 px-4 md:px-8 lg:px-24">
        {children}
      </div>
    </div>
  );
}
