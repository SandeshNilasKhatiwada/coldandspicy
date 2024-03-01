import { Route, Routes } from "react-router-dom";
import TheNavbar from "../components/navigation/TheNavbar";
import TheHome from "../pages/TheHome";
import TheMenu from "../pages/TheMenu";
import TheProfile from "../../src/components/profile/TheProfile";
import TheYourOrder from "../pages/TheYourOrder";
import TheLogin from "../pages/TheLogin";
import TheRegistration from "../pages/TheRegistration";
import TheError from "../pages/TheError";

const routes = [
  { path: "/", element: <TheHome /> },
  { path: "/menu", element: <TheMenu /> },
  { path: "/username", element: <TheProfile /> },
  { path: "/your-order", element: <TheYourOrder /> },
  { path: "/login", element: <TheLogin /> },
  { path: "/registration", element: <TheRegistration /> },
];

export default function TheRouter() {
  return (
    <div className="border border-black h-[100vh] custom-scroll">
      <div className="flex flex-col">
        <div className="shadow-custom-nav-shadow sticky top-0 z-50 bg-black">
          <TheNavbar />
        </div>
      <div>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
                   <Route path="*" element={<TheError />} />
        </Routes>
      </div>
    </div> 
    </div>
  );
}
