import React from "react";

const ColorElement = ({ color }) => {
  const handleCopyColor = async () => {
    await navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };
  return (
    <div id="color-element_container">
      <div
        className={
          "group w-full h-32 rounded-lg cursor-pointer hover:opacity-80 flex items-center justify-center"
        }
        style={{ backgroundColor: color }}
        onClick={handleCopyColor}
      ></div>
      <p className="font-bold text-center my-2 text-gray-50">{color}</p>
    </div>
  );
};

export default ColorElement;
