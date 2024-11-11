import React from "react";
import NavbarFrontend from "./NavbarFrontend";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-poppins)] text-sm">
      <NavbarFrontend />
      <div className="containter mx-auto p-4 md:p-8 lg:p-16">{children}</div>
    </div>
  );
}
