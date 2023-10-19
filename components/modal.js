"use client";
import Image from "next/image";
import bigshoe1 from "@/images/image-product-1.jpg";
import bigshoe2 from "@/images/image-product-2.jpg";
import bigshoe3 from "@/images/image-product-3.jpg";
import bigshoe4 from "@/images/image-product-4.jpg";
import smallshoe1 from "@/images/image-product-1-thumbnail.jpg";
import smallshoe2 from "@/images/image-product-2-thumbnail.jpg";
import smallshoe3 from "@/images/image-product-3-thumbnail.jpg";
import smallshoe4 from "@/images/image-product-4-thumbnail.jpg";
import close from "@/images/icon-close.svg";
import nextButton from "@/images/icon-next.svg";
import previousButton from "@/images/icon-previous.svg";
import { useState } from "react";

export default function Modal({ openModal, setOpenModal, bigShoe }) {
  const [count, setCount] = useState(0);
  //   const [bigShoe, setBigShoe] = useState([
  //     bigshoe1,
  //     bigshoe2,
  //     bigshoe3,
  //     bigshoe4,
  //   ]);

  function previousClick(e) {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
    if (e.target.value <= 0) {
      return bigshoe1;
    } else if (e.target.value == 1) {
      return bigshoe2;
    } else if (e.target.value == 2) {
      return bigshoe3;
    } else if (e.target.value == 3) {
      return bigshoe4;
    }
  }

  function nextClick(e) {
    if (count >= bigShoe.length - 1) {
      setCount(bigShoe.length - 1);
    } else {
      setCount(count + 1);
    }
    if (e.target.value >= bigShoe.length - 1) {
      return bigshoe1;
    } else if (e.target.value == 1) {
      return bigshoe2;
    } else if (e.target.value == 2) {
      return bigshoe3;
    } else if (e.target.value == 3) {
      return bigshoe4;
    }
  }

  return openModal ? (
    <div
      className="hidden sm:block absolute z-10 ml-[15%] -mt-[5%] "
      onClick={() => setOpenModal(false)}
    >
      <div
        className="flex flex-col w-[80%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ml-[76%]">
          <button onClick={() => setOpenModal(false)}>
            <Image src={close} alt="closeButton"></Image>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="mx-24">
            <div>
              <div className=" bg-GrayishBlue self-center w-8 h-8 p-2 rounded-full absolute mt-[20%] ml-[8%]">
                <button onClick={(e) => previousClick(e)}>
                  <Image src={previousButton} alt="previousButton"></Image>
                </button>
              </div>
              <button className="flex justify-center">
                <Image
                  src={bigShoe[count]}
                  className="rounded-lg w-[70%]"
                  alt="picChange"
                ></Image>
              </button>
              <div className="bg-GrayishBlue self-center w-8 h-8 p-2 rounded-full absolute -mt-[24.5%] ml-[53%]">
                <button onClick={(e) => nextClick(e)}>
                  <Image src={nextButton} alt="nextButton"></Image>
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => setCount(0)}>
                <Image
                  src={smallshoe1}
                  className="rounded-lg w-20 h-20 mr-2 hover:opacity-50"
                  alt="smallshoe1"
                ></Image>
              </button>
              <button onClick={() => setCount(1)}>
                <Image
                  src={smallshoe2}
                  className="rounded-lg w-20 h-20 mx-2 hover:opacity-50"
                  alt="smallshoe2"
                ></Image>
              </button>
              <button onClick={() => setCount(2)}>
                <Image
                  src={smallshoe3}
                  className="rounded-lg w-20 h-20 mx-2 hover:opacity-50"
                  alt="smallshoe3"
                ></Image>
              </button>
              <button onClick={() => setCount(3)}>
                <Image
                  src={smallshoe4}
                  className="rounded-lg w-20 h-20 mx-2 hover:opacity-50"
                  alt="smallshoe4"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
