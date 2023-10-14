"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.svg";
import cart from "@/images/icon-cart.svg";
import avatar from "@/images/image-avatar.png";
import bigshoe from "@/images/image-product-1.jpg";
import bigshoe2 from "@/images/image-product-2.jpg";
import bigshoe3 from "@/images/image-product-3.jpg";
import bigshoe4 from "@/images/image-product-4.jpg";
import smallshoe from "@/images/image-product-1-thumbnail.jpg";
import smallshoe2 from "@/images/image-product-2-thumbnail.jpg";
import smallshoe3 from "@/images/image-product-3-thumbnail.jpg";
import smallshoe4 from "@/images/image-product-4-thumbnail.jpg";
import close from "@/images/icon-close.svg";
import deleteButton from "@/images/icon-delete.svg";
import menu from "@/images/icon-menu.svg";
import minus from "@/images/icon-minus.svg";
import nextButton from "@/images/icon-next.svg";
import plus from "@/images/icon-plus.svg";
import previousButton from "@/images/icon-previous.svg";

export default function Home() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({
    name: "Your cart is empty.",
    price: 0,
  });
  const [picChange, setPicChange] = useState("");

  return (
    <main className="py-4 px-24">
      <div className=" flex justify-between pb-10">
        <div className=" flex justify-start">
          <Image src={logo} className="h-6"></Image>
          <div className="flex h-6 justify-around ">
            <div className="ml-8">Collections</div>
            <div className="ml-8">Men</div>
            <div className="ml-8">Women</div>
            <div className="ml-8">About</div>
            <div className="ml-8">Contact</div>
          </div>
        </div>
        <div className="flex">
          <button>
            <Image src={cart}></Image>
          </button>
          <Image src={avatar} className="h-[40px] w-[40px] mx-4"></Image>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mx-24">
          <button>
            <Image
              src={picChange}
              className="rounded-lg w-[920px] h-[450px]"
            ></Image>
          </button>
          <div className="flex mt-8">
            <button onClick={() => setPicChange(bigshoe)}>
              <Image
                src={smallshoe}
                className="rounded-lg w-28 h-28 mr-2"
              ></Image>
            </button>
            <button onClick={() => setPicChange(bigshoe2)}>
              <Image
                src={smallshoe2}
                className="rounded-lg w-28 h-28 mx-2"
              ></Image>
            </button>
            <button onClick={() => setPicChange(bigshoe3)}>
              <Image
                src={smallshoe3}
                className="rounded-lg w-28 h-28 mx-2"
              ></Image>
            </button>
            <button onClick={() => setPicChange(bigshoe4)}>
              <Image
                src={smallshoe4}
                className="rounded-lg w-28 h-28 mx-2"
              ></Image>
            </button>
          </div>
        </div>
        <div>
          <div className="text-2xl mt-14 mb-4">Sneaker Company</div>
          <div>
            <div className="text-5xl mb-10">
              <strong>{item.name}</strong>
            </div>
            <div className="flex my-8">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </div>
          </div>
          <div className="flex">
            <div className="text-2xl mr-2">
              <strong>{item.price}</strong>
            </div>
            <div className="self-center bg-orange-300 text-orange-500">50%</div>
          </div>
          <div className="text-gray-400 line-through">$250.00</div>
          <div className="flex my-10 justify-start">
            <div className="flex bg-gray-300 w-28 mr-6 rounded-lg">
              <button className="ml-4" onClick={() => setCount(count - 1)}>
                <Image src={minus}></Image>
              </button>
              <div className="self-center mx-6">{count}</div>
              <button className="mr-4" onClick={() => setCount(count + 1)}>
                <Image src={plus}></Image>
              </button>
            </div>

            <button className="bg-orange-500 text-white w-60 h-10 rounded-lg justify-center self-center">
              <div className="flex justify-center mx-10">
                <div>
                  <Image src={cart}></Image>
                </div>
                <button>
                  <div className="">Add to cart</div>
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
