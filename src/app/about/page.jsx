import React from 'react';
import About from "../components/About/page"
import Team from "../components/Team/Team"

export const metadata = {
    title:"about",
}


const about = () => {
  return (
    <>
      <About />
      <Team />
    </>
  );
}

export default about;
