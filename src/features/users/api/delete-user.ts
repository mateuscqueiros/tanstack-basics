import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../../lib/query-client";
import { UserType } from "../types";

export function deleteUser(userId: number): Promise<UserType> {
  return axios.delete(`/users/${userId}`).then((response) => response.data);
}

export function useDeleteUser(userId: number) {
  return useMutation({
    mutationFn: () => deleteUser(userId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
