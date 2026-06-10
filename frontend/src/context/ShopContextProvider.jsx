import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";

const ShopContextProvider = ({ children }) => {
  const value = {
    products,
    currency: "₹",
    delivery_fee: 10,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
