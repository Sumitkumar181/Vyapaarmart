import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
