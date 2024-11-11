"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

export default function NavbarFrontend() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="w-full sticky top-0 z-[998]">
      <div className="w-full bg-background text-foreground p-3 shadow-md relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="">
            <h1 className="text-xl font-bold text-sky-500">Tokokay.</h1>
          </div>
          <div
            className={`absolute md:static left-0 ${
              openMenu ? "top-[100%]" : "-top-[300%]"
            } bg-background w-full py-5 md:py-0 md:bg-transparent rounded-md transition-all duration-300 z-[997] shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-5 justify-center items-center">
              <li>Seller Center</li>
              <li>Download</li>
              <li>Bantuan</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="">
              <Button variant={"ghost"}>
                <i className="fa-regular fa-cart-shopping"></i>
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar>
                    <AvatarImage src="/loke" alt="sss" />
                    <AvatarFallback className="font-bold">
                      <i className="fa-solid fa-user"></i>
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-[family-name:var(--font-poppins)] mr-5 w-[200px] z-[999]">
                  <DropdownMenuLabel>
                    <h2 className="line-clamp-1 break-all">
                      Akun Tamu sksjja jdhakajsj
                    </h2>
                    <p className="text-foreground/40 text-xs mt-0">
                      dhitznswaa@gmail.com
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign In</DropdownMenuItem>
                  <DropdownMenuItem>Sign Up</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="">
              <Button
                variant={"secondary"}
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center md:hidden"
              >
                <i
                  className={`fa-regular  ${
                    openMenu ? "fa-bars-staggered" : "fa-bars"
                  } transition-all duration-500`}
                ></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
