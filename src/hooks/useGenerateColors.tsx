import { useState } from "react";

interface ColorObject {
  isLocked: boolean;
  value: string;
  colorName: string;
}

export const useGenerateColors = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [colorPages, setColorPages] = useState<[ColorObject[], ColorObject[]]>([
    [
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Primary",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Secondary",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Primary Light",
      },
    ],
    [
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "text on dark",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Text 600",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Text 900",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Warning",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Success",
      },
      {
        isLocked: false,
        value: "#FAD4D9",
        colorName: "Failure",
      },
    ],
  ]);
  const togglePage = () => {
    setActivePage((prev) => {
      return prev === 0 ? 1 : 0;
    });
  };

  const toggleLock = (colorName: string) => {
    setColorPages((prev) => {
      return prev.map((page) => {
        return page.map((color) => {
          if (color.colorName === colorName) {
            return { ...color, isLocked: !color.isLocked };
          }
          return color;
        });
      });
    });
  };
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const generateColors = () => {
    setColorPages((prev) => {
      return prev.map((page, index) => {
        if (activePage !== index) {
          return page;
        }
        return page.map((color) => {
          if (!color.isLocked) {
            return { ...color, value: generateRandomColor() };
          }

          return color;
        });
      });
    });
  };
  return {
    generateColors,
    toggleLock,
    colorPages,
    setColorPages,
    togglePage,
    activePage,
  };
};
