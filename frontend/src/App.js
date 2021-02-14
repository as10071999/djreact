import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(async () => {
    let url = "http://127.0.0.1:8000/api/";
    const response = await axios.get(url);
    console.log(response.data);
  }, []);

  return <>Hello</>;
}

export default App;
