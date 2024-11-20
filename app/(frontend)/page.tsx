import { Testimoni } from "@/components/Testimoni";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="header w-full min-h-[500px] flex flex-col-reverse md:flex-row justify-between items-center gap-3">
        <div className="header__text w-full md:w-1/2">
          <Card className="shadow-md rounded-sm max-w-[80%] lg:max-w-[40%]">
            <CardContent className="px-3 py-2 flex gap-2 items-center">
              <div className="items-center">
                <p className=" text-yellow-600 mb-0 rotate-180">
                  <i className="fa-solid fa-medal text-xl"></i>
                </p>
              </div>
              <div className="">
                <span className="text-xs uppercase mb-0 font-semibold">
                  Service Award
                </span>
                <p className="text-sm -mt-1">#1 Cheapest Service</p>
              </div>
            </CardContent>
          </Card>
          <div className="my-5 flex flex-col gap-6  max-w-[500px]">
            <h1 className="text-4xl font-semibold">
              Buy the products you want{" "}
              <span className="text-sky-500 font-bold underline">safely</span>{" "}
              and{" "}
              <span className="text-sky-500 font-bold underline">easily</span>.
            </h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-pink-600 text-transparent bg-clip-text">
              The #1 safely and easily Online Store
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              vel soluta,
            </p>
            <div className="flex gap-2 justify-center md:justify-normal items-center">
              <RainbowButton className="px-4 py-1">
                Search product
              </RainbowButton>
              <Button variant={"ghost"}>Contact me</Button>
            </div>
          </div>
        </div>
        <div className="header__image w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/image/ecommerce.png"}
            width={1000}
            height={1000}
            className="w-[80%]"
            alt="Header Image"
          />
        </div>
      </div>
      <section className="min-h-[500px] w-full py-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="w-full md:w-1/2">
            <Image
              src={"/image/4231.webp"}
              width={1000}
              height={1000}
              alt="uhuy"
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="text-xl md:text-4xl font-bold">
              Join our affiliate program and invite your friends to succeed
              together!
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quis
              explicabo, dolor facilis quos temporibus veniam id nulla dolorum
              ad. Cupiditate, nesciunt a!
            </p>
            <div className="">
              <RainbowButton>Start Learning</RainbowButton>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[500px] py-10">
        <h1 className="text-center text-xl lg:text-3xl font-bold mb-5">
          Kenapa kami?
        </h1>
        <Testimoni />
      </section>
    </div>
  );
}
