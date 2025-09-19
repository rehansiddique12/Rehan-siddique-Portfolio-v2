import { useState } from "react";
import { Route, Routes } from "react-router";
import Loader from "../src/components/ui/loader";
import Home from "./pages/home";

const App = () => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loader onComplete={() => setLoading(false)} />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
