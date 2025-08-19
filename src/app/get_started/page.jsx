"use client"
import React from "react";
import startimg from "../assets/undraw_learning_qt7d.svg";
import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "get started",
// };

const page = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-[.rem] sm:p-[2rem] lg:p-[2rem] xl:p-[3rem] 2xl:p-[4rem] md:w-[90%]">
      <div className="flex md:flex-row flex-col p-4 mt-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">Get Started</h1>
          <p className="text-[var(--dark)] md:w-[60%] mb-12 hie">
            word associator designs websites, apps and software that make your
            life easier. We remove the roadblocks that waste your time, helping
            you get things done faster and better. You stay connected, organised
            and focused so you achieve more with less stress
          </p>
        </div>
       <div className="flex items-center justify-center">
         <Image
          src={startimg}
          alt="get started image"
          className="w-[150px] md:w-[200px]"
        />
       </div>
      </div>
       <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                localStorage.setItem("user", JSON.stringify(decoded));
                router.push("/home");
              }}
              onError={() => console.log("Login failed")}
            />
    </div>
  );
};

export default page;
