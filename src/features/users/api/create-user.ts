import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { queryClient } from "../../../lib/query-client";
import { UserType } from "../types";

export function createUser(newUser: any): Promise<UserType> {
  return axios.post("/users/add", newUser).then((response) => response.data);
}

export function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
