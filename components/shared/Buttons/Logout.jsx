import React from "react";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  return (
    <button
      className={"text-white flex gap-3 justify-center items-center mt-3 w-full cursor-pointer"}
    >
      <FiLogOut />
      <p>Logout</p>
    </button>
  );
};

export default Logout;
