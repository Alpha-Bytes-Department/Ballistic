import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ContactUsForm = () => {
  return (
    <form action="submin" className="flex flex-col gap-1 md:gap-3">
      <label htmlFor="name">Name</label>
      <div>
        <input
          className="border border-gray-300 focus:outline-0 p-3 rounded w-full"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <label htmlFor="email">Email Address</label>
      <div>
        <input
          className="border border-gray-300 focus:outline-0 p-3 rounded w-full"
          type="text"
          name="email"
          id="email"
        />
      </div>
      <label htmlFor="message">Message</label>
      <div>
        <textarea
          className="border border-gray-300 focus:outline-0 p-3 rounded w-full"
          name="message"
          id="message"
        />
      </div>
      <div>
        <button type="submit" className={`btn bg-[#2C2C2C] text-white`}>
          Send <IoArrowForwardCircleOutline className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
