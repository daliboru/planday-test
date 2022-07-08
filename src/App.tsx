import "98.css";
import { useEffect, useState } from "react";
import "./App.scss";
import Loader from "./components/Loader";
import Grid from "./components/Grid";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [isAnimation, setIsAnimation] = useState(true);
  const { data, loading } = useFetch();

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(false);
    }, 3200);
  }, []);

  return <>{isAnimation || loading ? <Loader /> : <Grid data={data} />}</>;
}

export default App;
