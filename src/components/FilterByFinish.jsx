import React, {useEffect, useState} from 'react'

const FilterByFinish = ({ finishData }) => {
  const {
    label,
    options,
    selectedOptions,
    setSelectedOptions,
    isPriceRange = false,
    filteredProducts,
    data,
  } = finishData;

  
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
    <section className="flex flex-col w-100 justify-center sm:justify-start sm:w-80 lg:flex-col px-4">
      <div className="mb-2">
        <h3 className="mt-6 text-[15px] font-bold">Filter by {label}:</h3>
        {isPriceRange ? (
          <div className="flex">
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
    </section>
  );
};

export default FilterByFinish