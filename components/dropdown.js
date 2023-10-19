"use client";
import Image from "next/image";
import deleteButton from "@/images/icon-delete.svg";

export default function Dropdown({
  inCart,
  countItemInCart,
  setCountItemInCart,
  setItem,
  openDropdown,
}) {
  function deleteItem() {
    setItem({ name: "Your cart is empty.", price: 0, picture: "" });
    setCountItemInCart(0);
  }

  return openDropdown ? (
    <div className="absolute z-10 bg-White w-[95%] h-[40%] sm:h-auto sm:w-[20%] -ml-[70%] sm:-ml-[10%] mt-10 border-2 border-GrayishBlue rounded-lg shadow-xl">
      <div className="text-start ml-5 mt-4">
        <strong>Cart</strong>
      </div>
      <div className="mt-4 text-GrayishBlue">
        <hr />
      </div>
      {countItemInCart === 0 ? (
        <div className="text-sm mt-[20%] text-center">
          <div className="mb-[20%]">{inCart.name}</div>
        </div>
      ) : (
        <div className="text-sm mt-[5%] ">
          <div className="mb-[10%] flex">
            <Image
              src={inCart.picture}
              alt="inCartPicture"
              className="w-10 ml-4"
            ></Image>
            <div className="mx-4">
              <div>{inCart.name}</div>
              <div>
                ${inCart.price}.00 x {countItemInCart} $ $
                <strong>{inCart.price * countItemInCart}.00</strong>
              </div>
            </div>
            <button onClick={() => deleteItem()}>
              <Image
                src={deleteButton}
                alt="trash"
                className="h-4 self-center ml-10 sm:ml-auto"
              ></Image>
            </button>
          </div>
          <div className=" bg-mainOrange text-White text-xs text-center rounded-lg p-3 m-6">
            Checkout
          </div>
        </div>
      )}
    </div>
  ) : null;
}
