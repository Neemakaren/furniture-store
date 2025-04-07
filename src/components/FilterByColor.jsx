import React, { useContext } from "react";

const FilterByColor = ({ colorData }) => {
  const { label, options, selectedOptions, setSelectedOptions, isColor } =
    colorData;

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <section className="flex flex-col justify-center sm:justify-start lg:flex-col px-4">
      <h4 className="mt-6 text-[15px] font-bold">Filter by Color</h4>
      <div className="bg-gray-100">
        <div className="mb-2">
          <h3>{label}:</h3>
          <div className="space-y-2">
            {options.map((option, id) => (
              <label className="flex space-x-3" key={id}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                {
                  <div>
                    {isColor ? (
                      <div
                        className="h-[15px] w-[15px] rounded-full"
                        style={{ backgroundColor: option }}
                      ></div>
                    ) : (
                      option
                    )}
                  </div>
                }
              </label>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default FilterByColor;
