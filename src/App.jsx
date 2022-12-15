import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://movieappbackend.onrender.com",
  });
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route index element={<Login />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
