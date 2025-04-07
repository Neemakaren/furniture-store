import React, {useEffect, useState} from 'react'

const FilterByPrice = ({priceData}) => {
     const {
        label,
        options,
        selectedOptions,
        setSelectedOptions,
        isPriceRange = false,
        filteredProducts,
        data,
      } = priceData;
    
      
        const getMaxPrice = () =>
          Math.max(...data.map((product) => product.price), 0);
        const getSelectionPrice = () =>
          Math.max(...filteredProducts.map((product) => product.price), 0);
      
        
        const [maxPrice, setMaxPrice] = useState(getMaxPrice());
        const [selectionPrice, setSelectionPrice] = useState(getSelectionPrice());
      
        
        const [sliderValue, setSliderValue] = useState(maxPrice.toString());
      
        useEffect(() => {
          setMaxPrice(getMaxPrice());
          setSelectionPrice(getSelectionPrice());
        }, [filteredProducts, data]);
  return (
    <div className="mb-2">
      <h3>{label}:</h3>
      {isPriceRange ? (
        <div className="flex flex-col lg:flex-row">
          <input
            type="range"
            min="0"
            max={maxPrice.toString()}
            step="1"
            value={sliderValue}
            onChange={(e) => {
              const minPrice = e.target.value;
              setSliderValue(minPrice);
              setSelectedOptions([minPrice, sliderValue]);
            }}
          />
          <div className="whitespace-nowrap font-bold ml-1">
            $0 - ${selectionPrice};
          </div>
        </div>
      ) : (
        <select
          value={selectedOptions}
          onChange={(e) => setSelectedOptions(e.target.value)}
          className="border w-full rounded-none capitalize"
        >
          <option value="">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default FilterByPrice