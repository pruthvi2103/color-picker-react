export const generateSimilarColorPalette = (color: string, count: number) => {
  const colorObj = new Color(color);
  const hsl = colorObj.hsl().string();
  const hslArr = hsl.split(",");
  const hslArrNum = hslArr.map((item) => {
    return parseFloat(item);
  });
  const hslObj = {
    h: hslArrNum[0],
    s: hslArrNum[1],
    l: hslArrNum[2],
  };
  const colorPalette = [];
  for (let i = 0; i < count; i++) {
    const newColor = new Color({
      h: hslObj.h + Math.random() * 30 - 15,
      s: hslObj.s + Math.random() * 30 - 15,
      l: hslObj.l + Math.random() * 30 - 15,
    });
    colorPalette.push(newColor.hex());
  }
  return colorPalette;
};
