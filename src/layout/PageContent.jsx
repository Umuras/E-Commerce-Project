import { useEffect, useState } from "react";
import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeaderNew } from "./HeaderNew";
import { FooterDesktop } from "./FooterDesktop";
import { Route, Router } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { ShopPage } from "../pages/ShopPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ContactPage } from "../pages/ContactPage";
import { TeamPage } from "../pages/TeamPage";
import { AboutUsPage } from "../pages/AboutUsPage";

export function PageContent({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isContactpage, setIsContactpage] = useState(false);
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
      <HeaderNew
        isMobile={isMobile}
        isHomePage={isHomePage}
        isContactpage={isContactpage}
      />

      <main>{children}</main>

      <Switch>
        <Route exact path="/">
          <HomePage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
            setIsContactpage={setIsContactpage}
          />
        </Route>
        <Route path="/shop">
          <ShopPage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
            setIsContactpage={setIsContactpage}
          />
        </Route>
        <Route path="/product">
          <ProductDetailPage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
          />
        </Route>
        <Route path="/contact">
          <ContactPage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
            setIsContactpage={setIsContactpage}
          />
        </Route>
        <Route path="/team">
          <TeamPage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
            setIsContactpage={setIsContactpage}
          />
        </Route>
        <Route>
          <AboutUsPage
            isMobile={isMobile}
            setIsHomePage={setIsHomePage}
            setIsContactpage={setIsContactpage}
          />
        </Route>
      </Switch>

      {isMobile ? <Footer /> : <FooterDesktop />}
    </>
  );
}
