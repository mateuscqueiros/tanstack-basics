import { QueryClientProvider } from "@tanstack/react-query";
import App from "../App";
import { queryClient } from "../lib/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function AppProvider() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </>
  );
}
