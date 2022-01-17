import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Main } from "./components/Main/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
