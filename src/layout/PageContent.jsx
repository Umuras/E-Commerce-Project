import { useEffect, useState } from "react";
import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeaderNew } from "./HeaderNew";
import { FooterDesktop } from "./FooterDesktop";
import { Route, Router } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { ShopPage } from "../pages/ShopPage";

export function PageContent({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isHomePage, setIsHomePage] = useState(true);
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
      <HeaderNew isMobile={isMobile} isHomePage={isHomePage} />

      <main>{children}</main>

      <Switch>
        <Route exact path="/">
          <HomePage isMobile={isMobile} setIsHomePage={setIsHomePage} />
        </Route>
        <Route path="/shop">
          <ShopPage isMobile={isMobile} setIsHomePage={setIsHomePage} />
        </Route>
      </Switch>

      {isMobile ? <Footer /> : <FooterDesktop />}
    </>
  );
}
