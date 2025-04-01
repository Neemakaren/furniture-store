import { useState, useEffect } from "react";
import "./App.css";
import { Home, AllCategories, AboutUs, ContactUs } from "./pages";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import axios from "axios";



function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const response = await axios.get("./furniture.json");

      // After fetching data stored it in posts state.
      setData(response.data);

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<AllCategories data={data}/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
