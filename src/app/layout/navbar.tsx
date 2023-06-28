import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col h-52 ">
      <div className="flex flex-row items-center justify-between pl-20 pr-14 h-20 text-darkblue-50 bg-darkblue-100">
        <div className="flex flex-row gap-16">
          <div className="flex flex-row items-center gap-4">
            <Image src="/assets/phone.png" alt="" width={20} height={20} />
            <h1>0901 234 5674 </h1>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Image src="/assets/mail.png" alt="" width={20} height={20} />
            <h1>support@bds.com</h1>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-4">
            <Image src="/assets/phone.png" alt="" width={20} height={20} />
            <h1>0901 234 5674 </h1>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Image src="/assets/mail.png" alt="" width={20} height={20} />
            <h1>support@bds.com</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pl-20 pr-16  h-24">
        <Image src="/assets/logo.svg" alt="" width={290} height={90} />
        <div className="flex flex-row font-medium text-base gap-16">
          <h1>Services</h1>
          <h1>Resources</h1>
          <h1>Pricing</h1>
          <h1>Our Company</h1>
        </div>
        <button className="px-6 py-2 font-bold text-lg rounded-sm text-darkblue-50 bg-darkblue-200">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
