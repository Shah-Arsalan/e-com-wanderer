import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { DataReducer, initialState } from "../DataReducer/DataReducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await axios.get("/api/products");

        if (fetchedData.status === 200 || fetchedData.status === 201)
          dispatch({
            type: "INITIAL_DATA_FETCH",
            payload: { products: fetchedData.data.products },
          });
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, []);
  useEffect(() => {
    if (!token) {
      dispatch({
        type: "INITIAL_DATA_FETCH",
        payload: { wishlist: [] },
      });
      dispatch({
        type: "INITIAL_DATA_FETCH",
        payload: { cart: [] },
      });
    }
    if (token) {
      dispatch({
        type: "INITIAL_DATA_FETCH",
        payload: { wishlist: user?.wishlist },
      });
      dispatch({
        type: "INITIAL_DATA_FETCH",
        payload: { cart: user?.cart },
      });
    }
  }, [token]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
