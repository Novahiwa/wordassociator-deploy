"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Image from "next/image";
import aboutImage from "../assets/undraw_access-account_aydp.svg";

function Landing() {
  const router = useRouter();

  return (
    <div className="mx-auto p-8 container flex justify-between items-center">
      <div className="w-[80%]">
        <h1
         
          className="font-bold text-2xl mt-8"
        >
          Sign in
        </h1>
        <div className="flex justify-evenly items-center flex-col mt-12 md:flex-row">
          <Image
           
            src={aboutImage}
            alt="about image"
            className="w-50"
          />
          <div className="mt-8 flex items-center justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                localStorage.setItem("user", JSON.stringify(decoded));
                router.push("/home");
              }}
              onError={() => console.log("Login failed")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
