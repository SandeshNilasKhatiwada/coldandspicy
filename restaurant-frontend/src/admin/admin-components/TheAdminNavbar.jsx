import React, { useState, useEffect } from "react";
import { CiChat2 } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function TheAdminNavbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "GMT",
    });
  };

  return (
    <div className="flex justify-between items-center mx-6">
      <div className="w-[60%]">
        <p className="text-xs font-light">
          {formatDate(currentDateTime)} | {formatTime(currentDateTime)}
        </p>
      </div>
      <div className="flex justify-between gap-6 w-[40%]">
        <div className="flex items-center justify-center px-5 gap-5">
          <CiChat2 />
          <IoNotificationsOutline />
        </div>
        <div className="hidden w-[80%] md:flex md:items-center felx-row items-center rounded-md border mr-[15%]">
          <CiSearch className="mx-2 cursor-pointer text-xs" />
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="outline-none bg-black py-2 text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default TheAdminNavbar;
