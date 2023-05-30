import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem('access-token')
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (token) {
        const res = await axiosSecure(`/users/admin/${user?.email}`);
        return res.data?.admin;
      }
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
