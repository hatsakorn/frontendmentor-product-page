import Image from "next/image";
import close from "@/images/icon-close.svg";

export default function HamburgerMenu({
  openHamburgerMenu,
  setOpenHamburgerMenu,
}) {
  return (
    openHamburgerMenu && (
      <div className="bg-White w-[70%] h-[100%] absolute z-10 sm:hidden">
        <div>
          <button onClick={() => setOpenHamburgerMenu(false)}>
            <Image src={close} alt="close" className="ml-8"></Image>
          </button>
          <div className="flex flex-col mt-10">
            <button className=" text-start ml-8 pb-[5%]">
              <strong>Collections</strong>
            </button>
            <button className=" text-start ml-8 pb-[5%]">
              <strong>Men</strong>
            </button>
            <button className=" text-start ml-8 pb-[5%]">
              <strong>Women</strong>
            </button>
            <button className=" text-start ml-8 pb-[5%]">
              <strong>About</strong>
            </button>
            <button className=" text-start ml-8 pb-[5%]">
              <strong>Contact</strong>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
