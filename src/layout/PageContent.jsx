import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeaderNew } from "./HeaderNew";

export function PageContent({ children }) {
  return (
    <>
      <HeaderNew />
      <main>{children}</main>
      {/* <HomePage /> */}
      <Footer />
    </>
  );
}
