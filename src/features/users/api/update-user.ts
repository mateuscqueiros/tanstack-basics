import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../../lib/query-client";
import { UserType } from "../types";

export function updateUser(user: UserType, userId: number): Promise<UserType> {
  return axios.put(`/users/${userId}`, user).then((response) => response.data);
}

export function useUpdateUser(userId: number) {
  return useMutation({
    mutationFn: (user: UserType) => updateUser(user, userId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
