import { Header } from "./Header";

export function PageContent({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
