import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUERIES } from "./queries";
import { TestApi } from "../api/TestApi";

export const useGetTest = (param1: string) =>
  useQuery(QUERIES.TEST_GET_ALL, () => TestApi.getAll(param1));

export const useUpdateTest = () => {
  const queryClient = useQueryClient();
  return useMutation((param1: string) => TestApi.update(param1), {
    onSuccess() {
      queryClient.refetchQueries([QUERIES.TEST_GET_ALL]);
    },
  });
};
