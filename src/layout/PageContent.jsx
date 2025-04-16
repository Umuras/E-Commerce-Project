import { useEffect, useState } from "react";
import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeaderNew } from "./HeaderNew";
import { FooterDesktop } from "./FooterDesktop";

export function PageContent({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state based on the current window size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <HeaderNew isMobile={isMobile} />
      <main>{children}</main>
      <HomePage isMobile={isMobile} />
      {isMobile ? <Footer /> : <FooterDesktop />}
    </>
  );
}
