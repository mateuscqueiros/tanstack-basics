import { QueryClientProvider } from "@tanstack/react-query";
import App from "../App";
import { queryClient } from "../lib/query-client";

export function AppProvider() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>
  );
}
