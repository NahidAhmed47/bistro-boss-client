import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  console.log(token);
  const {
    isLoading,
    data: cart = [],
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (token) {
        const res = await fetch(
          `http://localhost:5000/carts?email=${user?.email}`,
          {
            headers: { authorization: `bearer ${token}` },
          }
        );
        return res.json();
      }
    },
  });
  return [isLoading, cart, refetch];
};

export default useCart;
