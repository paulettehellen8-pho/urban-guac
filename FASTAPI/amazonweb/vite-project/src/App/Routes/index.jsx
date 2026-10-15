import {BrowserRouter,Routes,Route} from "react-router";
import LoginPage from "../Screen/Login";
import SignUp from "../Screen/SignUp";
import Product from "../Screen/Product";
import Order from "../Screen/Order";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign_up" element={<SignUp />} />
         </Routes>
      </BrowserRouter>
   );
}
export default AppRoutes;