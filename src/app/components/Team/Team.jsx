"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdError, MdVerified } from "react-icons/md";

const Team = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://wam.scienceontheweb.net/join.php")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
        setUsers([
          {
            Id: "1",
            name: "Unexpected error occurred",
            error: "failed",
          },
        ]);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 mb-8">
        <h1 className=" text-2xl md:text-3xl capitalize font-bold">our team</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 gap-12 mb-8">
        {users.map((user) => (
          <div
            key={user.Id}
            className="p-4 bg-[#f4f4f4] rounded hover:bg-white hover:scale-105 transition-transform duration-300 hover:shadow-lg"
          >
            <h1 className="text-xl font-bold flex items-center gap-1">
              {user.name}
              {user.status === "verified" && (
                <MdVerified className="text-[#5aa196] text-2xl" />
              )}
              {user.error && <MdError className="text-red-500" />}
            </h1>
            <p className="text-[var(--dark2)]">{user.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
