import React, { useState, useCallback } from "react";
import useEyeDropper from "use-eye-dropper";
import ColorElement from "./ColorElement";
import ColorPalette from "./ColorPalette";

const Main = () => {
  const { open } = useEyeDropper();
  const [color, setColor] = useState("");
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
  );

  const [openColorPalette, setOpenColorPalette] = useState(false);

  const pickColor = useCallback(() => {
    const openPicker = async () => {
      try {
        const color = await open();
        setColor(color.sRGBHex);
        setOpenColorPalette(false);
      } catch (e) {
        console.log(e);
      }
    };
    openPicker();
  }, [open]);

  const handleFileInput = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <main>
      <section className="justify-around items-center">
        <div>
          <h1 className="text-gray-50 text-3xl font-bold">
            Pick a Color from an Image
          </h1>
          <h2 className="mt-8 text-xl">Upload your image:</h2>
          <input
            onChange={handleFileInput}
            accept="image/*"
            className="mt-4 "
            type="file"
            name="image-uploader"
            id="image-uploader"
          />
          <button onClick={pickColor}>Click here to pick a color!</button>
          {color && (
            <div className="mt-12">
              <h2 className="mb-4 ">Color picked:</h2>
              <ColorElement color={color} />

              <button onClick={() => setOpenColorPalette(true)}>
                Generate a Palette
              </button>
            </div>
          )}
        </div>
        <div>
          <img src={image} alt="image placeholder" className="w-96" />
        </div>
      </section>
      {openColorPalette && <ColorPalette baseColor={color} />}
    </main>
  );
};

export default Main;
