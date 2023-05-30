import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
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
