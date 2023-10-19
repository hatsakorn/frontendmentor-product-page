"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.svg";
import cart from "@/images/icon-cart.svg";
import avatar from "@/images/image-avatar.png";
import bigshoe1 from "@/images/image-product-1.jpg";
import bigshoe2 from "@/images/image-product-2.jpg";
import bigshoe3 from "@/images/image-product-3.jpg";
import bigshoe4 from "@/images/image-product-4.jpg";
import smallshoe1 from "@/images/image-product-1-thumbnail.jpg";
import smallshoe2 from "@/images/image-product-2-thumbnail.jpg";
import smallshoe3 from "@/images/image-product-3-thumbnail.jpg";
import smallshoe4 from "@/images/image-product-4-thumbnail.jpg";
import menu from "@/images/icon-menu.svg";
import minus from "@/images/icon-minus.svg";
import plus from "@/images/icon-plus.svg";
import Dropdown from "@/components/dropdown";
import Modal from "@/components/modal";
import nextButton from "@/images/icon-next.svg";
import previousButton from "@/images/icon-previous.svg";
import HamburgerMenu from "@/components/hamburgerMenu";

export default function Home() {
  const [count, setCount] = useState(0);
  const [countItemInCart, setCountItemInCart] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const [item, setItem] = useState({
    name: "Your cart is empty.",
    price: 0,
    picture: "",
  });
  const [picChange, setPicChange] = useState(bigshoe1);
  const [arrowShoe, SetArrowshoe] = useState(0);
  const [bigShoe, setBigShoe] = useState([
    bigshoe1,
    bigshoe2,
    bigshoe3,
    bigshoe4,
  ]);

  function decrease() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }
  function increase() {
    setCount(count + 1);
  }
  function toggleOpenModal() {
    setOpenModal(!openModal);
  }

  function selectItemtoCart(e) {
    setCountItemInCart(count + countItemInCart);
    setItem({
      name: "Fall Limited Edition Sneakers",
      price: 125,
      picture: smallshoe1,
    });
  }

  function previousClick(e) {
    if (arrowShoe <= 0) {
      SetArrowshoe(0);
    } else {
      SetArrowshoe(arrowShoe - 1);
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
    if (arrowShoe >= bigShoe.length - 1) {
      SetArrowshoe(bigShoe.length - 1);
    } else {
      SetArrowshoe(arrowShoe + 1);
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

  return (
    <main className="py-1 sm:px-20">
      <HamburgerMenu
        openHamburgerMenu={openHamburgerMenu}
        setOpenHamburgerMenu={setOpenHamburgerMenu}
        className="sm:hidden"
      />
      <div className="flex justify-evenly sm:justify-between pb-[3%] mb-4 mt-6 sm:mb-auto">
        <div className="flex justify-start">
          <button
            onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
            className="-ml-16 mr-4 h-4 self-center sm:hidden"
          >
            <Image src={menu} alt="menu"></Image>
          </button>
          <Image src={logo} alt="logo"></Image>
          <div className="flex h-6 justify-around ">
            <button className="hidden sm:block sm:ml-8 sm:pb-[5%]">
              Collections
            </button>
            <button className="hidden sm:block ml-8">Men</button>
            <button className="hidden sm:block ml-8">Women</button>
            <button className="hidden sm:block ml-8">About</button>
            <button className="hidden sm:block ml-8">Contact</button>
          </div>
        </div>
        <div className="flex sm:mr-[18%]">
          <div className="">
            <button
              className="flex flex-col"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <div className="flex">
                <Image src={cart} alt="cart"></Image>
                {countItemInCart === 0 ? null : (
                  <div className="absolute ml-2 -mt-2 text-xs w-5 h-4 bg-mainOrange text-White rounded-full">
                    {countItemInCart}
                  </div>
                )}
              </div>
            </button>
            <Dropdown
              inCart={item}
              countItemInCart={countItemInCart}
              setCountItemInCart={setCountItemInCart}
              setItem={setItem}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          </div>
          <button>
            <Image
              src={avatar}
              className="absolute h-[40px] w-[40px] mx-10 -mt-6 hover:border-mainOrange hover:border-2 hover:rounded-full"
              alt="avatar"
            ></Image>
          </button>
        </div>
      </div>
      <div className="hidden sm:block sm:mb-8 sm:text-DarkGrayishBlue">
        <hr />
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        bigShoe={bigShoe}
      />
      <div className=" sm:flex sm:justify-between">
        <div className="sm:mx-24">
          <div className=" bg-GrayishBlue self-center w-8 h-8 p-2 rounded-full absolute mt-[47%] ml-[8%] sm:hidden">
            <button onClick={(e) => previousClick(e)}>
              <Image src={previousButton} alt="previousButton"></Image>
            </button>
          </div>
          <button
            onClick={() => {
              toggleOpenModal();
            }}
          >
            <Image
              src={picChange}
              className="hidden sm:block rounded-lg"
              alt="picChange"
            ></Image>
            <Image
              src={bigShoe[arrowShoe]}
              className="sm:hidden rounded-lg"
              alt="picChange"
            ></Image>
          </button>
          <div className="bg-GrayishBlue self-center w-8 h-8 p-2 rounded-full absolute -mt-[55%] ml-[87%] sm:hidden">
            <button onClick={(e) => nextClick(e)}>
              <Image src={nextButton} alt="nextButton"></Image>
            </button>
          </div>
          <div className="hidden sm:flex mt-2">
            <button
              onClick={() => setPicChange(bigshoe1)}
              className="mr-2 hover:opacity-50"
            >
              <Image
                src={smallshoe1}
                alt="smallshoe1"
                className="rounded-lg "
              ></Image>
            </button>
            <button
              onClick={() => setPicChange(bigshoe2)}
              className="mr-2 hover:opacity-50"
            >
              <Image
                src={smallshoe2}
                className="rounded-lg"
                alt="smallshoe2"
              ></Image>
            </button>
            <button
              onClick={() => setPicChange(bigshoe3)}
              className="mr-2 hover:opacity-50"
            >
              <Image
                src={smallshoe3}
                className="rounded-lg"
                alt="smallshoe3"
              ></Image>
            </button>
            <button
              onClick={() => setPicChange(bigshoe4)}
              className="mr-2 hover:opacity-50"
            >
              <Image
                src={smallshoe4}
                className="rounded-lg"
                alt="smallshoe4"
              ></Image>
            </button>
          </div>
        </div>
        <div className="ml-4 sm:ml-auto">
          <div className=" text-sm sm:text-xl mt-4 sm:mt-14 mb-4 text-mainOrange">
            <strong>SNEAKER COMPANY</strong>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl sm:mb-10">
              <strong>Fall Limited Edition Sneakers</strong>
            </div>
            <div className="text-base flex my-8">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </div>
          </div>
          <div className="flex justify-around sm:block">
            <div className="flex">
              <div className="text-2xl mr-6 sm:mr-2">
                <strong>$125.00</strong>
              </div>
              <div className="self-center bg-PaleOrange text-mainOrange">
                <strong>50%</strong>
              </div>
            </div>
            <div className="  text-DarkGrayishBlue line-through flex-grow sm:flex-grow-0 text-center ml-32 sm:ml-auto sm:text-start sm:auto">
              $250.00
            </div>
          </div>
          <div className="sm:flex my-8 sm:my-10 justify-start ">
            <div className="flex justify-between sm:justify-normal bg-LightGrayishBlue w-80 h-10 sm:w-28 sm:mr-6 mb-4 sm:mb-auto rounded-lg">
              <button className="ml-4" onClick={decrease}>
                <Image src={minus} alt="minus"></Image>
              </button>
              <div className="self-center mx-6">{count}</div>
              <button className="mr-4" onClick={increase}>
                <Image src={plus} alt="plus"></Image>
              </button>
            </div>

            <button
              className="bg-mainOrange text-White w-80 sm:w-[50%] h-10 rounded-lg justify-center self-center"
              onClick={(e) => selectItemtoCart(e)}
            >
              <div className="flex justify-center mx-10">
                <div>
                  <Image src={cart} alt="addCart"></Image>
                </div>
                <div className="text-White sm:ml-4">Add to cart</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
