import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// import { PiTelegramLogoLight } from "react-icons/pi";
// import LeadFormPopup from "./layout/LeadFormPopup";

function App() {
  const { pathname } = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 right-6 bg-gray flex items-center justify-center gap-1 content-center text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 z-50"
      >
        Contact Us <PiTelegramLogoLight size={20} />
      </button>

      
      <LeadFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      /> */}
    </>
  );
}

export default App;
