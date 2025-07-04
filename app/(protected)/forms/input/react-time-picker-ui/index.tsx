"use client";

import { useState } from "react";
import Slot from "./Slot";
import type { IReactTimePickerUiProps, TSelectedTime } from "./types";
import { getTimePortion } from "./utils";
import "./style.css";

function ReactTimePickerUi({
  label,
  value,
  onChange,
  error,
}: IReactTimePickerUiProps) {
  const [selectedTime, setSelectedTime] = useState<TSelectedTime>(value || "");

  const handleChange = (
    value: string,
    portion: "hours" | "minutes" | "seconds"
  ) => {
    setSelectedTime((prev) => {
      const [hours, minutes, seconds] = prev?.split(":") || [];
      if (portion === "hours") {
        return `${value}:${minutes}:${seconds}`;
      } else if (portion === "minutes") {
        return `${hours}:${value}:${seconds}`;
      } else if (portion === "seconds") {
        return `${hours}:${minutes}:${value}`;
      }
    });
    onChange?.(selectedTime);
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3">
        <Slot
          min={0}
          max={23}
          step={1}
          selectedTime={getTimePortion(selectedTime, "hours")}
          onClick={(value) => handleChange(value, "hours")}
        />
        <Slot
          min={0}
          max={59}
          step={1}
          selectedTime={getTimePortion(selectedTime, "minutes")}
          onClick={(value) => handleChange(value, "minutes")}
        />
        <Slot
          min={0}
          max={59}
          step={1}
          selectedTime={getTimePortion(selectedTime, "seconds")}
          onClick={(value) => handleChange(value, "seconds")}
        />
      </div>
    </div>
  );
}

export default ReactTimePickerUi;
