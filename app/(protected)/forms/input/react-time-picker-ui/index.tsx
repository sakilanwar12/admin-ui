"use client";

import { useState } from "react";
import type { IReactTimePickerUiProps, TSelectedTime } from "./types";
import "./style.css";
import DropDownPanel from "./DropDownPanel";

function ReactTimePickerUi({
  label,
  value,
  onChange,
  error,
}: IReactTimePickerUiProps) {
  const [selectedTime, setSelectedTime] = useState<TSelectedTime>(value || "");

  return (
    <DropDownPanel
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      onChange={onChange}
    />
  );
}

export default ReactTimePickerUi;
