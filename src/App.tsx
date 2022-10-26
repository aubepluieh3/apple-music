import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./Main";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
