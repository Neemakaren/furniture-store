import React, { useState, useEffect } from "react";
import "./App.css";
import { Home, AllCategories, AboutUs, ContactUs } from "./pages";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

 

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get("./furniture.json");

      setData(response.data);

      setLoading(false);
    };

    loadPost();
  }, []);

  const filteredProducts = data
    .filter(
      (product) =>
        selectedCategory === "" || product.category === selectedCategory
    )
    .filter(
      (product) => selectedType === "" || product.wood_type === selectedType
    )
    .filter(
      (product) =>
        selectedPriceRange === "" ||
        product.price <= parseFloat(selectedPriceRange)
    )
    .filter(
      (product) =>
        selectedColors.length === 0 ||
        selectedColors.every((color) => product.color.includes(color))
    )
    .filter(
      (product) => selectedSizes === "" || product.finish === selectedSizes
    );

  const categories = [...new Set(data?.map((val) => val.category))];
  const productTypes = [...new Set(data?.map((val) => val.wood_type))];
  const colors = [...new Set(data?.flatMap((val) => val.color))];
  const sizes = [...new Set(data?.map((val) => val.finish))];

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedType("");
    setSelectedPriceRange("");
    setSelectedColors([]);
    setSelectedSizes("");
  };

  const categoryData = {
    label: "Category",
    options: categories,
    selectedOptions: selectedCategory,
    setSelectedOptions: setSelectedCategory,
    filteredProducts: [],
    data: [],
  };

  const typeData = {
    label: "Type",
    options: productTypes,
    selectedOptions: selectedType,
    setSelectedOptions: setSelectedType,
    filteredProducts: [],
    data: [],
  };

  const priceData = {
    label: "Price",
    isPriceRange: true,
    selectedOptions: selectedPriceRange,
    setSelectedOptions: setSelectedPriceRange,
    filteredProducts: filteredProducts,
    data: data,
    options: [],
  };

  const colorData = {
    label: "Color",
    options: colors,
    selectedOptions: selectedColors,
    setSelectedOptions: setSelectedColors,
    isColor: true,
  };

  const finishData = {
    label: "finish",
    options: sizes,
    selectedOptions: selectedSizes,
    setSelectedOptions: setSelectedSizes,
    filteredProducts: [],
    data: [],
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="categories"
            element={
              <AllCategories
                data={data}
                categoryData={categoryData}
                filteredProducts={filteredProducts}
                typeData={typeData}
                priceData={priceData}
                colorData={colorData}
                finishData={finishData}
                resetFilters={resetFilters}
              />
            }
          />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
