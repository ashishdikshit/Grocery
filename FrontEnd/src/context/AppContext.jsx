import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const value = {
    navigate,
    user,
    setUser,
    admin,
    setAdmin,
    loading,
    setLoading,
    categoriesData,
    
    productsData,
    blogsData,
    cart,
    favorite,
    axios
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
