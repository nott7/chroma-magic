import { mix, saturate, lighten, darken } from "polished";
import ColorElement from "./ColorElement";

const generateAnalogousPalette = (baseColor) => {
  const saturationAmount = 0.1;
  const lightnessAmount = 0.1;

  const analogousColor1 = saturate(
    saturationAmount,
    mix(0.1, baseColor, lighten(lightnessAmount, baseColor))
  );
  const analogousColor2 = saturate(
    saturationAmount,
    mix(0.2, baseColor, lighten(lightnessAmount * 2, baseColor))
  );
  const analogousColor3 = saturate(
    saturationAmount,
    mix(0.3, baseColor, lighten(lightnessAmount * 3, baseColor))
  );

  return [baseColor, analogousColor1, analogousColor2, analogousColor3];
};

const ColorPalette = ({ baseColor }) => {
  const analogousColors = generateAnalogousPalette(baseColor);
  return (
    <section className="flex-col ">
      <h2 className="text-2xl font-bold text-center mb-4">Analogous Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {analogousColors.map((color) => (
          <ColorElement color={color} />
        ))}
      </div>
    </section>
  );
};

export default ColorPalette;
