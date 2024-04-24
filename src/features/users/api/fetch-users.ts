import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { UserType } from "../types";

export function fetchUsers(): Promise<UserType[]> {
  return axios.get("/users").then((response) => response.data.users);
}

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })
}
