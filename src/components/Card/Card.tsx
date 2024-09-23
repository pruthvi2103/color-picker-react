import React from "react";
import "./card.css";
type Props = {
  backgroundColorData: {
    value: string;
    isLocked: boolean;
    colorName: string;
  };

  toggleLock: (param: any) => void;
  backgroundColorDataSetter: any;
};

const Card = ({
  backgroundColorData = {
    isLocked: false,
    value: "",
    colorName: "",
  },

  toggleLock,
  backgroundColorDataSetter,
}: Props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColorData.value }}
    >
      <div>
        Lock
        <input
          type="checkbox"
          checked={backgroundColorData.isLocked}
          onChange={() => toggleLock(backgroundColorData.colorName)}
        />
      </div>
      <b> {backgroundColorData.value}</b>
      {backgroundColorData.colorName}
    </div>
  );
};

export default Card;
