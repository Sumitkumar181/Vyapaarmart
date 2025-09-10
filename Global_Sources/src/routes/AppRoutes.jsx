import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import BecomeAsuppalier from "../pages/BecomeAsuppalier"
import RequestFormPage from "../pages/RequestFormPage";

import AllCatagories from "../pages/AllCatagories";
import BuyerFormPage from "../pages/BuyerFormPage";
import RegisterPage from "../pages/RegisterPage";
import SignInpage from "../pages/SignInpage";
import OurPackagesPage from "../pages/OurPackagesPage";


const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "become-supplier",
        element: <BecomeAsuppalier/>
      },
      {
        path: "request-buyer",
        element: <RequestFormPage/>
      },
      {
        path: "allCatagories",
        element: <AllCatagories/>
      },
      {
        path: "buyerform",
        element: <BuyerFormPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "SignIn",
        element: <SignInpage/>
      },
      {
        path: "ourpackages",
        element: <OurPackagesPage/>
      },
      
    ],
  },
];

export default AppRoutes;
