import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading,
    data: cart = [],
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (token) {
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        return res.data;
      }
    },
  });
  return [isLoading, cart, refetch];
};

export default useCart;
